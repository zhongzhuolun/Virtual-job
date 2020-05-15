// miniprogram/pages/home/enterWritten/enterWritten.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank: {},
    industry: wx.getStorageSync('industry')
  },
  handleStartExam: function(e) {
    let bank = this.data.bank
    let bankId = bank.id
    let statusObj = {
      id: bankId
    }
    bank.status.doing = true
    statusObj.status = bank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
        let result = statusList.findIndex((value) => {
          return value.id == bankId
        })
        if(result !== -1) {
          statusList[result].status.doing = true
        } else {
          statusList.push(statusObj)
        }
        wx.cloud.callFunction({
          name: 'updateBankStatus',
          data: {
            statusList,
          }
        }).then(console.log)
        wx.navigateTo({
          url: '../examWritten/examWritten?id=' + bankId
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
    let industry = wx.getStorageSync('industry')
    this.setData({
      industry
    })
    banksList.where({
      class: '笔试题', 
      industry,
      // id: 10 // 暂时写死（后期应该为随机，且优先选择用户未曾刷过的题）
    }).get().then((res) => {
      console.log(res.data)
      let bankLists = res.data
      let index = Math.floor(Math.random(0,1)*bankLists.length)
      // console.log(Math.floor(Math.random(0,1)*bankLists.length))
      console.log(res)
      this.setData({
        bank: res.data[index]
      })
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