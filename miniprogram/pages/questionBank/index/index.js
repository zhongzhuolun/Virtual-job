// miniprogram/pages/questionBank/index/index.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
import tempObj from '../template/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    checkoutBank: 'written',
    banners: [],
    // statusList: [],
    // bankList: [],
    item: {
      bankList: [],
      statusList: []
    }
  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.index + 1}`,
    //   icon: 'none'
    // });
  },
   handleWritten() {
    // 处理点击笔试按钮的事件
    wx.showLoading({
      title: '数据加载中',
    })
    banksList.where({
      class: '笔试题',
      industry: '前端'
    }).get().then(res => {
      let item = {...this.data.item}
      item.bankList = res.data
      bankStatusList.get().then(res => {
        let statusList = res.data[0].statusList
        item.bankList.forEach((item, index) => {
          let result = statusList.find((value) => {
            console.log(value)
            return value.id === item.id
          })
          console.log(result)
        })
        // console.log(res.data[0].statusList)

      })
      this.setData({
        item: {...item}
      })
      wx.hideLoading()
    })
    this.setData({
      checkoutBank: 'written'
    })
  },
  handleInterview() {
    // 处理点击面试按钮的事件
    wx.showLoading({
      title: '数据加载中',
    })
    banksList.where({
      class: '面试题',
      industry: '前端'

    }).get().then(res => {
      console.log(res.data)
      let item = {...this.data.item}
      item.bankList = res.data
      bankStatusList.get().then(res => {
        let statusList = res.data[0].statusList
        console.log(res.data)
        item.bankList.forEach((item, index) => {
          let result = statusList.find((value) => {
            return value.id === item.id
          })
          if(result) {
            item.status = result.status
          }
        })
        this.setData({
          item: {...item}
        })
        wx.hideLoading()
        // console.log(res.data[0].statusList)
      })
     
    })
    this.setData({
      checkoutBank: 'interview'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.checkoutBank === 'written') {
      this.handleWritten()
    } else {
      this.handleInterview()
    }
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

  }}
  )