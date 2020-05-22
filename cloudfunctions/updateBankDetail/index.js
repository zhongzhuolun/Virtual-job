// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const writtenQuestions = db.collection('writtenQuestions')
// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()

  return await writtenQuestions.where({
    parentId: event.bank.parentId,
    }).update({
    data: {
      bank: event.bank.bank
    }
  })
}