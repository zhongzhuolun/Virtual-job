const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const fileStream = fs.createReadStream(event.url)
  return await cloud.uploadFile({
    cloudPath: 'demo.mp3',
    fileContent: fileStream,
  })
}