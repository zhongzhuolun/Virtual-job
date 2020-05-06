// miniprogram/pages/home/interviewAll/interviewAll.js
const app = getApp()
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    writtenBank: {
      "parentId": 1,
      "title": "腾讯前端面试题库",
      "industry": "前端",
      "questions": [{
        "title": "请简单做一下自我介绍？",
        "analyse": "题目解读",
        "comments": [       {
          "user_name": "zarek",  
          "avatar": "https://wdwd1312.jpg",  
          "user_id": 1,  
          "content": "这道题好难啊！！！",
          "spot_count": 666,  
          "create_time":  "2020-04-14 19:30",  
          "reply": [  
            {
              "user_name": "zzl",  
              "avatar": "https://wdwd1323412.jpg",  
              "user_id": 2,  
              "content": "是啊是啊！",  
              "spot_count": 111,  
              "create_time":  "2020-04-14 19:35"  
            }
          ]
        },
        {
          "user_name": "zarek",  
          "avatar": "https://wdwd1312.jpg",  
          "user_id": 1,  
          "content": "这道题好难啊！！！",
          "spot_count": 666,  
          "create_time":  "2020-04-14 19:30",  
          "reply": [  
            {
              "user_name": "zzl",  
              "avatar": "https://wdwd1323412.jpg",  
              "user_id": 2,  
              "content": "是啊是啊！",  
              "spot_count": 111,  
              "create_time":  "2020-04-14 19:35"  
            }
          ]
        }],
        "id": 1,
        "note": "这是一条备注",
        "refer_answer": "我是xxx,我来自哪里"
      }, {
        "comments": [],
        "id": 2,
        "note": "这是一条备注",
        "analyse": "题目解读",
        "refer_answer": "根据国家现金管理制度和结算制度的规定，企业收支的各种款项必须按照国务院颁发的《现金管理暂行条例》的规定办理， \n在规定的范围内使用现金。 \n允许企业使用现金结算的范围有：职工工资、津贴；个人劳务报酬；根据国家规定颁发给个人的科学技术、文化艺术、体育等各种奖金；各种劳保、福利费用以及国家规定的对个人的其他支出；向个人收购农副产品和其他物资的价款；出差人员必须随身携带的差旅费；零星支出；中国人民银行确定需要支付现金的其他支出。企业在经营活动中发生的现金收入，应及时送存银行，不得直接用于支付自己的支出。企业如因特殊情况需要坐支现金的，应当事先报经开户银行审查批准，由开户银行核定坐支范围和限额。企业不得用不符合财务制度的凭证顶替库存现金，即不得“白条抵库”；不准谎报用途套取现金；不准用银行账户代其他单位和个人存入或支取现金；不准用单位收入的现金以个人名义存入储蓄；不准保留账外公款，即不得“公款私存”，不得设置“小金库”等。",
        "title": "企业一般对现金管理有哪些要求？"
      }],
      "status": {
        "collection": false,
        "doing": false,
        "done": true
      },
      "class": "面试题",
      "questionsFileArry": [{
        "tempFilePaths": ["cloud://virtual-bxkak.7669-virtual-bxkak-1301807690/1588753632164.mp3", "cloud://virtual-bxkak.7669-virtual-bxkak-1301807690/1588753637777.mp3"],
        "title": "请简单做一下自我介绍？"
      }, {
        "tempFilePaths": ["cloud://virtual-bxkak.7669-virtual-bxkak-1301807690/1588753637795.mp3"],
        "title": "企业一般对现金管理有哪些要求？"
      }],
      "tip": "这是这个题库的总提示",
      "count": 2
    }, // 面试题中包含当前用户所做的题库
    questionIndex: 0, // 当前题目的序列
    ifViewAllComments: false, // 查看所有评论
    ifCollect: false, // 是否收藏
    modalName: null, // 模态框是否显示
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
        wx.navigateBack()
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
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 应该为获取全局的数据为准
    // let {writtenBank} = app.globalData
    // this.setData({
    //   writtenBank
    // })
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