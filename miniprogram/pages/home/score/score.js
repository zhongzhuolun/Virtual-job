const db = wx.cloud.database()
const writtenQuestions = db.collection('writtenQuestions')
const writtenBankForUser = db.collection('writtenBankForUser')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    finalCorrectRate: 0, // 最终总正确率
    id: null,
  },
    // 处理总的正确率
    handleFinalCorrectRate: function() {
      // let {accuracy, questionTypeNum} = data
      let {accuracy, questionTypeNum} = this.data.bank
      let finalCorrectRate = 0
      let score = {sum: 0, allRate: 0}
      for (const key in questionTypeNum) {
        if (questionTypeNum[key] !== 0) {
          // 代表题库中有该题型的题
          score.sum += 1
        }
      }
      for (const key in accuracy) {
          // 代表每钟题型的正确率相加
          score.allRate += accuracy[key]
      }
      finalCorrectRate = Math.floor(score.allRate/score.sum)
      this.setData({
        finalCorrectRate,
      })
      
    },
     // 获取当前面试题库
  getCurrentBank: function (bankId) {
    wx.showLoading({
      title: '加载中',
    })
    writtenBankForUser.get().then((res) => {
      let writtenBankList = res.data[0].writtenBankList
      let result = writtenBankList.find((value) => {
        return value.parentId == bankId
      })
      this.setData({
        bank: result,
      }, () => {
        this.handleFinalCorrectRate()
        wx.hideLoading()
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
    this.getCurrentBank(this.data.id)
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