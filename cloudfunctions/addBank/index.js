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
  return await banksList.field({
      id: true
    }).limit(1000).get().then(res => {
      let id = res.data[res.data.length - 1].id
      banksList.add({
        data: {
          "id": id + 1, 
          "industry": "前端", 
          "class": "笔试题",
          "title": "腾讯前端笔试题库3", 
          "limit_time": "50",
          "status": { 
            "done": false, 
            "doing": false,
            "collection": false,
            "mistaked": false
          }
        }
      })
    })
  return await banksList.add({
    data: event
  })

}