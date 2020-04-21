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
    errBankList: [],
    colBankList: [],
    item: {
      bankList: [],
      statusList: []
    }
  },
  onChange(event) {
    // wx.showLoading({
    //   title: '数据加载中',
    // })
    let item = {...this.data.item}
    this.refleshStatus(item)
    // wx.hideLoading()

    // bankStatusList.get().then(res => {
    //   let statusList = res.data[0].statusList
    //   item.bankList.forEach((item, index) => {
    //     let result = statusList.find((value) => {
    //       console.log(value)
    //       return value.id === item.id
    //     })
    //     if(result) {
    //       item.status = result.status
    //     }
    //   })
    //    this.setData({
    //     item: {...item}
    //   }, () => {
    //     this.getColErrBank()
    //     wx.hideLoading()
    //   })
    // })
   
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.title}`,
    //   icon: 'none'
    // });
  },
  getColErrBank() {
    let bankList = this.data.item.bankList
    let colres = bankList.filter((item) => {
      return item.status.collection === true
    })
    let errres = bankList.filter((item) => {
      return item.status.mistaked === true
    })
    this.setData({
      colBankList: colres,
      errBankList: errres
    })
  },
  refleshStatus(item) {
    // let item = {...this.data.item}
    wx.showLoading({
      title: '数据加载中',
    })
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
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
      }, () => {
        this.getColErrBank()
        wx.hideLoading()
      })

    })
  
  },
   handleWritten(tabtitle) {
    // 处理点击笔试按钮的事件
    // wx.showLoading({
    //   title: '数据加载中',
    // })
    banksList.where({
      class: '笔试题',
      industry: '前端'
    }).get().then(res => {
      let item = {...this.data.item}
      item.bankList = res.data
      this.refleshStatus(item)
      // wx.hideLoading()

      // bankStatusList.get().then(res => {
      //   let statusList = res.data[0].statusList
      //   item.bankList.forEach((item, index) => {
      //     let result = statusList.find((value) => {
      //       return value.id === item.id
      //     })
      //     if(result) {
      //       item.status = result.status
      //     }
      //   })

      // })
      // this.setData({
      //   item: {...item}
      // }, () => {
      //   this.getColErrBank()
      //   wx.hideLoading()
      // })
    })
    this.setData({
      checkoutBank: 'written'
    })
   
  },
  handleInterview(tabtitle) {
    // 处理点击面试按钮的事件
    banksList.where({
      class: '面试题',
      industry: '前端'

    }).get().then(res => {
      let item = {...this.data.item}
      item.bankList = res.data
      this.refleshStatus(item)
    })
    this.setData({
      checkoutBank: 'interview'
    })
  },
  addBank() {
    banksList.field({
      id: true
    }).get().then(res => {
      let id = res.data[res.data.length - 1].id
      wx.cloud.callFunction({
        name: 'addBank',
        data: {
          "id": id + 1, 
          "industry": "前端", 
          "class": "笔试题",
          "title": "腾讯前端笔试题库", 
          "limit_time": "50",
          "status": { 
            "done": false, 
            "doing": false,
            "collection": false,
            "mistaked": false
          }
        }
      }).then(console.log)
      // banksList.add({
      //   data: {
      //     "id": id + 1, 
      //     "industry": "后台", 
      //     "class": "笔试题",
      //     "title": "虎牙后台笔试题库", 
      //     "limit_time": "50",
      //     "status": { 
      //       "done": false, 
      //       "doing": false,
      //       "collection": false,
      //       "mistaked": false
      //     }
      //   }
      // }).then(console.log)
      // console.log(id)
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