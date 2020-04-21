// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const banksList = db.collection('banks-list')
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // bankStatusList.get().then(res => {result = res.data})
  delete event.userInfo
  return await banksList.add({
    data: event
  })

}