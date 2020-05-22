const app = getApp()
const db = wx.cloud.database()
const writtenBankForUser = db.collection('writtenBankForUser')
const interviewBankForUser = db.collection('interviewBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkoutBank: 'written', // 默认为笔试
    banksList: [],
    industry: wx.getStorageSync('industry')
  },
  // 处理笔试按钮的点击
  handleWritten: function(e) {
    // 设置当前为笔试状态
    this.setData({
      checkoutBank: 'written'
    })
    app.globalData.examType = 'written'
    this.getData()
  },
  // 处理面试按钮的点击
  handleInterview: function(e) {
    // 设置当前为面试状态
    this.setData({
      checkoutBank: 'interview'
    })
    app.globalData.examType = 'interview'
    this.getData()
  },
  getData: function() {
    wx.showLoading({
      title: '加载中',
    })
    let {checkoutBank, banksList, industry} = this.data
    if (checkoutBank === 'written') {
      writtenBankForUser.get().then((res) => {
        banksList = res.data[0].writtenBankList
        banksList = banksList.filter((value, index) => {
          return value.industry === industry
        })
        this.setData({
          banksList
        }, () => {
          wx.hideLoading()
        })
        console.log(res.data[0].writtenBankList)
      })
    } else {
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

        console.log(res.data[0].interviewBankList)
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