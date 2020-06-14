const db = wx.cloud.database()
const banksList = db.collection('banks-list')
// 面试题库
import {banks} from '../../data/interviewBank'
import {detailBanks} from '../../data/interviewDetail'
// 笔试题库
import {banks1} from '../../data/writtenBank'
import {detailBanks1} from '../../data/writtenDetail'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bankIndex: 0, // 
    id: 122, // 题库的ID
    banks, // 面试题库简介
    detailBanks, // 面试题库详情
    banks1, // 笔试题库简介
    detailBanks1, // 笔试题库详情
  },
  // 获取题库简介ID
  getBankList: function (e) {
    banksList.orderBy('id', 'desc').get().then(res => {
      console.log(res.data[0].id)
      let id = res.data[0].id + 1
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
      detailBanks,
      id
    } = this.data
    value.questionsFileArry = []
    value.status = {
      "collection": false,
      "doing": false,
      "done": false
    }
    value.class = '面试题'
    value.parentId = id
    value.questions.forEach((v, i) => {
      v.id = i + 1
      v.comments = []
    })
    console.log(value)
    this.setData({
      id: id + 1
    }, () => {
      wx.cloud.callFunction({
        name: 'addDetailBank',
        data: {
          detailBank: value
        },
      }).then((res) => {
        console.log('增加')
        if (bankIndex < detailBanks.length - 1) {
          bankIndex++
          this.setData({
            bankIndex,
          }, () => {
            this.addDetail(detailBanks[bankIndex])
          })
        }
      })
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
      banks,
      id
    } = this.data
    value.id = id
    value.status = { // 题库初始状态对象，默认都为false
      "done": false, // 做完了
      "doing": false, // 正在做
      "collection": false // 收藏
    }
    value.class = '面试题'
    this.setData({
      id: id + 1
    }, () => {
      wx.cloud.callFunction({
        name: 'addBank',
        data: {
          bank: value
        },
      }).then((res) => {
        console.log('增加')
        if (bankIndex < banks.length - 1) {
          bankIndex++
          this.setData({
            bankIndex,
          }, () => {
            this.add(banks[bankIndex])
          })
        }
      })
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
    console.log(banks1)
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
    console.log(value)
    value.id = id
    value.status = { // 题库初始状态对象，默认都为false
      "done": false, // 做完了
      "doing": false, // 正在做
      "collection": false, // 收藏
      "mistaked": false // 错误
    }
    value.class = '笔试题'
    this.setData({
      id: id + 1
    }, () => {
      wx.cloud.callFunction({
        name: 'addBank',
        data: {
          bank: value
        },
      }).then((res) => {
        console.log('增加')
        if (bankIndex < banks1.length - 1) {
          bankIndex++
          this.setData({
            bankIndex,
          }, () => {
            this.add1(banks1[bankIndex])
          })
        }
      })
    })
  

  },
  // 是否新增笔试题库详情
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
    value.chooseValue = []
    value.wrongList = []
    value.class = "笔试题", // 题库类型
    value.status = { // 题库初始状态对象，默认都为false
      "done": false, // 做完了
      "doing": false, // 正在做
      "collection": false, // 收藏
      "mistaked": false // 错误
    }
    value.accuracy = { 
      "radio": 0, // 单选题题
      "checkbox": 0, // 多选题
      "blank": 0, // 填空题
      "sort": 0, // 排序题
      "judge": 0, // 判断题
      "unsteady": 0 // 不定项选择题
    },
    value.bank.forEach((v, i) => {
      v.id = i + 1
      v.mistaked = false
      v.check = false
      v.comments = []
    })
    console.log(value)
    this.setData({
      id: id + 1
    }, () => {
      wx.cloud.callFunction({
        name: 'addDetailBank1',
        data: {
          detailBank: value
        },
      }).then((res) => {
        console.log('增加')
        if (bankIndex < detailBanks1.length - 1) {
          bankIndex++
          this.setData({
            bankIndex,
          }, () => {
            this.addDetail1(detailBanks1[bankIndex])
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