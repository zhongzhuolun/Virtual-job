const app = getApp()
const db = wx.cloud.database()
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banksList: [],
    industry: wx.getStorageSync('industry')
  },
  // toView: function(e) {
  //   wx.navigateTo({
  //     url: '../viewVideo/viewVideo?id=',
  //   })
  // },
  getData: function() {
    wx.showLoading({
      title: '加载中',
    })
    let {banksList, industry} = this.data
      interviewBankForUser.get().then((res) => {
        banksList = res.data[0].interviewBankList
        banksList = banksList.filter((value, index) => {
          return value.industry === industry
        })
        this.setData({
          banksList
        }, () => {
          wx.hideLoading()
        })
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
    this.setData({
      industry: wx.getStorageSync('industry')
    }, () => {
      this.getData()
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