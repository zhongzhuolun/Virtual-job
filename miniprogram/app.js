//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'virtual-bxkak',
        traceUser: true,
      })
      const db = wx.cloud.database()
      const banksList = db.collection('banks-list')
      const bankStatusList = db.collection('bank-status')
      const writtenBankForUser = db.collection('writtenBankForUser')
      const interviewBankForUser = db.collection('interviewBankForUser')
      bankStatusList.get().then((res) => {
        if (res.data.length === 0) {
          bankStatusList.add({
            data: {
              statusList: []
            }
          }).then(console.log)
        }
      })
      writtenBankForUser.get().then((res) => {
        if (res.data.length === 0) {
          writtenBankForUser.add({
            data: {
              writtenBankList: []
            }
          }).then(console.log)
        }
      })
      interviewBankForUser.get().then((res) => {
        if (res.data.length === 0) {
          interviewBankForUser.add({
            data: {
              interviewBankList: []
            }
          }).then(console.log)
        }
      })
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.globalData.userInfo = userInfo
        this.globalData.loginStatus = true
      } 

     
    }

  },
  globalData: {
    examType: 'written', // 用户选择考试的类型
    examBank: {}, // 用户笔试的数据
    writtenBank: {}, // 用户面试的数据
    userInfo: {}, // 用户信息
    loginStatus: false
  },
  updataType(type) {
    this.globalData.examType = type
  }
})
