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
    modalName: null, // 模态框是否显示
    ifViewWrong: false, // 是否只看错题
    wrongIndex: 0, // 错题序列
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
    wx.showLoading({
      title: '加载中',
    })
    let {questionIndex, correct_answer, examBank, ifViewWrong, wrongIndex} = this.data
    if (ifViewWrong) { // 代表是查看错题的状态
      if (wrongIndex < examBank.wrongList.length - 1) {
        wrongIndex++
        if (typeof examBank.wrongList[wrongIndex] !== 'object') {
          questionIndex = examBank.wrongList[wrongIndex]
        } else {
          questionIndex = examBank.wrongList[wrongIndex].index
        }
        correct_answer = examBank.bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer,
          wrongIndex
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      } else {
        // 代表查看总结
        wx.navigateBack()
      }
    } else {
      if (questionIndex < examBank.bank.bank.length - 1) {
        questionIndex++
        correct_answer = examBank.bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer,
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      } else {
        // 代表查看总结
        wx.navigateBack()
      }
    }
 
  },
  // 处理上一题
  handlePre: function(e) {
    wx.showLoading({
      title: '加载中',
    })
    let {questionIndex, correct_answer, examBank, ifViewWrong, wrongIndex} = this.data
    if (ifViewWrong) { // 代表是查看错题的状态
      if (wrongIndex > 0) {
        wrongIndex--
        if (typeof examBank.wrongList[wrongIndex] !== 'object') {
          questionIndex = examBank.wrongList[wrongIndex]
        } else {
          questionIndex = examBank.wrongList[wrongIndex].index
        }
        correct_answer = examBank.bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer,
          wrongIndex
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      } else {
        // 代表查看总结
        wx.navigateBack()
      }
    } else {
      if (questionIndex > 0) {
        questionIndex--
        correct_answer = examBank.bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      }
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
  // 处理菜单的点击
  handleMenu: function(e) {
    console.log(e)
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
  },
  // 处理模态框的关闭
  hideModal: function(e) {
    this.setData({
      modalName: null
    })
  },
  // 处理切换查看试卷的类型
  checkType: function(e) {
    console.log(e)
    let wrongList = this.data.examBank.wrongList
    this.setData({
      ifViewWrong: !this.data.ifViewWrong
    }, () => {
      if (this.data.ifViewWrong) {
        if (typeof wrongList[0] !== 'object') {
          this.setData({
            questionIndex: wrongList[0]
          })
        } else {
          this.setData({
            questionIndex: wrongList[0].index
          })
        }
      } else {
        this.setData({
          questionIndex: 0
        })
      }
    })
  },
  // 根据指定序号跳转题目
  skipQuestion: function(e) {
    let id = e.target.id*1
    this.hideModal()
    this.setData({
      questionIndex: id-1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.class)
    console.log(app.globalData.examBank)
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      class: options.class,
      examBank: app.globalData.examBank,
      correct_answer: app.globalData.examBank.bank.bank[0].correct_answer.toString()
    }, () => {
      wx.hideLoading({
        complete: (res) => {},
      })
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