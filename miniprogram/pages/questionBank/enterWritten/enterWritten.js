// miniprogram/pages/questionBank/enterWritten/enterWritten.js
const app = getApp()
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const writtenQuestions = db.collection('writtenQuestions')
const writtenBankForUser = db.collection('writtenBankForUser')
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    examType: '',
    bank: {},
    industry: '',
    modalName: null
  },
  // 处理模态框的打开
  handleStart: function(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
 // 处理开始笔试考试
 handleStartWrittenExam: function(modal) {
  let {bank, examType} = this.data
  let bankId = bank.id
  let statusObj = {
    id: bankId
  }
  bank.status.doing = true
  bank.status.done = false
  statusObj.status = bank.status
  bankStatusList.get().then(res => {
    let statusList = res.data[0].statusList
      let result = statusList.findIndex((value) => {
        return value.id == bankId
      })
      if(result !== -1) {
        statusList[result].status.doing = true
        statusList[result].status.done = false
      } else {
        statusList.push(statusObj)
      }
      wx.cloud.callFunction({
        name: 'updateBankStatus',
        data: {
          statusList,
        }
      }).then(console.log)
      if (examType == 'written') {
        this.handleBankStatusDetail()
        wx.navigateTo({
          url: `../answerQuestions/answerQuestions?id=${bankId}&modal=${modal}`
        })
      } else {
        wx.navigateTo({
          url: `../answerInterviewQuestion/answerInterviewQuestion?id=${bankId}`
        })
      }
    
})
},
  // 处理模态框的关闭
  hideModal: function(e) {
    this.setData({
      modalName: null
    })
  },
  // 处理斗者意境
  handleFighter: function(e) {
    this.handleStartWrittenExam('fighter')
  },
  // 处理贤者意境
  handleSage: function(e) {
    this.handleStartWrittenExam('sage')
  },
  // 处理面试考试
  handleStartInterview: function(e) {
    this.handleStartWrittenExam()
  },
  // 处理更新题库详情状态 （只更新该用户的数据）
  handleBankStatusDetail: function(accuracy) {
    // let typeNum = data // 拿到用户每种题型的正确率和题库中每种题型的数量
    writtenQuestions.where({
      parentId: this.data.bank.id
    }).get().then((res) => {
      let bank = res.data[0]
      let bankId = bank.parentId
      bank.status.doing = true
      bank.status.done = false
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
    })
    
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id*1
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
    let industry = wx.getStorageSync('industry')
    wx.showLoading({
      title: '加载中',
    })
    let examType = app.globalData.examType
    let classType = ''
    if (examType === 'written') {
      classType = '笔试题'
    } else {
      classType = '面试题'
    }
    console.log(classType, industry,  this.data.id )
    banksList.where({
      class: classType, 
      industry,
      id: this.data.id
      // id: 10 // 暂时写死
    }).get().then((res) => {
      console.log(res.data)
      this.setData({
        bank: res.data[0],
        examType,
        industry
      }, () => {
        wx.hideLoading()
      })
    })
    // this.setData({
    //   industry
    // })
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