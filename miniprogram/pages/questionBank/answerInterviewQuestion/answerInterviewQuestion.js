// miniprogram/pages/home/interviewAll/interviewAll.js
const app = getApp()
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
const plugin = requirePlugin("WechatSI") // 引入文字转语音的插件
const manager = plugin.getRecordRecognitionManager() // 获取文字转语音的插件对象
const recorderManager = wx.getRecorderManager() // 获取录音对象
Page({

  /**
   * 页面的初始数据
   */
  data: {
    writtenBank: {}, // 面试题中包含当前用户所做的题库
    questionIndex: 0, // 当前题目的序列
    ifViewAllComments: false, // 查看所有评论
    ifCollect: false, // 是否收藏
    modalName: null, // 模态框是否显示
    type: '', // 当前是录音还是录像
    tempFilePaths: [], // 用于存储音频的链接
    ifViewAnwser: false, // 是否查看答案
  },
  // 处理查看所有评论
  viewAllComments: function(e) {
    console.log(e)
    this.setData({
      ifViewAllComments: !this.data.ifViewAllComments
    })
  },
  // 处理下一题
  handleNext: function(e) {
    wx.showLoading({
      title: '加载中',
    })
    let {questionIndex, writtenBank} = this.data
      if (questionIndex < writtenBank.questions.length - 1) {
        questionIndex++
        this.setData({
          questionIndex,
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      } else {
        // 代表查看总结
        wx.navigateTo({
          url: `../endInterviewQuestion/endInterviewQuestion?id=${writtenBank.parentId}`,
        })
      }
  },
  // 处理上一题
  handlePre: function(e) {
    wx.showLoading({
      title: '加载中',
    })
    let {questionIndex} = this.data
      if (questionIndex > 0) {
        questionIndex--
        this.setData({
          questionIndex
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      }
  },
  // 处理收藏(更新用户的题库状态以及题库详情)
  handleCollection(e) {
    wx.showLoading()
    let title = ''
    let {writtenBank} = this.data
    let {ifCollect} = this.data
    let bankId = writtenBank.parentId
    let statusObj = {
      id: bankId
    }
    if (ifCollect) {
      writtenBank.status.collection = false
      title = '取消收藏成功'
      this.setData({
        ifCollect: false
      })
    } else {
      writtenBank.status.collection = true
      title = '收藏成功'
      this.setData({
        ifCollect: true
      })
    }
    statusObj.status = writtenBank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
        let result = statusList.findIndex((value) => {
          return value.id == bankId
        })
        if(result !== -1) {
          if (!writtenBank.status.collection) {
            statusList[result].status.collection = false
          } else {
            statusList[result].status.collection = true
          }
        } else {
          statusList.push(statusObj)
        }
        wx.cloud.callFunction({
          name: 'updateBankStatus',
          data: {
            statusList
          }
        }).then(() => {
          wx.hideLoading()
          wx.showToast({
            title: title,
            icon: 'success'
          })
        })
    })
    interviewBankForUser.get().then((res) => {
      let interviewBankList = res.data[0].interviewBankList
      let result = interviewBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      if(result !== -1) {
        interviewBankList[result] = writtenBank
      } else {
        interviewBankList.push(writtenBank)
      }
      wx.cloud.callFunction({
        name: 'updateInterviewBank',
        data: {
          interviewBankList,
        }
      }).then(console.log)
    })

  },
  // 获取当前题库状态
  getStatus: function() {
    let id = this.data.writtenBank.parentId
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let ifCollect
      let result = statusList.find((value) => {
        return value.id === id
      })
      if(result) {
        ifCollect = result.status.collection
      }
      this.setData({
        ifCollect
      })

    })
  },
  // 处理菜单的点击
  handleMenu: function(e) {
    console.log(e)
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
  },
  // 处理模态框的关闭
  hideModal: function(e) {
    this.setData({
      modalName: null
    })
  },
  // 根据指定序号跳转题目
  skipQuestion: function(e) {
    let id = e.target.id*1
    this.hideModal()
    this.setData({
      questionIndex: id-1
    })
  },
  // 处理指定题目的语音的播放
  handleAudioPlay: function(e) {
    wx.showLoading({
      title: '加载中',
    })
    let {questionIndex, writtenBank} = this.data
    let tempFilePaths = writtenBank.questionsFileArry[questionIndex].tempFilePaths
    this.setData({
      tempFilePaths
    }, () => {
      wx.hideLoading({
      })
      this.yuyinPlay(tempFilePaths[0])
    })
  },
  // 处理查看答案
  viewAnwser: function(e) {
    this.setData({
      ifViewAnwser: !this.data.ifViewAnwser
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
      parentId: options.id*1 // 根据ID获取面试题库详情
    }).get().then((res) => {
      console.log(res.data)
      this.setData({
        type: options.type, // 设置当前用户选择面试的类型
        writtenBank: res.data[0] // 设置题库对象
      }, () => {
        wx.hideLoading({})
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.onError(function (res) {
      wx.showToast({
        title: '语音播放失败',
        icon: 'none',
      })
    }) 

  },
  // 播放语音
  yuyinPlay: function (src) {
    const innerAudioContext = wx.createInnerAudioContext()
    let {tempFilePaths} = this.data
    innerAudioContext.autoplay = true
    innerAudioContext.src = src;
    innerAudioContext.onPlay(() => {
      this.pageObj.i++
    })
    innerAudioContext.onEnded(() => {
      if (this.pageObj.i < tempFilePaths.length){
        this.yuyinPlay(tempFilePaths[this.pageObj.i])
      } else {
        this.pageObj.i = 0
      }
    })
    },
    pageObj: {
      i: 0
    },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getStatus()
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