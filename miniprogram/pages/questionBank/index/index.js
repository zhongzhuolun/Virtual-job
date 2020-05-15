// miniprogram/pages/questionBank/index/index.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const _ = db.command
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0, // 当前tabar被激活的序列
    checkoutBank: app.globalData.examType, // 当前所选的类型按钮
    banners: [], // 当前轮播图
    industry: '', // 当前所选行业
    errBankList: [], // 错题集数据
    colBankList: [], // 收藏的题库数据
    item: {
      bankList: [], // 题库简介数据
      statusList: [] // 题库状态数据
    },
    ifPullDown: false, // 是否下拉完成
    loginStatus: app.globalData.loginStatus, // 登录状态
    searchValue: '', // 搜索的内容
    isLoading: true, // 是否还在加载中
    // ifRefresh: false, // 是否下拉刷新
    searchValue: '', // 搜索内容
  },
  // tabar发生改变的时候重新渲染数据
  onChange(event) {

    this.setData({
      isLoading: true
    })
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    }
    let item = {...this.data.item}
    this.refleshStatus(item)
  },
  // 除了搜索
  handleSearch: function(e) {
    let value = e.detail.value
    this.setData({
      searchValue: value
    })
      if(this.data.checkoutBank === 'written') {
        this.handleWritten('search')
      } else {
        this.handleInterview('search')
      }
    
  },
  // 获取收藏和错题集
  getColErrBank() {
    let bankList = this.data.item.bankList
    let colres = bankList.filter((item) => {
      return item.status.collection === true
    })
    let errres = bankList.filter((item) => {
      return item.status.mistaked === true
    })
    this.setData({
      isLoading: false
    })
    this.setData({
      colBankList: colres,
      errBankList: errres
    })
  },
  // 刷新重置状态
  refleshStatus(item) {
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
        // this.setData({
        //   ifRefresh: false,
        //   ifPullDown: false
        // })
        wx.stopPullDownRefresh({
          success: () => {
            this.setData({
              ifPullDown: false
            })
          }
        }); // 默认停止用户下拉刷新的状态
        // this.bindrefresherrestore()
        wx.hideLoading()
      })

    })
  
  },
  // 处理点击笔试按钮的事件
  handleWritten(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    }
    let {searchValue} = this.data
    let options = {
      class: '笔试题',
      industry: this.data.industry,
      title: {
        $regex: ".*" + searchValue + ".*",
        $options: 'i'
      }
    }
    let pagesize
    if (e) {
      this.pageObj.pagesize = 0
      pagesize = 0
    } else {
      pagesize = this.pageObj.pagesize
    }
    banksList.where(options).skip(pagesize).orderBy('id', 'desc').get().then(res => {
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
        if (this.data.ifPullDown) {
          item.bankList = res.data
        } else {
          item.bankList = item.bankList.concat(res.data)
        }
        this.refleshStatus(item)
      } else {
        // 代表没有数据
        item.bankList = []
        this.setData({
          isLoading: false,
          item       
        })
      }

    })
    this.setData({
      checkoutBank: 'written'
    })
    app.globalData.examType = 'written'

   
  },
  // 处理点击面试按钮的事件
  handleInterview(e) {
    if (!this.data.loginStatus) {
      wx.navigateTo({
        url: '../../authorization/authorization',
      })
      return
    }
    let {searchValue} = this.data
    let options = {
      class: '面试题',
      industry: this.data.industry,
      title: {
        $regex: ".*" + searchValue + ".*",
        $options: 'i'
      }
    }
    let pagesize;
    if (e) {
      this.pageObj.pagesize = 0
      pagesize = 0
    } else {
      pagesize = this.pageObj.pagesize
    }
    banksList.where(options).skip(pagesize).orderBy('id', 'desc').get().then(res => {
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
        if (this.data.ifPullDown) {
          item.bankList = res.data
        } else {
          item.bankList = item.bankList.concat(res.data)
        }
        this.refleshStatus(item)
      } else {
        // 代表没有数据
        item.bankList = []
        this.setData({
          isLoading: false,
          item       
        })
      }
    })

    this.setData({
      checkoutBank: 'interview',
      active: 0
    })
    app.globalData.examType = 'interview'

  },

  // 处理收藏
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
        })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let industry =  wx.getStorageSync('industry')
    this.setData({
      loginStatus: app.globalData.loginStatus
    })
    if (this.data.loginStatus) {
      if (!industry) {
        wx.navigateTo({
          url: '../../home/IndustryChoose/IndustryChoose?type=题库',
        })
      } else {
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
      }
    }

  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.pageObj.pagesize = 0
    this.setData({
      isLoading: true
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // pulling: function() {
  //   this.setData({
  //     ifRefresh: true
  //   })
  //   console.log('pull')
  // },
  // refresh: function() {
   
  //   this.myPullDownRefresh()

  //   console.log('refresh')
  // },
  // restore: function() {
  //   // this.myPullDownRefresh()
  //   console.log('restore')
  // },
  // myPullDownRefresh: function(e) {
  //   this.pageObj.pagesize = 0
  //   this.setData({
  //     ifPullDown: true,
  //     ifRefresh: false
  //   }, () => {
  //     if(this.data.checkoutBank === 'written') {
  //       this.handleWritten()
  //     } else {
  //       this.handleInterview()
  //     }
  //   })
  // },
  onPullDownRefresh: function (e) {
    this.pageObj.pagesize = 0
    this.setData({
      ifPullDown: true
    }, () => {
      if(this.data.checkoutBank === 'written') {
        this.handleWritten()
      } else {
        this.handleInterview()
      }
    })
    
  },

  pageObj: {
    pagesize: 0,
    ifAdd: true,
    ifBottom: false
  },
    /**
   * 页面上拉触底事件的处理函数
   */
  myReachBottom: function(e) {
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
  onReachBottom: function (e) {
    // this.pageObj.ifBottom = true
    // if (this.pageObj.ifAdd) {
    //   this.pageObj.pagesize += 20
    //   if(this.data.checkoutBank === 'written') {
    //     this.handleWritten()
    //   } else {
    //     this.handleInterview()
    //   }
    // } 
  
  },

}
)