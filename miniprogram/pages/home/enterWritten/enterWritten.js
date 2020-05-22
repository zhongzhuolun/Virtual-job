// miniprogram/pages/home/enterWritten/enterWritten.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const writtenQuestions = db.collection('writtenQuestions')
const writtenBankForUser = db.collection('writtenBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank: {},
    industry: wx.getStorageSync('industry')
  },
  handleStartExam: function(e) {
    let bank = this.data.bank
    let bankId = bank.id
    let statusObj = {
      id: bankId
    }
    wx.showModal({
      title: '考试须知',
      content: '笔试考试过程中，如果中途退出答题，将不会自动保存进度，可以去个人中心的我的题库中寻找该题库继续答题',
      confirmText: '我知道了',
      cancelText: '暂不考试',
      success: (res) => {
        if (res.confirm) {
          // this.handleBankStatus()
          bank.status.doing = true
          bank.status.done = false
          statusObj.status = bank.status
          bankStatusList.get().then(res => {
            let statusList = res.data[0].statusList
              let result = statusList.findIndex((value) => {
                return value.id == bankId
              })
              if(result !== -1) {
                statusList[result].status.doing = true
                statusList[result].status.done = false
              } else {
                statusList.push(statusObj)
              }
              wx.cloud.callFunction({
                name: 'updateBankStatus',
                data: {
                  statusList,
                }
              }).then(console.log)
              wx.navigateTo({
                url: '../examWritten/examWritten?id=' + bankId
              })
        })
        } 
      }
    })
  },
    // 处理更新题库简介状态（只更新该用户的数据）
    handleBankStatus: function() {
      let bank = this.data.bank
      let bankId = bank.parentId
      let statusObj = {
        id: bankId
      }
      bank.status.doing = true
      bank.status.done = false
      statusObj.status = bank.status
      bankStatusList.get().then(res => {
        let statusList = res.data[0].statusList
          let result = statusList.findIndex((value) => {
            return value.id == bankId
          })
          if(result !== -1) {
            statusList[result].status.doing = true
            statusList[result].status.done = false
          } else {
            statusList.push(statusObj)
          }
          wx.cloud.callFunction({
            name: 'updateBankStatus',
            data: {
              statusList,
            }
          }).then(console.log)
          wx.navigateTo({
            url: '../examWritten/examWritten?id=' + bankId
          })
    })
    },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    writtenQuestions.where({
      parentId: options.id*1
    }).get().then((res) => {
      console.log(res.data)
      let detailBank = res.data[0]
      this.setData({
        detailBank,
      }, () => {
        wx.hideLoading({})
      })
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
    let industry = wx.getStorageSync('industry').trim()
    this.setData({
      industry
    })
    banksList.where({
      class: '笔试题', 
      industry,
      // id: 10 // 暂时写死（后期应该为随机，且优先选择用户未曾刷过的题）
    }).get().then((res) => {
      console.log(res)
      let bankLists = res.data
      let index = Math.floor(Math.random(0,1)*bankLists.length)
      if (bankLists.length === 0) {
        wx.showModal({
          title: '提示',
          content: '很抱歉，该行业暂时没有笔试题，点击确定返回首页',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: '../index/index',
              })
            }
          }
        })
      } else {
        this.setData({
          bank: bankLists[index]
        })
      }
     
    })
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