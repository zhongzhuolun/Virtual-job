const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginStatus: app.globalData.loginStatus
  },
  handleWritten: function(e) {
    if(this.data.loginStatus) {
      wx.navigateTo({
        url: '../IndustryChoose/IndustryChoose?type=笔试',
      })
    } else {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
    }
  },
  handleInterview: function() {
    if(this.data.loginStatus) {
      wx.navigateTo({
        url: '../IndustryChoose/IndustryChoose?type=面试',
      })
    } else {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
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
    console.log(app.globalData.loginStatus)
      this.setData({
        loginStatus: app.globalData.loginStatus
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