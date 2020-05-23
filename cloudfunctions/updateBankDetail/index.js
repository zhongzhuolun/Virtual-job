// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const writtenQuestions = db.collection('writtenQuestions')
const interviewQuestions = db.collection('interviewQuestions')
// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  if (event.type === 'interview') {
    return await interviewQuestions.where({
      parentId: event.bank.parentId,
      }).update({
      data: {
        questions: event.bank.questions
      }
    })
  } else {
    return await writtenQuestions.where({
      parentId: event.bank.parentId,
      }).update({
      data: {
        bank: event.bank.bank
      }
    })
  }

}