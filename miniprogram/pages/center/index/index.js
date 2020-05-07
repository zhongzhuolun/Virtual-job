// miniprogram/pages/center/index/index.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loginStatus: app.globalData.loginStatus
  },
  myBanks: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    }
  },
  interviewCurrent: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    }
  },

  myMsg: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    }
  },

  feedback: function(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    }
  },



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
    app.globalData.userInfo = userInfo
    this.setData({
      loginStatus: app.globalData.loginStatus,
      userInfo
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