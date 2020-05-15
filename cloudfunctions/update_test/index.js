// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const bankListInterview = db.collection('bankListInterview')

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  return await bankListInterview.update({
    data: {
      writtenBankList: event.data
    }
  })
}