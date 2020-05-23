// miniprogram/pages/home/wrongAll/wrongAll.js
const app = getApp()
const db = wx.cloud.database()
const bankStatusList = db.collection('bank-status')
const writtenQuestions = db.collection('writtenQuestions')
const writtenBankForUser = db.collection('writtenBankForUser')
const commentsForUser = db.collection('commentsForUser')
const moment = require('../../../utils/moment')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class: '', // 当前是面试还是笔试
    // examBank: {}, // 笔试题中包含当前用户所做的题库，错误集合，选择的集合
    questionIndex: 0, // 当前题目的序列
    correct_answer: '', // 正确答案
    ifViewAllComments: false, // 查看所有评论
    ifCollect: false, // 是否收藏
    modalName: null, // 模态框是否显示
    ifViewWrong: false, // 是否只看错题
    wrongIndex: 0, // 错题序列
    parentId: null, // 题库ID
    commentContent: '', // 评论的内容
    comment: {}, // 评论的对象
    userInfo: wx.getStorageSync('userInfo'), // 用户信息
    commentStatus: 0, // 评论状态，0代表评论，1代表回复
    userId: '', // 用户的ID
    placeHolderValue: '发表你对这道题的想法', // 评论框中的placeholder的值
    autoFocus: false, // 是否自动聚焦
  },

  // 处理下一题
  handleNext: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    let {
      questionIndex,
      correct_answer,
      wrongList,
      bank,
      ifViewWrong,
      wrongIndex
    } = this.data
    let that = this
    if (ifViewWrong) { // 代表是查看错题的状态
      if (wrongIndex < wrongList.length - 1) {
        this.updateMsg() // 更新评论
        wrongIndex++
        if (typeof wrongList[wrongIndex] !== 'object') {
          questionIndex = wrongList[wrongIndex]
        } else {
          questionIndex = wrongList[wrongIndex].index
        }
        correct_answer = bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer,
          wrongIndex
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      } else {
        // 代表查看总结
        wx.navigateTo({
          url: '../endQuestion/endQuestion',
          events: {},
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('getAccuracy', bank.accuracy)
          }
        })
      }
    } else {
      if (questionIndex < bank.bank.length - 1) {
        this.updateMsg() // 更新评论
        questionIndex++
        correct_answer = bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer,
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      } else {
        // 代表查看总结
        wx.navigateTo({
          url: '../endQuestion/endQuestion',
          events: {},
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('getAccuracy', bank.accuracy)
          }
        })
      }
    }
    this.setData({
      commentContent: '',
      commentStatus: 0,
    })
  },
  // 处理上一题
  handlePre: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    let {
      questionIndex,
      correct_answer,
      bank,
      wrongList,
      ifViewWrong,
      wrongIndex
    } = this.data
    if (ifViewWrong) { // 代表是查看错题的状态
      if (wrongIndex > 0) {
        this.updateMsg() // 更新评论
        wrongIndex--
        if (typeof wrongList[wrongIndex] !== 'object') {
          questionIndex = wrongList[wrongIndex]
        } else {
          questionIndex = wrongList[wrongIndex].index
        }
        correct_answer = bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer,
          wrongIndex
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      } else {
        // 代表查看总结
        wx.navigateBack()
      }
    } else {
      if (questionIndex > 0) {
        this.updateMsg() // 更新评论
        questionIndex--
        correct_answer = bank.bank[questionIndex].correct_answer.toString()
        this.setData({
          questionIndex,
          correct_answer
        }, () => {
          wx.hideLoading({
            complete: (res) => {},
          })
        })
      }
    }
    this.setData({
      commentContent: '',
      commentStatus: 0,
    })
  },
  // 处理收藏(更新用户的题库状态以及题库详情)
  handleCollection(e) {
    wx.showLoading()
    let title = ''
    let {
      bank,
      ifCollect
    } = this.data
    let bankId = bank.parentId
    let statusObj = {
      id: bankId
    }
    if (ifCollect) {
      bank.status.collection = false
      title = '取消收藏成功'
      this.setData({
        ifCollect: false
      })
    } else {
      bank.status.collection = true
      title = '收藏成功'
      this.setData({
        ifCollect: true
      })
    }
    statusObj.status = bank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let result = statusList.findIndex((value) => {
        return value.id == bankId
      })
      if (result !== -1) {
        if (!bank.status.collection) {
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
    writtenBankForUser.get().then((res) => {
      let writtenBankList = res.data[0].writtenBankList
      let result = writtenBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      if (result !== -1) {
        writtenBankList[result] = bank
      } else {
        writtenBankList.push(bank)
      }
      wx.cloud.callFunction({
        name: 'updateWrittenBank',
        data: {
          writtenBankList,
        }
      }).then(console.log)
    })

  },

  // 处理菜单的点击
  handleMenu: function (e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  // 处理模态框的关闭
  hideModal: function (e) {
    this.setData({
      modalName: null
    })
  },
  // 处理切换查看试卷的类型
  checkType: function (e) {
    let wrongList = this.data.wrongList
    let {
      bank,
      questionIndex
    } = this.data
    this.setData({
      ifViewWrong: !this.data.ifViewWrong
    }, () => {
      if (this.data.ifViewWrong) {
        if (typeof wrongList[0] !== 'object') {
          this.setData({
            questionIndex: wrongList[0],
          })
        } else {
          this.setData({
            questionIndex: wrongList[0].index
          })
        }
      } else {
        this.setData({
          questionIndex: 0
        })
      }
    })
    this.setData({
      commentContent: '',
      commentStatus: 0,
      correct_answer: bank.bank[questionIndex].correct_answer.toString()
    })
  },
  // 根据指定序号跳转题目
  skipQuestion: function (e) {
    let id = e.target.id * 1
    // let
    this.hideModal()
    let {
      questionIndex,
      bank,
      wrongIndex,
      wrongList
    } = this.data
    questionIndex = id - 1
    wrongIndex =  wrongList.findIndex((value, index) => {
      if (value.index) { // 代表为填空题
        return value.index === questionIndex
      } else {
        return value === questionIndex
      }
    })
    this.setData({
      questionIndex,
      wrongIndex,
      correct_answer: bank.bank[questionIndex].correct_answer.toString(),
      commentContent: '',
      commentStatus: 0,
    })

  },



  // 处理查看所有评论
  viewAllComments: function (e) {
    // console.log(e)
    this.setData({
      ifViewAllComments: !this.data.ifViewAllComments
    })
    this.updateMsg() // 更新评论
  },
  // 获取当前用户笔试题库
  getCurrentBank: function (bankId) {
    wx.showLoading({
      title: '加载中',
    })
    let ifCollect = false
    writtenBankForUser.get().then((res) => {
      let writtenBankList = res.data[0].writtenBankList
      let result = writtenBankList.find((value) => {
        return value.parentId == bankId
      })
      if (result) {
        ifCollect = result.status.collection
      }
      // console.log(result)
      this.setData({
        bank: result,
        chooseValue: result.chooseValue,
        status: result.status,
        wrongList: result.wrongList,
        ifCollect,
        correct_answer: result.bank[0].correct_answer.toString()
      }, () => {
        this.getStatus()
        this.updateMsg()
      })
      wx.hideLoading()
      app.globalData.examBank.bank = result
    })
  },
  // 获取当前题库状态
  getStatus: function () {
    let id = this.data.bank.parentId
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let ifCollect = false
      let result = statusList.find((value) => {
        return value.id === id
      })
      if (result) {
        ifCollect = result.status.collection
      }
      this.setData({
        ifCollect
      })

    })
  },
  
  // 更新评论点赞回复
  updateMsg: function () {
    let bankId = this.data.parentId
    let {
      bank,
      questionIndex
    } = this.data
    writtenQuestions.get().then((res) => {
      let writtenBankList = res.data
      let result = writtenBankList.find((value) => {
        return value.parentId == bankId
      })
      bank.bank[questionIndex].comments = result.bank[questionIndex].comments
      this.setData({
        bank
      }, () => {
        this.handleBankForUser()
      })
      wx.cloud.callFunction({
        name: 'updateBankDetail',
        data: {
          bank: result,
        }
      }).then(console.log)
    })
  },
  // 处理评论输入框的输入状态
  handleInput: function (e) {
    // console.log(e)
    let {
      placeHolderValue
    } = this.data
    if (placeHolderValue === '发表你对这道题的想法') {
      this.setData({
        commentStatus: 0
      })
    } else {
      this.setData({
        commentStatus: 1
      })
    }

  },
  // 实时获取当前评论框的内容
  handleComment: function (e) {
    let commentContent = e.detail.value
    this.setData({
      commentContent,
    })

  },
  // 发表评论回复点赞后更新公有题库详情
  handleBankStatusDetail: function (obj, type) {
    let bankId = this.data.parentId
    let {
      bank,
      questionIndex,
      userId
    } = this.data

    writtenQuestions.get().then((res) => {
      let writtenBankList = res.data
      let result = writtenBankList.find((value) => {
        return value.parentId == bankId
      })
      if (type === 'comment') {
        result.bank[questionIndex].comments.unshift(obj)
        bank.bank[questionIndex].comments = result.bank[questionIndex].comments
      } else if (type === 'replay') {
        result.bank[questionIndex].comments[this.index].reply.push(obj)
        bank.bank[questionIndex].comments[this.index].reply = result.bank[questionIndex].comments[this.index].reply
      } else {
        let spotCount = result.bank[questionIndex].comments[this.index].spot_count
        let ifLike = spotCount.findIndex((value, index) => {
          return value.userId === userId
        })
        if (ifLike !== -1) {
          // 代表用户点赞过了，此时应该是取消点赞
          result.bank[questionIndex].comments[this.index].spot_count.splice(ifLike, 1)
          bank.bank[questionIndex].comments[this.index].spot_count = result.bank[questionIndex].comments[this.index].spot_count
          // spotCount.splice(ifLike, 1)
        } else {
          // 代表用户没有点赞过，此时应该为点赞
          // spotCount.push(obj)
          result.bank[questionIndex].comments[this.index].spot_count.push(obj)
          bank.bank[questionIndex].comments[this.index].spot_count = result.bank[questionIndex].comments[this.index].spot_count
        }
      }

      this.setData({
        bank
      }, () => {
        this.handleBankForUser()
      })
      wx.cloud.callFunction({
        name: 'updateBankDetail',
        data: {
          bank: result,
        }
      }).then(console.log)
    })

  },
  // 更新该用户题库详情
  handleBankForUser: function (comment) {
    let {
      bank
    } = this.data
    let bankId = this.data.parentId
    writtenBankForUser.get().then((res) => {
      let writtenBankList = res.data[0].writtenBankList
      let result = writtenBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      // console.log(result)
      if (result !== -1) {
        writtenBankList[result] = bank
      } else {
        writtenBankList.push(bank)
      }
      wx.cloud.callFunction({
        name: 'updateWrittenBank',
        data: {
          writtenBankList,
        }
      }).then(console.log)
    })
  },
  // 处理回复
  handleReplay: function (e) {
    console.log(e)
    let index = e.currentTarget.dataset.index // 代表当前所点击要回复用户所在评论的序列号
    this.index = index
    let id = e.currentTarget.id || e.target.id // 获取到被回复的用户的ID
    let name = e.currentTarget.dataset.name || e.target.dataset.name //获取被回复用户的昵称
    let commentId = e.target.dataset.commentid
    if (commentId === undefined) {
      commentId = e.currentTarget.dataset.commentid
    }
    this.commentId = commentId // 
    console.log(commentId)
    this.setData({
      commentStatus: 1,
      placeHolderValue: '回复' + name,
      autoFocus: true
    })

  },
  // 处理失去焦点
  handleBlur: function (e) {
    // console.log(e)
    this.setData({
      // commentStatus: 0,
      placeHolderValue: '发表你对这道题的想法'
    })
  },
  // 创建一条评论
  createComment: function (id) {
    let {
      commentContent,
      userInfo,
      bank,
      questionIndex
    } = this.data
    let date = moment().format('YYYY-MM-DD HH:mm') // 获取当前时间
    let comment = {
      user_id: id, // 用户的ID 
      create_time: date, // 评论创建的时间
      user_name: userInfo.nickName, // 用户昵称
      avatar: userInfo.avatarUrl, // 用户头像
      content: commentContent, // 评论的内容
      spot_count: [], // 点赞数，默认为空数组
      reply: [], // 回复，默认为空数组
      bankId: bank.parentId, // 代表是哪个题库的评论
      questionIndex, // 代表是第几题的评论
      commentId: bank.bank[questionIndex].comments.length
    }
    // console.log(bank.bank[questionIndex].comments.length)
    this.setData({
      commentContent: '',
      commentStatus: 0,
    })
    return comment
  },
  // 创建一条回复
  createReplay: function (id) {
    let {
      commentContent,
      userInfo,
      bank,
      questionIndex
    } = this.data

    let reply = {
      user_id: id, // 用户的ID 
      user_name: userInfo.nickName, // 用户昵称
      avatar: userInfo.avatarUrl, // 用户头像
      content: commentContent, // 评论的内容
      bankId: bank.parentId, // 代表是哪个题库的回复
      questionIndex, // 代表是第几题的回复
    }
    this.setData({
      commentContent: '',
      commentStatus: 0,
    })
    return reply
  },
  // 更新用户评论数据库
  updateComment: function (comment, type) {
    let {
      bank,
      questionIndex,
      userId
    } = this.data
    commentsForUser.get().then((res) => {
      let commentList = res.data[0].commentList
      let myComment = {
        ...comment
      }
      if (type === 'comment') {
        commentList.unshift(myComment)
        wx.cloud.callFunction({
          name: 'updateCmoment',
          data: {
            commentList,
            type
          }
        }).then(console.log)
      } else if (type === 'reply') {
        console.log(myComment) // 此时为回复
        myComment.ifView = false // 默认为没有查看
        let result = bank.bank[questionIndex].comments.find((value, index) => {
          return value.commentId === this.commentId
        })
        userId = result.user_id
        wx.cloud.callFunction({
          name: 'updateCmoment',
          data: {
            userId,
            type,
            myComment,
            commentId: this.commentId
          }
        }).then(console.log)
        console.log(result)
      } else {
        myComment.ifView = false // 点赞
        let spotCount = bank.bank[questionIndex].comments[this.index].spot_count
        let ifLike = spotCount.findIndex((value, index) => {
          return value.userId === userId
        }) // 代表该用户是否点赞了，-1代表没有，其他代表有，且为对应的索引值
        let dotUserId = bank.bank[questionIndex].comments[this.index].user_id // 被点赞用户的ID
        wx.cloud.callFunction({
          name: 'updateCmoment',
          data: {
            dotUserId,
            type,
            myComment,
            ifLike
          }
        }).then(console.log)
        // if (ifLike !== -1) {
        //   // 代表用户点赞过了，此时应该是取消点赞
        //   result.bank[questionIndex].comments[this.index].spot_count.splice(ifLike, 1)
        //   bank.bank[questionIndex].comments[this.index].spot_count = result.bank[questionIndex].comments[this.index].spot_count
        //   // spotCount.splice(ifLike, 1)
        // } else {
        //   // 代表用户没有点赞过，此时应该为点赞
        //   // spotCount.push(obj)
        //   result.bank[questionIndex].comments[this.index].spot_count.push(obj)
        //   bank.bank[questionIndex].comments[this.index].spot_count = result.bank[questionIndex].comments[this.index].spot_count
        // }
      }


    })
  },
  // 发表评论
  handlePublish: function (e) {
    // console.log(e)
    wx.showLoading({
      title: '加载中',
    })
    let {
      commentContent,
      commentStatus,
      userId
    } = this.data
    // console.log(commentStatus)
    if (!commentContent) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
      return false
    }
    if (commentStatus === 0) {
      // 拿到评论
      let comment = this.createComment(userId)
      console.log(comment)
      // 更新公用题库详情
      this.handleBankStatusDetail(comment, 'comment')
      // 更新用户评论数据库
      this.updateComment(comment, 'comment')
    } else {
      // 拿到回复
      let reply = this.createReplay(userId)
      this.handleBankStatusDetail(reply, 'replay')
      this.updateComment(reply, 'reply')

    }
    this.setData({
      commentStatus: 0,
      placeHolderValue: '发表你对这道题的想法'
    }, () => {
      wx.hideLoading()
    })
  },
  // 处理点赞
  handleLike: function (e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    this.index = index // 代表当前所点击评论的序列号
    let id = e.currentTarget.id // 获取到被点赞的用户的ID
    wx.showLoading({
      title: '加载中',
    })
    let {
      userId,
      userInfo
    } = this.data
    let dot = {
      userId,
      useName: userInfo.nickName,
      avatar: userInfo.avatarUrl
    }
    // 更新题库
    this.handleBankStatusDetail(dot, 'dot')
    // 告知被点赞用户
    this.updateComment(dot, 'dot')
    wx.hideLoading()

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'login',
    }).then((res) => {
      // 拿到用户的ID
      let userId = res.result.openid
      this.setData({
        commentStatus: 0,
        userId
      }, () => {
        wx.hideLoading()
      })
    })
    this.setData({
      class: '笔试',
      parentId: options.id
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getCurrentBank(this.data.parentId)
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
})