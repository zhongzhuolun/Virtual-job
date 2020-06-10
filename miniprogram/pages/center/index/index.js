// miniprogram/pages/center/index/index.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const commentsForUser = db.collection('commentsForUser')
const bankStatusList = db.collection('bank-status')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loginStatus: app.globalData.loginStatus,
    industry: '',
    commentList: [],
    allMsgNum: 0
  },
  // 处理我的题库
  myBanks: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    } else {
      wx.navigateTo({
        url: '../myBanks/myBanks',
      })
    }
  },
  // 处理面试现场
  interviewCurrent: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    } else {
      wx.navigateTo({
        url: '../InterviewScenes/InterviewScenes',
      })
    }
  },
  // 处理查看我的消息
  myMsg: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    } else {
      wx.navigateTo({
        url: '../myMsg/myMsg',
      })
    }
  },
  // 处理意见反馈
  feedback: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    } else {
      // wx.navigateTo({
      //   url: '../',
      // })
    }
  },
  getMsg: function() {
    let {commentList, allMsgNum} = this.data

    commentsForUser.get().then((res) => {
      commentList = res.data[0].commentList
      this.setData({
        commentList
      })
      allMsgNum = 0
      commentList.forEach((value, index) => {
        value.spot_count.forEach((value, index) => {
          if (!value.ifView) {
            allMsgNum++
          }
        })
        value.reply.forEach((value, index) => {
          if (!value.ifView) {
            allMsgNum++
          }
        })
      })
      this.setData({
        allMsgNum
      })
    })
  },
  // 查看用户协议
  userAgreement: function() {
    wx.navigateTo({
      url: '../agreePolicy/agreePolicy?type=userAgreement',
    })
  },
  // 查看隐私政策
  privacyPolicy: function() {
    wx.navigateTo({
      url: '../agreePolicy/agreePolicy?type=privacyPolicy',
    })
  },
  // 处理登录
  handleLogin: function(e) {
    wx.showLoading({
      title: '加载中',
    })
    let userInfo = e.detail.userInfo
    if (userInfo) {
      this.setData({
        userInfo
      }, () => {
        app.globalData.userInfo = userInfo
        app.globalData.loginStatus = true
        this.setData({
          loginStatus: true
        })
        wx.setStorage({
          data: userInfo,
          key: 'userInfo',
        })
        wx.hideLoading()
        wx.showToast({
          title: '登录成功',
        })
      })
    } else {
      wx.hideLoading()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let userInfo = wx.getStorageSync('userInfo')
    let industry = wx.getStorageSync('industry')
    app.globalData.userInfo = userInfo
    let loginStatus = app.globalData.loginStatus
    console.log(app.globalData)
    this.getMsg()
    this.setData({
      loginStatus,
      userInfo,
      industry
    })
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