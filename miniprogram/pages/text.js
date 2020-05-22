const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const interviewQuestions = db.collection('interviewQuestions')
const writtenQuestions = db.collection('writtenQuestions')
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banks: [], // 面试题库简介
    bankIndex: 0, // 
    id: 12, // 题库的ID
    detailBanks: [], // 面试题库详情
    banks1: [], // 笔试题库简介
    detailBanks1: [], // 笔试题库详情
  },
  // 获取题库简介
  getBankList: function (e) {
    banksList.orderBy('id', 'desc').get().then(res => {
      console.log(res.data.length)
      let id = res.data.length + 1
      this.setData({
        id
      })
    })
  },

  // 是否新增面试题库详情
  addInterview: function (e) {
    wx.showModal({
      title: '提示',
      content: '你确定重新获取ID了吗？',
      success: (res) => {
        if (res.confirm) {
          let {
            bankIndex,
            detailBanks
          } = this.data
          this.addDetail(detailBanks[bankIndex])
        }
      }
    })


  },
  // 新增面试题库详情
  addDetail: function (value) {
    let {
      bankIndex,
      detailBanks
    } = this.data
    wx.cloud.callFunction({
      name: 'addDetailBank',
      data: {
        detailBank: value
      },
    }).then((res) => {
      console.log(res)
      if (bankIndex < detailBanks.length - 1) {
        bankIndex++
        this.setData({
          bankIndex,
        }, () => {
          this.addDetail(detailBanks[bankIndex])
          console.log('增加')
        })
      }
    })

  },
  // 是否新增面试题库简介
  addBank: function (e) {
    let {
      bankIndex,
      banks
    } = this.data
    wx.showModal({
      title: '提示',
      content: '你重新获取ID了吗？',
      success: (res) => {
        if (res.confirm) {
          this.add(banks[bankIndex]) // 面试
        }
      }
    })
  },
  // 新增面试题库简介
  add: function (value) {
    let {
      bankIndex,
      banks
    } = this.data
    wx.cloud.callFunction({
      name: 'addBank',
      data: {
        bank: value
      },
    }).then((res) => {
      if (bankIndex < banks.length - 1) {
        bankIndex++
        this.setData({
          bankIndex,
        }, () => {
          this.add(banks[bankIndex])
          console.log('增加')
        })
      }
    })

  },

  // 获取笔试题库详情
  getWritten: function (e) {
    console.log(e)
  },
  // 是否新增笔试题库简介
  addBank1: function (e) {
    let {
      bankIndex,
      banks1
    } = this.data
    wx.showModal({
      title: '提示',
      content: '你重新获取ID了吗？',
      success: (res) => {
        if (res.confirm) {
          this.add1(banks1[bankIndex]) // 面试
        }
      }
    })
  },
  // 新增笔试题库简介
  add1: function (value) {
    let {
      bankIndex,
      banks1,
      id
    } = this.data
    value.id = id
    this.setData({
      id: id + 1
    }, () => {
      wx.cloud.callFunction({
        name: 'addBank',
        data: {
          bank: value
        },
      }).then((res) => {
        if (bankIndex < banks1.length - 1) {
          bankIndex++
          this.setData({
            bankIndex,
          }, () => {
            this.add1(banks1[bankIndex])
            console.log('增加')
          })
        }
      })
    })
  

  },
  // 是否新增面试题库详情
  addWritten: function (e) {
    wx.showModal({
      title: '提示',
      content: '你重新获取ID了吗？',
      success: (res) => {
        if (res.confirm) {
          let {
            bankIndex,
            detailBanks1
          } = this.data
          this.addDetail1(detailBanks1[bankIndex])
        }
      }
    })


  },
  // 新增笔试题库详情
  addDetail1: function (value) {
    let {
      bankIndex,
      detailBanks1,
      id
    } = this.data
    value.parentId = id
    this.setData({
      id: id + 1
    }, () => {
      wx.cloud.callFunction({
        name: 'addDetailBank1',
        data: {
          detailBank: value
        },
      }).then((res) => {
        console.log(res)
        if (bankIndex < detailBanks1.length - 1) {
          bankIndex++
          this.setData({
            bankIndex,
          }, () => {
            this.addDetail1(detailBanks1[bankIndex])
            console.log('增加')
          })
        }
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