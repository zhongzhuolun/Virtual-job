// miniprogram/pages/home/examWritten/examWritten.js
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const writtenQuestions = db.collection('writtenQuestions')
const writtenBankForUser = db.collection('writtenBankForUser')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank: {}, // 从数据库中获取的题目
    index: 0,  // 题目序列
    chooseValue: [], // 选择的答案序列
    // totalScore: 100, // 总分
    wrongList: [], // 错误的题目集合
    blankArry: [], // 专门用于存储填空题答案的数组
    type: '', // 此时题目的类型
    time: "", // 页面上的时间
    ifSubmit: false, // 是否点击了提交
    emptyQuestions: [], // 用于存储未完成的题目序列
    emptyStr: '', // 用于存储未完成的题目序列的字符串
    // score: 0, // 用户答题的总分数
    checkClass: '' // 选中后的颜色更改

  },

  // 处理提交(此时未真正提交)
  handleSubmit: function(e) {
    console.log(this.data.chooseValue)
    // 显示自定义的确认提交模态框
    this.setData({
      ifSubmit: true
    })
    // 调用处理未完成的函数
    this.handleUnfinished()
  },

  // 处理继续答题（功能针对所有用户）
  handleContinue: function(e) {
    // 显示答题界面，同时重置错题集合
    this.setData({
      ifSubmit: false,
      wrongList: []
    })
  },

  // 处理未完成 （功能针对所有用户）
  handleUnfinished: function() {
    let len = this.data.bank.bank.length
    let emptyQuestions = []
    let emptyStr = ''
    for(let i = 0; i < len; i++) {
      if (this.data.chooseValue[i] == undefined || this.data.chooseValue[i].length == 0) {
        emptyQuestions.push(i+1)
      }
    }
    emptyStr = emptyQuestions.toString()
    this.setData({
      emptyQuestions,
      emptyStr
    })
   
  },

  // 处理题型的正确率 （功能针对所有用户，但获得的正确率只针对该用户）
  handleCorrectRate: function() {
    let bank = this.data.bank.bank
    var myTypeNum = {
        danxuan: 0,
        duoxuan: 0,
        budingxiang: 0,
        panduan: 0,
        tiankong: 0,
        paixu: 0
    }
    var allTypeNum = {
        allDanxuan: 0,
        allDuoxuan: 0,
        allBudingxiang: 0,
        allPanduan: 0,
        allTiankong: 0,
        allPaixu: 0
    }
    // 拿到题型的总数
    // 将用户填写的正确的题型总数处以该题型的总数，得到正确率，保留两位小数
    bank.forEach((item, idnex) => {
      switch (item.type) {
        case '单选':
          allTypeNum.allDanxuan += 1
          if (!item.mistaked) {
            myTypeNum.danxuan += 1
          }
          break;
        case '多选':
          allTypeNum.allDuoxuan += 1
          if (!item.mistaked) {
            myTypeNum.duoxuan += 1
          }
          break;
        case '不定项选':
          allTypeNum.allBudingxiang += 1
          if (!item.mistaked) {
            myTypeNum.budingxiang += 1
          }
          break;
        case '判断':
          allTypeNum.allPanduan += 1
          if (!item.mistaked) {
            myTypeNum.panduan += 1
          }
          break;
        case '填空':
          allTypeNum.allTiankong += 1
          if (!item.mistaked) {
            myTypeNum.tiankong += 1
          }
          break;
        case '排序':
          allTypeNum.allPaixu += 1
          if (!item.mistaked) {
            myTypeNum.paixu += 1
          }
          break;
        default:
          break;
      }
    })
    console.log(myTypeNum,allTypeNum)
    myTypeNum.danxuan = (myTypeNum.danxuan/allTypeNum.allDanxuan).toFixed(4)*100
    myTypeNum.duoxuan = (myTypeNum.duoxuan/allTypeNum.allDuoxuan).toFixed(4)*100
    myTypeNum.budingxiang = (myTypeNum.budingxiang/allTypeNum.allBudingxiang).toFixed(4)*100
    myTypeNum.panduan = (myTypeNum.panduan/allTypeNum.allPanduan).toFixed(4)*100
    myTypeNum.tiankong = (myTypeNum.tiankong/allTypeNum.allTiankong).toFixed(4)*100
    myTypeNum.paixu = (myTypeNum.paixu/allTypeNum.allPaixu).toFixed(4)*100
    return {
      myTypeNum,
      allTypeNum
    }
  },
  // 处理错题和分数评判（功能针对所有用户，但获得的分数只针对该用户,分数评判暂时不需要）
  handleWrongAndScore: function() {
    let bank = this.data.bank.bank
    let chooseValue = this.data.chooseValue
    // let totalScore = this.data.bank.total_points // 获取到总分
    bank.forEach((value, index) => {
      let correctAnswer = value.correct_answer
      let choose = chooseValue[index]
      if (choose) { // 用户填的题目不为空的时候
        choose = choose.toString()
      }
      if (value.type !== '填空') { // 代表不为填空题的时候
        correctAnswer = correctAnswer.toString()
        if(choose !== correctAnswer) { // 代表做错了
          // if (choose !== undefined) {
          //   console.log(correctAnswer,correctAnswer.replace(',','').indexOf(choose.replace(',', '')) != -1,choose ) // true代表该题目半对，false代表该题目全错（只针对多选题和不定项选择题）
          // }
         
          this.data.wrongList.push(index);
        } 
      } else { // 代表为填空题的时候
        // let blankScore = 0
        // blankScore = value.score // 获取到该填空题的分数
        // let oneBlankScore = Math.floor(blankScore/correctAnswer.length) // 获取该填空题每个空的分数
        let chooseArr = []
        let wrongBlankObj = {
          indexArry: [], // 填空题的错误空的序列集合
          // blankScore: 0, // 该填空题获得的分数
          index: null
        }
        if (choose) { // 代表用户填了该填空题
          chooseArr = choose.split(',')
        }
        correctAnswer.forEach((value, index) => {
          if (!(chooseArr[index] === value)) {
            // 代表该空做错了
            // wrongBlankObj.blankScore += oneBlankScore
            wrongBlankObj.indexArry.push(index)
          }
        })
        if (wrongBlankObj.indexArry.length > 0) {
          wrongBlankObj.index = index
          this.data.wrongList.push(wrongBlankObj); // 代表填空题至少有一个空出错了
        }
      }    
    })
    if (this.data.wrongList.length > 0) { // 代表除去填空题以外 
      // 代表有错题
      this.data.bank.status.mistaked = true
      this.data.wrongList.forEach((value, index) => {
        if (typeof value === 'object') {// 填空题
          // totalScore -= value.blankScore // 题库的总分减去错题的分数
          bank[value.index].mistaked = true

        } else { // 非填空题
          // totalScore -= bank[value].score
          bank[value].mistaked = true
        }
      })
    }
    this.data.bank.status.done = true // 做完了
    this.data.bank.status.doing = false // 结束在做的状态
    // return this.handleCorrectRate() // 返回正确率对象
    // return totalScore // 返回总分
  },

  // 处理本地存储 （只针对登录用户，定时调用，特殊情况提示调用）
  handleStorage: function() {

  },

  // 处理更新题库简介状态（只更新该用户的数据）
  handleBankStatus: function() {
    let bank = this.data.bank
    let bankId = bank.parentId
    let statusObj = {
      id: bankId
    }
    bank.status.doing = false
    bank.status.done = true
    if (this.data.wrongList.length > 0) {
      bank.status.mistaked = true
    }
    statusObj.status = bank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let result = statusList.findIndex((value) => {
        return value.id == bankId
      })
      if(result !== -1) {
        if (this.data.wrongList.length > 0) {
          console.log('mistaked')
          statusList[result].status.mistaked = true
        }
        statusList[result].status.doing = false
        statusList[result].status.done = true
      } else {
        statusList.push(statusObj)
      }
      wx.cloud.callFunction({
        name: 'updateBankStatus',
        data: {
          statusList,
        }
      }).then(console.log)

    })
  },

  // 处理更新题库详情状态 （只更新该用户的数据）
  handleBankStatusDetail: function(data) {
    let typeNum = data // 拿到用户每种题型的正确率和题库中每种题型的数量
    let bank = this.data.bank
    let bankId = bank.parentId
    bank.chooseValue = this.data.chooseValue 
    bank.wrongList = this.data.wrongList 
    bank.typeNum = typeNum
    writtenBankForUser.get().then((res) => {
      let writtenBankList = res.data[0].writtenBankList
      let result = writtenBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      if(result !== -1) {
        writtenBankList[result] = bank
      } else {
        writtenBankList.push(bank)
      }
      wx.cloud.callFunction({
        name: 'updateWrittenBank',
        data: {
          writtenBankList,
        }
      }).then(console.log)
    })
  },

  // 处理确定提交 （此时真正提交）
  handleComplete: function(e) {
    // 处理错题和分数评判(分数评判功能可能会取消)
    this.handleWrongAndScore()
    let item = this.handleCorrectRate() // 获取题型的正确率
    this.handleBankStatus() // 更新题库简介状态
    this.handleBankStatusDetail(item) // 更新题库详情状态
    // 跳转到分数界面，并将数据传送过去，包括分数和比例
    let examBank = {
      bank: this.data.bank, // 当前题库
      wrongList: this.data.wrongList, // 错误集合
      chooseValue: this.data.chooseValue // 用户选择的集合
    }
    let that = this
    app.globalData.examBank = examBank
    wx.navigateTo({
      url: '../score/score',
      events: {
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', item)
        that.setData({
          wrongList: []
        }) 
      }
    })

    // 跳转后应该清楚上一次的错题序列


  },

  // 专门给填空题使用的
  handleTap: function(e) {
    console.log(e.currentTarget.dataset.type)
    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.id*1 - 1
    this.setData({
      index,
      type
    })
  },

  // 处理单选，判断
  radioChange: function(e) {
    let index = e.currentTarget.id*1 - 1
    let type = e.currentTarget.dataset.type
    this.setData({
      index,
      type
    })
    this.data.chooseValue[this.data.index] = e.detail.value;
  },

  // 处理多选，不定项选
  checkboxChange: function(e) {
    let index = e.currentTarget.id*1 - 1
    let type = e.currentTarget.dataset.type
    this.setData({
      index,
      type
    })
    this.data.chooseValue[this.data.index] = e.detail.value.sort();
  },

  // 处理填空，排序
  inputChange: function(e) {
    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.id*1 - 1
    let value = e.detail.value.trim().toUpperCase()
    let index1 = e.target.dataset.index
    let blankArry = this.data.blankArry
    if (type && index) {
      this.setData({
        index,
        type
      })
    }
    if (this.data.type === '填空') {
      blankArry[index1] = value
      this.setData({
        blankArry
      }, () => {
        this.data.chooseValue[this.data.index] = this.data.blankArry;
      })
    } else {
      this.data.chooseValue[this.data.index] = value
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // wx.setNavigationBarTitle({ title: this.data.bank.title }) // 动态设置导航条标题
    wx.showLoading({
      title: '加载中',
    })
    writtenQuestions.where({
      parentId: options.id*1
    }).get().then((res) => {
      console.log(res.data)
      let bank = res.data[0]
      this.setData({
        bank,
      }, () => {
        wx.hideLoading({})
        let timer = null;
        this.setData({
          time: this.data.bank.limit_time
        }, () => {
          timer = setInterval(() => {
            let time = this.data.time
            time = this.format(time, false) // 转化为秒
            if (time > 0) { // 答题时间还未结束
              time--
              this.setData({
                time: this.format(time, true) // 转化为
              })
            } else { // 答题时间结束
              clearInterval(timer)
              wx.showToast({
                title: '答题结束',
                duration: 2000
              })
              this.handleComplete() // 答题时间结束，自动提交
            }
          }, 1000)
        })
      })
    })

  },
  // 考试时间格式化
  format(time, normal) {
    let finalTime = 0
    if (normal) { // 代表正常格式化 MM:SS，说明此时传入的是一个以秒为单位的数据
      let minites = Math.floor(time / 60) // 得到分钟数
      let seconds = time % 60 // 得到秒数
      if (minites < 10) {
        minites = '0' + minites // 格式化分钟数
      }
      if (seconds < 10) {
        seconds = '0' + seconds // 格式化秒数
      }
      finalTime = minites + ':' + seconds  // 转化为MM:SS格式的时间字符串
    } else { // 代表恢复秒为单位的数值, 说明此时传入的是一个以 MM:SS 为格式的数据
      let timeArry = time.split(':') // 将时间字符串按照":"来分割
      // ['55', '30']
      timeArry.forEach((element, index) => {
        if (index === 0) { // 代表小时
          element = element*60
          finalTime += element
        } else { // 代表分钟
          element *= 1
          finalTime += element
        }
      });
    }
    return finalTime
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