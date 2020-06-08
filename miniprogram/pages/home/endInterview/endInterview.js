const app = getApp()
const db = wx.cloud.database()
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
    id: null,
    bank: {}, // 面试题中包含当前用户所做的题库
    tempFilePaths: [], // 用于存储音频的链接
    questionsFileArry: [], // 所有问题语音的集合
    audioPlay: false, // 录音播放状态，false为没有播放
  },

  // 获取当前面试题库
  getCurrentBank: function (bankId) {
    wx.showLoading({
      title: '加载中',
    })
    let {
      questionsFileArry
    } = this.data
    interviewBankForUser.get().then((res) => {
      let interviewBankList = res.data[0].interviewBankList
      console.log(interviewBankList)
      let result = interviewBankList.find((value) => {
        return value.parentId == bankId
      })
      if (questionsFileArry.length === 0) {
        questionsFileArry = result.questionsFileArry
        this.setData({
          questionsFileArry
        })
      }
      this.setData({
        bank: result,
      }, () => {
        this.mergeAudio()
        wx.hideLoading()
      })
    })
  },
  // 整合音频
  mergeAudio: function () {
    let {
      questionsFileArry,
      tempFilePaths
    } = this.data
    tempFilePaths = []
    questionsFileArry.forEach((value, index) => {
      tempFilePaths = tempFilePaths.concat(value.tempFilePaths)
    })
    this.setData({
      tempFilePaths
    })
  },
  // 播放语音
  yuyinPlay: function (src) {
    this.innerAudioContext = wx.createInnerAudioContext()
    console.log(src)
    this.innerAudioContext.src = src;
    this.innerAudioContext.autoplay = true
    this.innerAudioContext.play(); //播放音频
    this.innerAudioContext.onPlay(() => {
      console.log('开始播放', this.pageObj.i)
    })
    this.innerAudioContext.onEnded(() => {
      this.pageObj.i++
      console.log('播放结束', this.pageObj.i)
      if (this.pageObj.i < this.data.tempFilePaths.length) {
        this.yuyinPlay(this.data.tempFilePaths[this.pageObj.i])
      } else {
        this.pageObj.i = 0
        this.setData({
          audioPlay: false
        })
      }
    })
  },
  // 播放录音
  play: function () {
    this.setData({
      audioPlay: true
    }, () => {
      this.yuyinPlay(this.data.tempFilePaths[this.pageObj.i])
    })
  },
  // 暂停播放
  stop: function (e) {
    this.setData({
      audioPlay: false
    }, () => {
      this.innerAudioContext.stop()
    })
  },
  pageObj: {
    i: 0, // 用于遍历每个问题的音频
  },
  toIndex: function(e) {
    if (this.innerAudioContext) {
      this.innerAudioContext.stop()
    }
    wx.switchTab({
      url: '../index/index',
    })
  },
  viewAll: function(e) {
    let id = this.data.id
    if (this.innerAudioContext) {
      this.innerAudioContext.stop()
    }
    wx.navigateTo({
      url: `../interviewAll/interviewAll?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id * 1
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
    this.getCurrentBank(this.data.id)
    // const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // console.log(eventChannel)
    // if (eventChannel.on) {
    //   eventChannel.on('questionsFileArry', (questionsFileArry) => {
    //     console.log(questionsFileArry.questionsFileArry)
    //     this.setData({
    //       questionsFileArry: questionsFileArry.questionsFileArry
    //     }, () => {
    //       this.mergeAudio()
    //     })
    //   })
    // }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    if (this.innerAudioContext) {
      this.innerAudioContext.stop()
    }
    this.pageObj.i = 0
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