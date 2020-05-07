// miniprogram/pages/questionBank/enterWritten/enterWritten.js
const app = getApp()
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    examType: '',
    bank: {},
    industry: wx.getStorageSync('industry')
  },
 // 处理开始考试
 handleStartExam: function(e) {
  let bank = this.data.bank
  let bankId = bank.id
  let statusObj = {
    id: bankId
  }
  bank.status.doing = true
  statusObj.status = bank.status
  bankStatusList.get().then(res => {
    let statusList = res.data[0].statusList
      let result = statusList.findIndex((value) => {
        return value.id == bankId
      })
      if(result !== -1) {
        statusList[result].status.doing = true
      } else {
        statusList.push(statusObj)
      }
      wx.cloud.callFunction({
        name: 'updateBankStatus',
        data: {
          statusList,
        }
      }).then(console.log)
      wx.navigateTo({
        url: `../answerQuestions/answerQuestions?id=${bankId}`
      })
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    console.log(classType, this.data.industry, options.id )
    banksList.where({
      class: classType, 
      industry: this.data.industry,
      id: options.id*1
    }).get().then((res) => {
      console.log(res.data)
      this.setData({
        bank: res.data[0],
        examType
      }, () => {
        wx.hideLoading()
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