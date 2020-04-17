// miniprogram/pages/questionBank/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    checkoutBank: 'written'
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  handleWritten() {
    // 处理点击笔试按钮的事件
    this.setData({
      checkoutBank: 'written'
    })
  },
  handleInterview() {
    // 处理点击面试按钮的事件
    console.log(11)
    this.setData({
      checkoutBank: 'interview'
    })
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