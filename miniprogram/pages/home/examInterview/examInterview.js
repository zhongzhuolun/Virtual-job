
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
const plugin = requirePlugin("WechatSI") // 引入文字转语音的插件
const manager = plugin.getRecordRecognitionManager() // 获取文字转语音的插件对象
const recorderManager = wx.getRecorderManager() // 获取录音对象
const cameraContext = wx.createCameraContext()
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordState: false, // 录音状态
    content: '', // 用于转化为语音的问题字符串
    type: '', // 当前是录音还是录像
    questionObj: {}, // 整个面试题库的对象
    questions: [], // 问题得到序列
    tempFilePaths: [], // 保存录音音频链接的数组
    nowIndex: 0, // 该项暂时用不到
    disabled: false, // 控制按钮的显示
    questionsFileArry: [ // 用于存储整个答题过程中的题目和录音临时链接的数组
      {
        tempFilePaths: [], // 用于存储问题和答案的录音链接的数组，0-问题，1-答案
        title: '' // 用于存储问题字符串
      }
    ],
    btnDisabled: false, // 按钮是否被禁用
    ifStop: false, // 是否真正结束答题
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
      let questions = res.data[0].questions // 获取问题数组
      this.setData({
        type: options.type, // 设置当前用户选择面试的类型
        questions, // 设置问题数组
        content: questions[0].title, // 默认以第一题的内容为初始值
        questionObj: res.data[0] // 设置题库对象
      }, () => {
        wx.hideLoading({})
      })
    })
    if (options.type === 'audio') { // 如果为录音
      //识别语音
      this.initRecord(); // 初始化识别语音（貌似没用到该功能）
    }

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
  // 开始录音
  getlocat: function () {

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
        // 开始录音
        recorderManager.start(options)
        // 监听录音开始过程
        recorderManager.onStart(() => {
          console.log('recorder start')
        })
        // 监听录音失败
        recorderManager.onError((res) => {
          console.log(res);
        })
      }
    })
  },
  // 停止录音
  stop: function () {
    const recorderManager = wx.getRecorderManager()
    let that = this
    let {tempFilePaths, questionsFileArry} = this.data
    let nowIndex = this.pageObj.nowIndex // 获取当前问题的索引
    let date = new Date()
    recorderManager.stop()
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const {
        tempFilePath
      } = res
      tempFilePaths.push(tempFilePath)
      // questionsFileArry[nowIndex].tempFilePaths.push(tempFilePath)
      wx.cloud.uploadFile({
        cloudPath:  `${date.getTime()}.mp3`, // 上传至云端的路径
        filePath: tempFilePath, // 小程序临时文件路径
        success: res => {
          // 返回文件 ID
          questionsFileArry[nowIndex].tempFilePaths.push(res.fileID)
          if (that.data.ifStop) {
          
          }
        },
        fail: console.error
      })
      this.setData({
        tempFilePaths
      })
    })
  },
  // 播放录音
  play: function() {
      this.yuyinPlay(this.data.tempFilePaths[0], 'mine')
  },
   // 识别语音 -- 初始化
  initRecord: function () {
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
  // 文字转语音
  wordYun: function (e) {
    var that = this;
    var content = this.data.content; // 获取到当前的问题
    let len = this.data.questions.length // 获取问题数组的长度
    let nowIndex = this.pageObj.nowIndex // 获取当前问题的索引
    let {questionsFileArry} = this.data // 获取存储整个录音过程的集合
    let date = new Date()
    if (nowIndex === len - 1) { // 代表此时已到最后一题，应该变为结束按钮
      this.setData({
        disabled: true,
      })
    }
    // 调用文字转语音插件
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content,
      success: function (res) {
        console.log(res);
        console.log("succ tts", res.filename);
        wx.downloadFile({
          url: res.filename,
          success (res) {
            wx.cloud.uploadFile({
              cloudPath:  `${date.getTime()}.mp3`, // 上传至云端的路径
              filePath: res.tempFilePath, // 小程序临时文件路径
              success: res => {
                // 返回文件 ID
                let questionsFileObj = {
                  tempFilePaths: [res.fileID],
                  title: content
                }
                questionsFileArry[nowIndex] = questionsFileObj
              },
              fail: console.error
          })
          }
        })
        that.setData({
          src: res.filename // 获取语音链接
        }, () => {
          that.yuyinPlay(); // 播放语音
        })

      },
      fail: function (res) {
        console.log("fail tts", res)
      }
    })
  },

  // 播放语音
  yuyinPlay: function (e, type) {
    console.log(e, type)
  
    const innerAudioContext = wx.createInnerAudioContext()
    if (type === 'mine') {
      // 测试能否正常播放多条语音
      innerAudioContext.autoplay = true
      innerAudioContext.src = e;
    } else {
      if (this.data.src == '') {
        console.log(暂无语音);
        return;
      }

    innerAudioContext.src = this.data.src //设置音频地址
  }
  innerAudioContext.play(); //播放音频

  innerAudioContext.onPlay(() => {
    this.setData({
      btnDisabled: true
    })
    console.log('开始播放',this.pageObj.i)

    if (type === 'mine') {
      this.pageObj.i++
      console.log(this.pageObj.i)
    }
  })
  innerAudioContext.onEnded(() => {
    console.log('播放结束',this.pageObj.i)
    this.setData({
      btnDisabled: false
    })
    if (this.pageObj.i < this.data.tempFilePaths.length && type === 'mine'){
      this.yuyinPlay(this.data.tempFilePaths[this.pageObj.i], 'mine')
    } else {
      // 开启录音
      console.log('开启录音')
      this.getlocat() 
    }
  })

  },
  // 结束语音
  end: function (e) {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.pause(); //暂停音频
  },
  // 开始答题
  handleStart: function(e) {
    // 文字转语音
    this.wordYun()
  },
  // 下一题
  handleNext: function(e) {
    let len = this.data.questions.length
    let nowIndex = this.pageObj.nowIndex + 1
    let {questions} = this.data
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
    let {questionObj} = this.data
    this.stop()
    this.handleBankStatus() // 更新题库简介状态
    this.handleBankStatusDetail() // 更新题库详情状态
    app.globalData.writtenBank = questionObj
    wx.navigateTo({
      url: '../endInterview/endInterview',
      success: (res) => {
        console.log(questionObj)
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('interviewPageData', questionObj)
      }
    })

  },
  // 再听一次
  handleAgain: function(e) {

    let {questionsFileArry, btnDisabled} = this.data
    if (btnDisabled) {
      return false
    }
    let nowIndex = this.pageObj.nowIndex
    questionsFileArry[nowIndex].tempFilePaths.splice(1, 1)
    this.setData({
      questionsFileArry
    }, () => {
      this.wordYun()
    })
  },
  // 处理更新题库简介状态（只更新该用户的数据）
  handleBankStatus: function() {
    let bank = this.data.questionObj
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
      if(result !== -1) {
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
      }).then(console.log)
    })
  },

  // 处理更新题库详情状态 （只更新该用户的数据）
  handleBankStatusDetail: function() {
    let bank = this.data.questionObj
    let bankId = bank.parentId
    bank.questionsFileArry = this.data.questionsFileArry
    interviewBankForUser.get().then((res) => {
      let interviewBankList = res.data[0].interviewBankList
      let result = interviewBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      if(result !== -1) {
        interviewBankList[result] = bank
      } else {
        interviewBankList.push(bank)
      }
      wx.cloud.callFunction({
        name: 'updateInterviewBank',
        data: {
          interviewBankList,
        }
      }).then(console.log)
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  pageObj: {
    nowIndex: 0,
    i: 0
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
    this.stop()
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