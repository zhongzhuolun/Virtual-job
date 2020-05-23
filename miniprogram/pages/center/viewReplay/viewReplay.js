const db = wx.cloud.database()
const commentsForUser = db.collection('commentsForUser')
const banksList = db.collection('banks-list')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '', // 查看消息的类型
    commentList: [], // 评论数组
    replyList: [], // 回复数组
    dotList: [], // 点赞数组
    reply: {}, // 回复对象
    dot: {}, // 点赞对象 
  },
  // 获取未读消息
  getMsg: function () {
    let {
      commentList,
      replyList,
      dotList
    } = this.data
    replyList = []
    dotList = []
    commentsForUser.get().then((res) => {
      commentList = res.data[0].commentList
      this.setData({
        commentList
      })
      commentList.forEach((value, index) => {
        console.log(value)
        value.reply.forEach((v, i) => {
          v.replyId = value.commentId + index + i
          v.commentId = value.commentId
          replyList.push(v)
        })
        value.spot_count.forEach((v, i) => {
          v.dotId = value.commentId + index + i
          v.commentId = value.commentId
          dotList.push(v)
        })
      })
      replyList = replyList.sort((a, b) => {
        return a.create_time < b.create_time ? 1 : -1
      })
      dotList = dotList.sort((a, b) => {
        return a.create_time < b.create_time ? 1 : -1
      })
      this.setData({
        replyList,
        dotList
      })
    })
  },
  // 处理查看消息
  handleViewComment: function (e) {
    let {
      type,
      commentList,
      replyList,
      dotList
    } = this.data
    let msgIndex = 0 // 回复，点赞所在的序号，默认为0
    let msgId = e.currentTarget.id // 回复，点赞的ID
    let commentId = e.currentTarget.dataset.commentid // 评论的ID
    let comment = commentList.find((value, index) => {
      return value.commentId === commentId
    }) // 评论对象
    let commentIndex = commentList.findIndex((value, index) => {
      return value.commentId === commentId
    }) // 评论所在的编号
    if (type === 'reply') { // 如果是查看回复状态
      msgIndex = comment.reply.findIndex((value, index) => {
        return value.replyId === msgId
      }) // 获取回复所在的序号
      comment.reply[msgIndex].ifView = true
    } else if (type === 'appre') { // 如果是查看点赞状态
      msgIndex = comment.spot_count.findIndex((value, index) => {
        return value.dotId === msgId
      }) // 获取点赞所在的序号
      comment.spot_count[msgIndex].ifView = true
    }
    commentList[commentIndex] = comment
    this.setData({
      commentList,
      replyList,
      dotList
    }, () => {
      this.updateComment(comment, 'comment')
      this.getBank(comment.bankId, comment.questionIndex)
    })

  },
  // 更新用户评论数据库
  updateComment: function (comment, type) {
    commentsForUser.get().then((res) => {
      let commentList = res.data[0].commentList
      let commentIndex = commentList.findIndex((value, index) => {
        return value.commentId === comment.commentId
      }) // 评论所在的编号
      commentList[commentIndex] = comment
        wx.cloud.callFunction({
          name: 'updateCmoment',
          data: {
            commentList,
            type
          }
        }).then(console.log)
    })
  },
  // 根据ID获取题库简介
  getBank: function(id, questionIndex) {
    banksList.where({id}).get().then((res) => {
      let bank = res.data[0]
      this.setData({
        bank
      }, () => {
        // 前往指定题库界面
        if (bank.class === '面试题') {
          wx.navigateTo({
            url: `../../questionBank/viewInterviewQuestion/viewInterviewQuestion?id=${bank.id}&questionIndex=${questionIndex}`,
          })
        } else {
          wx.navigateTo({
            url: '../../questionBank/viewQuestions/viewQuestions' + bank.id,
          })
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
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
    this.getMsg()
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