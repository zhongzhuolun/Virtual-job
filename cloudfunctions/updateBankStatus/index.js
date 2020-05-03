// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const bankStatusList = db.collection('bank-status')
// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  
  // bankStatusList.get().then(res => {result = res.data})
  // delete event.userInfo
  return await bankStatusList.where({
    _openid: OPENID,
    }).update({
    data: {
      statusList: event.statusList
    }
  })

}