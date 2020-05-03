// miniprogram/pages/home/enterWritten/enterWritten.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    banksList.where({
      class: '笔试题',
      industry: this.data.industry,
      id: 10
    }).get().then((res) => {
      this.setData({
        bank: res.data[0]
      })
      console.log(res.data[0])
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