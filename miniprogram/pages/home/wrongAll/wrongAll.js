// miniprogram/pages/home/wrongAll/wrongAll.js
const app = getApp()
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const writtenQuestions = db.collection('writtenQuestions')
const writtenBankForUser = db.collection('writtenBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class: '', // 当前是面试还是笔试
    examBank: {}, // 笔试题中包含当前用户所做的题库，错误集合，选择的集合
    questionIndex: 0, // 当前题目的序列
    correct_answer: '', // 正确答案
    ifViewAllComments: false, // 查看所有评论
    ifCollect: false, // 是否收藏

  },
  // 处理查看所有评论
  viewAllComments: function(e) {
    console.log(e)
    this.setData({
      ifViewAllComments: !this.data.ifViewAllComments
    })
  },
  // 处理下一题
  handleNext: function(e) {
    let {questionIndex, correct_answer, examBank} = this.data
    if (questionIndex < examBank.bank.bank.length - 1) {
      questionIndex++
      correct_answer = examBank.bank.bank[questionIndex].correct_answer.toString()
      this.setData({
        questionIndex,
        correct_answer
      })
    }
  },
  // 处理上一题
  handlePre: function(e) {
    let {questionIndex, correct_answer, examBank} = this.data
    if (questionIndex > 0) {
      questionIndex--
      correct_answer = examBank.bank.bank[questionIndex].correct_answer.toString()
      this.setData({
        questionIndex,
        correct_answer
      })
    }
  },
   // 处理收藏(更新用户的题库状态以及题库详情)
   handleCollection(e) {
    wx.showLoading()
    let title = ''
    let {bank} = this.data.examBank
    let {ifCollect} = this.data
    let bankId = bank.parentId
    let statusObj = {
      id: bankId
    }
    if (ifCollect) {
      bank.status.collection = false
      title = '取消收藏成功'
      this.setData({
        ifCollect: false
      })
    } else {
      bank.status.collection = true
      title = '收藏成功'
      this.setData({
        ifCollect: true
      })
    }
    statusObj.status = bank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
        let result = statusList.findIndex((value) => {
          return value.id == bankId
        })
        if(result !== -1) {
          if (!bank.status.collection) {
            statusList[result].status.collection = false
          } else {
            statusList[result].status.collection = true
          }
        } else {
          statusList.push(statusObj)
        }
        wx.cloud.callFunction({
          name: 'updateBankStatus',
          data: {
            statusList
          }
        }).then(() => {
          wx.hideLoading()
          wx.showToast({
            title: title,
            icon: 'success'
          })
        })
    })
    writtenBankForUser.get().then((res) => {
      let writtenBankList = res.data[0].writtenBankList
      let result = writtenBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      if(result !== -1) {
        writtenBankList[result] = bank
      } else {
        writtenBankList.push(bank)
      }
      wx.cloud.callFunction({
        name: 'updateWrittenBank',
        data: {
          writtenBankList,
        }
      }).then(console.log)
    })

  },
  // 获取当前题库状态
  getStatus: function() {
    let id = this.data.examBank.bank.parentId
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let ifCollect
      let result = statusList.find((value) => {
        return value.id === id
      })
      if(result) {
        ifCollect = result.status.collection
      }
      this.setData({
        ifCollect
      })

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.class)
    console.log(app.globalData.examBank)
    this.setData({
      class: options.class,
      examBank: app.globalData.examBank,
      correct_answer: app.globalData.examBank.bank.bank[0].correct_answer.toString()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getStatus()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})