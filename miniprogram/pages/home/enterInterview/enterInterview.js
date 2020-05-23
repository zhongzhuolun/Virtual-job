// miniprogram/pages/home/enterInterview/enterInterview.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const app = getApp()
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
const plugin = requirePlugin("WechatSI")
const manager = plugin.getRecordRecognitionManager()
Page({
  data: {
    bank: {},
    industry: wx.getStorageSync('industry')
  },
  handleStartExam: function (type) {
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
      if (result !== -1) {
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
        url: `../examInterview/examInterview?type=${type}&id=${bankId}`
      })
    })

  },
   // 开始录音
   getlocat: function () {

  
  },
  handleAudioStartExam: function (e) {
    let that = this
    wx.showModal({
      title: '考试须知',
      content: '面试考试前需要您授权录音功能，面试考试过程中，如果中途退出答题，将视为提交试卷。',
      confirmText: '我知道了',
      cancelText: '暂不考试',
      success: (res) => {
        if (res.confirm) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              that.handleStartExam('audio')
            }
          })
        }
      }
    })
  },
  handleVideoStartExam: function (e) {
    wx.showToast({
      title: '抱歉，该功能尚未支持',
      icon: 'none'
    })
    // this.handleStartExam('video')
  },
  onLoad: function (options) {
  },
  onShow(e) {
    let industry = wx.getStorageSync('industry')
    this.setData({
      industry
    })
    banksList.where({
      class: '面试题',
      industry,
    }).get().then((res) => {
      let bankLists = res.data
      let index = Math.floor(Math.random(0, 1) * bankLists.length)
      if (bankLists.length === 0) {
        wx.showModal({
          title: '提示',
          content: '很抱歉，该行业暂时没有面试题，点击确定返回首页',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: '../index/index',
              })
            }
          }
        })
      } else {
        this.setData({
          bank: bankLists[index]
        })
      }
    })

  },


  onReady(e) {

  },


})