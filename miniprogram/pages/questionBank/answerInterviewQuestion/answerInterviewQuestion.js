const db = wx.cloud.database()
const bankStatusList = db.collection('bank-status')
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
import utils from '../../../utils/utils'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank: {}, // 面试题中包含当前用户所做的题库
    questionIndex: 0, // 当前题目的序列
    modalName: null, // 模态框是否显示
    type: '', // 当前是录音还是录像
    tempFilePaths: [], // 用于存储音频的链接
    ifViewAnwser: false, // 是否查看答案
    buttonClicked: false,
  },
  goTop: function () { // 一键回到顶部
    wx.createSelectorQuery().select('#page').boundingClientRect(function (rect) {
      // 使页面滚动到顶
      wx.pageScrollTo({
        scrollTop: rect.top
      })
    }).exec()
  },
  // 处理下一题
  handleNext: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    let {
      questionIndex,
      bank
    } = this.data
    if (questionIndex < bank.questions.length - 1) {
      questionIndex++
      this.setData({
        questionIndex,
        ifViewAnwser: false
      }, () => {
        wx.hideLoading({
          complete: (res) => {},
        })
      })
    } else {
      // 代表查看总结
      utils.buttonDisable(this)
      this.handleBankStatus() // 更新题库简介状态
      // this.handleBankStatusDetail() // 更新题库详情状态

    }
  },
  // 处理上一题
  handlePre: function (e) {
    let {
      questionIndex
    } = this.data
    if (questionIndex > 0) {
      wx.showLoading({
        title: '加载中',
      })
      this.goTop()
      questionIndex--
      this.setData({
        questionIndex,
        ifViewAnwser: true
      }, () => {
        wx.hideLoading({
          complete: (res) => {},
        })
      })
    } else {
      wx.showToast({
        title: '已经是第一题了哦',
        icon: 'none'
      })
    }
  },
  // 处理查看答案
  viewAnwser: function (e) {
    this.setData({
      ifViewAnwser: !this.data.ifViewAnwser
    })
  },
  // 处理更新题库简介状态（只更新该用户的数据）
  handleBankStatus: function () {
    let bank = this.data.bank
    let bankId = bank.parentId
    let statusObj = {
      id: bankId
    }
    bank.status.doing = false
    bank.status.done = true
    statusObj.status = bank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let result = statusList.findIndex((value) => {
        return value.id == bankId
      })
      if (result !== -1) {
        statusList[result].status.doing = false
        statusList[result].status.done = true
      } else {
        statusList.push(statusObj)
      }
      wx.cloud.callFunction({
        name: 'updateBankStatus',
        data: {
          statusList,
        }
      }).then(() => {
        this.handleBankStatusDetail()
      })
    })
  },
  // 处理更新题库详情状态 （只更新该用户的数据）
  handleBankStatusDetail: function () {
    let bank = this.data.bank
    let bankId = bank.parentId
    let that = this
    interviewBankForUser.get().then((res) => {
      let interviewBankList = res.data[0].interviewBankList
      console.log(interviewBankList)
      let result = interviewBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      console.log(interviewBankList[result])
      if (result !== -1) {
      console.log('find')
        interviewBankList[result].status = bank.status
      } else {
        interviewBankList.push(bank)
      }
      wx.cloud.callFunction({
        name: 'updateInterviewBank',
        data: {
          interviewBankList,
        }
      }).then(() => {
        wx.redirectTo({
          url: `../endInterviewQuestion/endInterviewQuestion?id=${bank.parentId}`,
          success: function () {
            utils.buttonDisable(that)
          }
        })
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    interviewQuestions.where({
      parentId: options.id * 1 // 根据ID获取面试题库详情
    }).get().then((res) => {
      console.log(res.data)
      this.setData({
        type: options.type, // 设置当前用户选择面试的类型
        bank: res.data[0] // 设置题库对象
      }, () => {
        wx.hideLoading()
      })
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
    this.getStatus()
    utils.buttonUsable(this)
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