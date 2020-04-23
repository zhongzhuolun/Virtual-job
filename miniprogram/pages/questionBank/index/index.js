// miniprogram/pages/questionBank/index/index.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const _ = db.command
const app = getApp()
import tempObj from '../template/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    checkoutBank: app.globalData.examType,
    banners: [],
    industry: '',
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
  // 处理点击笔试按钮的事件
  handleWritten(e) {
    let pagesize;
    if (e) {
      this.pageObj.pagesize = 0
      pagesize = 0
    } else {
      pagesize = this.pageObj.pagesize
    }
    banksList.where({
      class: '笔试题',
      industry: this.data.industry
    }).skip(pagesize).get().then(res => {
      console.log(res.data)
      let item = {...this.data.item}
      if (e) {
        item.bankList = []
      }
      if (res.data.length === 20) {
        this.pageObj.ifAdd = true
      } else {
        this.pageObj.ifAdd = false
      }
      if (res.data.length > 0) {
        item.bankList = item.bankList.concat(res.data)
        // item.bankList = res.data
        console.log(item)
        this.refleshStatus(item)
      }

    })
    this.setData({
      checkoutBank: 'written'
    })
    app.updataType('written')
   
  },
  handleInterview(e) {

    let pagesize;
    if (e) {
      this.pageObj.pagesize = 0
      pagesize = 0
    } else {
      pagesize = this.pageObj.pagesize
    }
 
    // 处理点击面试按钮的事件
    banksList.where({
      class: '面试题',
      industry: this.data.industry
    }).skip(pagesize).get().then(res => {
      let item = {...this.data.item}
      if (e) {
        item.bankList = []
      }
      if (res.data.length === 20) {
        this.pageObj.ifAdd = true
      } else {
        this.pageObj.ifAdd = false
      }
      if (res.data.length > 0) {
        item.bankList = item.bankList.concat(res.data)
        // item.bankList = res.data
        this.refleshStatus(item)
      }
      // item.bankList = res.data
      // this.refleshStatus(item)
    })
    this.setData({
      checkoutBank: 'interview'
    })
    app.updataType('interview')

  },
 
  handleStartExam(e) {
    let bankId = e.target.id * 1
    let statusObj = {
      id: bankId
    }
    let result = this.data.item.bankList.find((value) => {
      return value.id == bankId
    })
    result.status.doing = true
    statusObj.status = result.status
    bankStatusList.get().then(res => {
      console.log(res)
      let statusList = res.data[0].statusList
      console.log(statusList)
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
            statusList
          }
        }).then(console.log)
    })
  },
  handleCollection(e) {
    let title = ''
    let item = {...this.data.item}
    wx.showLoading()
    let bankId = e.currentTarget.id * 1
    let statusObj = {
      id: bankId
    }
    console.log(bankId)
    let result1 = this.data.item.bankList.find((value) => {
      return value.id == bankId
    })
    if (result1.status.collection) {
      result1.status.collection = false
      title = '取消收藏成功'

    } else {
      result1.status.collection = true
      title = '收藏成功'
    }
    item.bankList.status = result1.status
    statusObj.status = result1.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
        let result = statusList.findIndex((value) => {
          return value.id == bankId
        })
        if(result !== -1) {
          if (!result1.status.collection) {
            statusList[result].status.collection = false
          } else {
            statusList[result].status.collection = true
          }
          // statusList[result].status.collection = true
        } else {
          statusList.push(statusObj)
        }
        wx.cloud.callFunction({
          name: 'updateBankStatus',
          data: {
            statusList
          }
        }).then(() => {
       
          this.refleshStatus(item)
          wx.hideLoading()
          wx.showToast({
            title: title,
            icon: 'success'
          })
          // this.setData({
          //   item: {...item}
          // })
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
    let industry =  wx.getStorageSync('industry')
    // this.setData({
    //   industry
    // })
    let item = {...this.data.item}
      item.bankList = []
      this.setData({
        item: {...item},
        industry
      })
    if(this.data.checkoutBank === 'written') {
      this.handleWritten()
    } else {
      this.handleInterview()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.pageObj.pagesize = 0
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (e) {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  pageObj: {
    pagesize: 0,
    ifAdd: true,
    ifBottom: false
  },
  onReachBottom: function (e) {
    this.pageObj.ifBottom = true
    if (this.pageObj.ifAdd) {
      this.pageObj.pagesize += 20
      if(this.data.checkoutBank === 'written') {
        this.handleWritten()
      } else {
        this.handleInterview()
      }
    } 
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }}
  )