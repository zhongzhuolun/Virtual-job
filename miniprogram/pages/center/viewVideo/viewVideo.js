const db = wx.cloud.database()
const interviewBankForUser = db.collection('interviewBankForUser')
import utils from '../../../utils/utils'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    questions: [],
    audioPlay: 'init', // 录音播放状态
    audioPlayAll: false, // 所有录音播放的状态
    tempFilePaths: [], // 用于存储音频的链接
    buttonClicked: false,

  },
  getCurrentBank: function(id) {
    console.log(id)
    wx.showLoading({
      title: '加载中',
    })
    let {questions} = this.data
      interviewBankForUser.get().then((res) => {
        let banksList = res.data[0].interviewBankList
        console.log(banksList)
        questions = banksList.find((value, index) => {
          return value.parentId === id
        })
        questions.questionsFileArry.forEach((value, index) => {
          value.audioPlay = 'init'
        })
        this.setData({
          questions,
          questionsFileArry: questions.questionsFileArry
        }, () => {
          wx.hideLoading()
          this.mergeAudio()
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
  yuyinPlayAll: function (src) {
    this.innerAudioContext = wx.createInnerAudioContext()
    console.log(src)
    this.innerAudioContext.src = src;
    this.innerAudioContext.autoplay = true
    this.innerAudioContext.play(); //播放音频
    // setTimeout(()=> {
    //   utils.buttonUsable(this)
    // }, 1000)
    this.innerAudioContext.onPlay(() => {
      console.log('开始播放', this.pageObj.i)
    })
    this.innerAudioContext.onEnded(() => {
      this.pageObj.i++
      console.log('播放结束', this.pageObj.i)
      if (this.pageObj.i < this.data.tempFilePaths.length && this.data.audioPlayAll) {
        this.yuyinPlayAll(this.data.tempFilePaths[this.pageObj.i])
      } else {
        this.pageObj.i = 0
        this.setData({
          audioPlayAll: false
        })
      }
    })
  },
  // 播放录音
  playAll: function () {
    utils.buttonClicked(this)
    let ifPlay = true
    let {questionsFileArry} = this.data
    questionsFileArry.forEach((value, index) => {
      if (value.audioPlay === 'play') {
        ifPlay = false
      }
    })
    if (ifPlay) {
      this.setData({
        audioPlayAll: true
      }, () => {
        this.yuyinPlayAll(this.data.tempFilePaths[this.pageObj.i])
      })
    }
    
  },
  // 暂停播放
  stopAll: function (e) {
    // this.innerAudioContext.pause()
    // this.innerAudioContext = null
    this.setData({
      audioPlayAll: false
    }, () => {
      this.innerAudioContext.stop()
    })
  },
  pageObj: {
    i: 0, // 用于遍历每个问题的音频
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id: options.id*1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
   // 控制播放录音
  play: function (e) {
    utils.buttonClicked(this)
    let questionIndex = e.currentTarget.id * 1
    let {questionsFileArry, audioPlayAll} = this.data
    let ifPlay = true
    questionsFileArry.forEach((value, index) => {
      if (value.audioPlay === 'play') {
        ifPlay = false
      }
    })
    if (audioPlayAll) {
      ifPlay = false
    }
    if (ifPlay) {
    this.questionIndex = questionIndex
    let audioPlay = questionsFileArry[questionIndex].audioPlay
      if (audioPlay === 'init') {
        this.yuyinPlay(questionsFileArry[questionIndex].tempFilePaths[1])
      } else {
        this.innerAudioContext.autoplay = true
        this.innerAudioContext.play()
      }
      questionsFileArry[questionIndex].audioPlay = 'play'
      this.setData({
        questionsFileArry
      })
    } else {
      wx.showToast({
        title: '不允许同时播放两个音频',
        icon: 'none'
      })
    }
  },
  // 暂停播放
  stop: function (e) {
    console.log(e)
    let {questionsFileArry} = this.data
    let questionIndex = e.currentTarget.id * 1
    this.questionIndex = questionIndex
    questionsFileArry[questionIndex].audioPlay = 'pause'
 
    this.setData({
      questionsFileArry
    }, () => {
      if (this.innerAudioContext) {
        this.innerAudioContext.pause()
      }
    })
  },
  // 真正播放语音
  yuyinPlay: function (src) {
    console.log(src)
    let {questionsFileArry} = this.data
    this.innerAudioContext = wx.createInnerAudioContext()
    this.innerAudioContext.src = src
    // setTimeout(()=> {
    //   utils.buttonUsable(this)
    // }, 1000)
    if (src) {
      this.innerAudioContext.autoplay = true
    } else {
      wx.showToast({
        title: '音频失效了',
        icon: 'none'
      })
    }
    this.innerAudioContext.onEnded(() => {
      console.log('播放结束')
      console.log(this.questionIndex)
      if (this.questionIndex || this.questionIndex === 0) {
        questionsFileArry[this.questionIndex].audioPlay = 'init'
      }
      this.setData({
        questionsFileArry
      })
    })
  },
  // 结束语音
  end: function (e) {
    if (this.innerAudioContext) {
      this.innerAudioContext.pause()
      this.innerAudioContext = null
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let {id} = this.data
    this.setData({
      industry: wx.getStorageSync('industry')
    }, () => {
      this.getCurrentBank(id)
    })
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
    this.end()
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