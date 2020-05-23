// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const commentsForUser = db.collection('commentsForUser')
// 云函数入口函数
exports.main = async (event, context) => {
  const {
    OPENID
  } = cloud.getWXContext()
  if (event.type === 'comment') {
    return await commentsForUser.where({
      _openid: OPENID,
    }).update({
      data: {
        commentList: event.commentList
      }
    })
  } else if (event.type === 'reply') {
    return await commentsForUser.where({
      _openid: event.userId,
    }).get().then((res) => {
      let commentList = res.data[0].commentList
      let result = commentList.findIndex((value, index) => {
        return value.commentId === event.commentId
      })
      commentList[result].reply.push(event.myComment)
      commentsForUser.where({
        _openid: event.userId,
      }).update({
        data: {
          commentList: commentList
        }
      })
    })
  } else {
    return await commentsForUser.where({
      _openid: event.dotUserId,
    }).get().then((res) => {
      let commentList = res.data[0].commentList
      let result = commentList.findIndex((value, index) => {
        return value.user_id === event.dotUserId
      })
      if (event.ifLike !== -1) {
        // 代表用户点赞过了，此时应该是取消点赞
        commentList[result].spot_count.splice(event.ifLike, 1)
      } else {
        // 代表用户没有点赞过，此时应该为点赞
        commentList[result].spot_count.push(event.myComment)
      }
      commentsForUser.where({
        _openid: event.dotUserId,
      }).update({
        data: {
          commentList: commentList
        }
      })
    })
  }


}