const app = getApp()
const db = wx.cloud.database()
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    questions: []
  },
  getData: function(id) {
    console.log(id)

    wx.showLoading({
      title: '加载中',
    })
    let {questions} = this.data
      interviewBankForUser.get().then((res) => {
        let banksList = res.data[0].interviewBankList
        console.log(banksList)

        questions = banksList.find((value, index) => {
          return value.parentId === id
        })
        console.log(questions)

        this.setData({
          questions
        }, () => {
          wx.hideLoading()
        })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
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
    let {id} = this.data
    this.setData({
      industry: wx.getStorageSync('industry')
    }, () => {
      this.getData(id)
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