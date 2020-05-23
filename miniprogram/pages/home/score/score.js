// miniprogram/pages/home/score/score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finalCorrectRate: 0, // 最终总正确率
    questionTypesRate: {}, // 每种题型的正确率
    allTypeNum: {}, // 每种题型的数量
  },
    // 处理总的正确率
    handleFinalCorrectRate: function(data) {
      let {accuracy, questionTypeNum} = data
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
        questionTypesRate: accuracy,
        questionTypeNum,
      })
      
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
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
    const eventChannel = this.getOpenerEventChannel()

    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据

    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      this.handleFinalCorrectRate(data)
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