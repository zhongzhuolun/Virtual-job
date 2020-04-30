const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const interviewQuestions = db.collection('interviewQuestions')
const app = getApp()

const plugin = requirePlugin("WechatSI")
const manager = plugin.getRecordRecognitionManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //语音
    recordState: false, //录音状态
    content: '', //内容
    money: "0.00",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    type: '',
    questionObj: {},
    questions: [],
    tempFilePaths: [],
    nowIndex: 0,
    disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.showLoading({
      title: '加载中',
    })
    interviewQuestions.where({
      parentId: options.id*1
    }).get().then((res) => {
      let questions = res.data[0].questions
      this.setData({
        type: options.type,
        questions,
        content: questions[0].title
      }, () => {
        wx.hideLoading({})
      })
    })
    // this.setData({
    //   type: options.type,
    //   questions,
    // })
    if (options.type === 'audio') {
      //识别语音
      this.initRecord();
   
    }

   
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {

    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
    /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const innerAudioContext = wx.createInnerAudioContext()
    // this.innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.onError(function (res) {
      console.log(res);
      wx.showToast({
        title: '语音播放失败',
        icon: 'none',
      })
    }) 

 
  },
  getlocat: function () {
    const recorderManager = wx.getRecorderManager()
    wx.authorize({
      scope: 'scope.record',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        const options = {
          duration: 600000,
          sampleRate: 44100,
          numberOfChannels: 1,
          encodeBitRate: 192000,
          format: 'mp3',
          frameSize: 50
        }
        recorderManager.start(options)
        recorderManager.onStart(() => {
          console.log('recorder start')
        })
        recorderManager.onError((res) => {
          console.log(res);
        })
      }
    })
    //  console.log(app)
  },

  stop: function () {
    const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
    recorderManager.stop()
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const {
        tempFilePath
      } = res
      console.log(tempFilePath)
      // this.tempFilePath = tempFilePath
      this.data.tempFilePaths.push(tempFilePath)
    })
  },
  play: function() {
      this.plays(this.data.tempFilePaths[0])
  },
  //播放声音
  plays: function (src) {
    const recorderManager = wx.getRecorderManager()
    const innerAudioContext = wx.createInnerAudioContext()
    let i = 0
    innerAudioContext.autoplay = true
   
    // innerAudioContext.src = this.tempFilePath;
    innerAudioContext.src = src;
    innerAudioContext.onPlay(() => {
      i++
      console.log('开始播放')
    })
    innerAudioContext.onEnded(() => {
      console.log('播放结束')
      
      if (i < this.data.tempFilePaths.length) {
        this.plays(this.data.tempFilePaths[i])
      }
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

  },

   // 识别语音 -- 初始化
  initRecord: function () {
    const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
    const that = this;
    // 有新的识别内容返回，则会调用此事件
    manager.onRecognize = function (res) {
      console.log(res)
    }
    // 正常开始录音识别时会调用此事件
    manager.onStart = function (res) {
      console.log("成功开始录音识别", res)
    }
    // 识别错误事件
    manager.onError = function (res) {
      console.error("error msg", res)
    }
    //识别结束事件
    manager.onStop = function (res) {
      console.log('..............结束录音')
      console.log('录音临时文件地址 -->' + res.tempFilePath); 
      console.log('录音总时长 -->' + res.duration + 'ms'); 
      console.log('文件大小 --> ' + res.fileSize + 'B');
      console.log('语音内容 --> ' + res.result);
      if (res.result == '') {
        wx.showModal({
          title: '提示',
          content: '听不清楚，请重新说一遍！',
          showCancel: false,
          success: function (res) {}
        })
        return;
      }
      var text = that.data.content + res.result;
      that.setData({
        content: text
      })
    }
  },
  // 手动输入内容
  conInput: function (e) {
    this.setData({
      content: e.detail.value,
    })
  },
  // 文字转语音
  wordYun: function (e) {
    var that = this;
    var content = this.data.content;
    let len = this.data.questions.length
    let nowIndex = this.pageObj.nowIndex
    if (nowIndex === len - 1) {
      this.setData({
        disabled: true,
      })
    }
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content,
      success: function (res) {
        console.log(res);
        console.log("succ tts", res.filename);
        that.setData({
          src: res.filename
        })
        that.yuyinPlay();

      },
      fail: function (res) {
        console.log("fail tts", res)
      }
    })
  },

  //播放语音
  yuyinPlay: function (e) {
    const recorderManager = wx.getRecorderManager()
    const innerAudioContext = wx.createInnerAudioContext()
    this.getlocat()
    if (this.data.src == '') {
      console.log(暂无语音);
      return;
    }
    innerAudioContext.src = this.data.src //设置音频地址
    innerAudioContext.play(); //播放音频
    innerAudioContext.onEnded(() => {

    })
  },
  // 结束语音
  end: function (e) {
    const recorderManager = wx.getRecorderManager()
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.pause(); //暂停音频
  },
  // 下一题
  handleNext: function(e) {
    let len = this.data.questions.length
    let nowIndex = this.pageObj.nowIndex + 1
    console.log(nowIndex)
    let questions = this.data.questions
    this.stop()
    if (nowIndex < len) {
      this.pageObj.nowIndex = nowIndex
      this.setData({
        content: questions[nowIndex].title,
      }, () => {
        this.wordYun()
      })
    } else {
      this.disabled = true

    }
  },
  // 答题结束
  handleEnd: function(e) {
    console.log(e)
    this.stop()

    // wx.navigateTo({
    //   url: '../endInterview/endInterview',
    // })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  pageObj: {
    nowIndex: 0
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