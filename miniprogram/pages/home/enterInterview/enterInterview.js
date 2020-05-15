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
    bank: {},
    industry: wx.getStorageSync('industry')
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
    wx.showToast({
      title: '抱歉，该功能尚未支持',
      icon: 'none'
    })
    // this.handleStartExam('video')
  },
  onLoad: function (options) {
    // banksList.where({
    //   class: '面试题',
    //   industry: this.data.industry,
    // }).get().then((res) => {
    //   console.log(res.data)
    //   // let bank = res
    //   this.setData({
    //     bank: res.data[0]
    //   })
    //   console.log(res.data[0])
    // })
  
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
      let index = Math.floor(Math.random(0,1)*bankLists.length)
      this.setData({
        bank: bankLists[index]
      })
    })
   
  },

  
  onReady(e) {

  },


})