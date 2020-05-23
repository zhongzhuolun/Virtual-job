const db = wx.cloud.database()
const commentsForUser = db.collection('commentsForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replyNum: 0, // 评论未读数
    doyNum: 0, // 点赞未读数
    systemNum: 0, // 系统消息未读数
    commentList: [], // 评论数组
  },
  toReply: function(e) {
    wx.navigateTo({
      url: '../viewReplay/viewReplay?type=reply',
    })
  },
  toAppre: function(e) {
    wx.navigateTo({
      url: '../viewReplay/viewReplay?type=appre',
    })
  },
  toInfo: function(e) {
    wx.navigateTo({
      url: '../viewReplay/viewReplay?type=info',
    })
  },
  // 获取未读消息
  getMsg: function() {
    let {commentList, replyNum, doyNum} = this.data
    commentsForUser.get().then((res) => {
      commentList = res.data[0].commentList
      this.setData({
        commentList
      })
      doyNum = 0
      replyNum = 0
      commentList.forEach((value, index) => {
        value.spot_count.forEach((value, index) => {
          if (!value.ifView) {
            doyNum++
          }
        })
        value.reply.forEach((value, index) => {
          if (!value.ifView) {
            replyNum++
          }
        })
      })
      this.setData({
        doyNum,
        replyNum
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
    this.getMsg()
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