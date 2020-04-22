// miniprogram/pages/center/index/index.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addBank() {
    wx.cloud.callFunction({
      name: 'addBank',
    }).then(console.log)
    // banksList.field({
    //   id: true
    // }).limit(1000).get().then(res => {
    //   let id = res.data[res.data.length - 1].id
    //   wx.cloud.callFunction({
    //     name: 'addBank',
    //     data: {
    //       "id": id + 1, 
    //       "industry": "前端", 
    //       "class": "笔试题",
    //       "title": "腾讯前端笔试题库2", 
    //       "limit_time": "50",
    //       "status": { 
    //         "done": false, 
    //         "doing": false,
    //         "collection": false,
    //         "mistaked": false
    //       }
    //     }
    //   }).then(console.log)
    // })
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