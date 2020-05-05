// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const writtenBankForUser = db.collection('writtenBankForUser')
// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  return await writtenBankForUser.where({
    _openid: OPENID,
    }).update({
    data: {
      writtenBankList: event.writtenBankList
    }
  })
}