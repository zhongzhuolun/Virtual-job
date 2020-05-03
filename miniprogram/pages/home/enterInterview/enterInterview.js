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
  data:{
    bank: {}
  },
  handleStartExam: function(type) {
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
          url: `../examInterview/examInterview?type=${type}&id=${bankId}`
        })
  })

  },
  handleAudioStartExam: function(e) {
    this.handleStartExam('audio')
  },
  handleVideoStartExam: function(e) {
    this.handleStartExam('video')
  },
  onLoad: function (options) {
    banksList.where({
      class: '面试题',
      industry: this.data.industry,
      id: 1
    }).get().then((res) => {
      this.setData({
        bank: res.data[0]
      })
      console.log(res.data[0])
    })
  
  },

  
  onReady(e) {

  },


})