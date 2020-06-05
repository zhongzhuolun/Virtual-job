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
    checkClass: '', // 选中后的颜色更改
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
    let {bank, questionTypeNum, accuracy} = this.data.bank
    accuracy = {
      radio: 0,
      checkbox: 0,
      unsteady: 0,
      judge: 0,
      blank: 0,
      sort: 0
    }
    // 拿到题型的总数
    // 将用户填写的正确的题型总数处以该题型的总数，得到正确率，保留两位小数
    bank.forEach((item, idnex) => {
      switch (item.type) {
        case '单选':
          if (!item.mistaked) {
            accuracy.radio += 1
          }
          break;
        case '多选':
          if (!item.mistaked) {
            accuracy.checkbox += 1
          }
          break;
        case '不定项选':
          if (!item.mistaked) {
            accuracy.unsteady += 1
          }
          break;
        case '判断':
          if (!item.mistaked) {
            accuracy.judge += 1
          }
          break;
        case '填空':
          if (!item.mistaked) {
            accuracy.blank += 1
          }
          break;
        case '排序':
          if (!item.mistaked) {
            accuracy.sort += 1
          }
          break;
        default:
          break;
      }
    })
    console.log(accuracy,questionTypeNum)
    accuracy.radio = (accuracy.radio/(questionTypeNum.radio === 0 ? 1: questionTypeNum.radio)).toFixed(4)*100
    accuracy.checkbox = (accuracy.checkbox/(questionTypeNum.checkbox === 0 ? 1: questionTypeNum.checkbox)).toFixed(4)*100
    accuracy.unsteady = (accuracy.unsteady/(questionTypeNum.unsteady === 0 ? 1: questionTypeNum.unsteady)).toFixed(4)*100
    accuracy.judge = (accuracy.judge/(questionTypeNum.judge === 0 ? 1: questionTypeNum.judge)).toFixed(4)*100
    accuracy.blank = (accuracy.blank/(questionTypeNum.blank === 0 ? 1: questionTypeNum.blank)).toFixed(4)*100
    accuracy.sort = (accuracy.sort/(questionTypeNum.sort === 0 ? 1: questionTypeNum.sort)).toFixed(4)*100
    console.log(accuracy)

    return accuracy
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
        choose = choose.toString().toLowerCase()
      }
      if (value.type !== '填空') { // 代表不为填空题的时候
        correctAnswer = correctAnswer.toString().trim().toLowerCase()
        if(choose !== correctAnswer) { // 代表做错了
          // if (choose !== undefined) {
          //   console.log(correctAnswer,correctAnswer.replace(',','').indexOf(choose.replace(',', '')) != -1,choose ) // true代表该题目半对，false代表该题目全错（只针对多选题和不定项选择题）
          // }
          this.data.wrongList.push(index);
        } else {
          value.mistaked = false
        }
      } else { // 代表为填空题的时候
        let chooseArr = []
        let wrongBlankObj = {
          indexArry: [], // 填空题的错误空的序列集合
          index: null // 代表题目序号
        }
        if (choose) { // 代表用户填了该填空题
          chooseArr = choose.split(',')
        }
        correctAnswer.forEach((value, index) => {
          if (chooseArr[index]) {
            chooseArr[index] = chooseArr[index].toLowerCase()
          }
          if (!(chooseArr[index] === value.trim().toLowerCase())) {
            // 代表该空做错了
            wrongBlankObj.indexArry.push(index)
          }
        })
        if (wrongBlankObj.indexArry.length > 0) {
          wrongBlankObj.index = index
          this.data.wrongList.push(wrongBlankObj); // 代表填空题至少有一个空出错了
        } else {
          value.mistaked = false
        }
      }    
    })
    if (this.data.wrongList.length > 0) { 
      // 代表有错题
      this.data.bank.status.mistaked = true
      this.data.wrongList.forEach((value, index) => {
        if (typeof value === 'object') {// 填空题
          bank[value.index].mistaked = true
        } else { // 非填空题
          bank[value].mistaked = true
        }
      })
    } else {
      this.data.bank.status.mistaked = false
    }
    this.data.bank.status.done = true // 做完了
    this.data.bank.status.doing = false // 结束在做的状态
  },

  // 处理本地存储 （只针对登录用户，定时调用，特殊情况提示调用）
  handleStorage: function() {

  },

  // 处理更新题库简介状态（只更新该用户的数据）
  handleBankStatus: function() {
    let {bank, wrongList} = this.data
    let bankId = bank.parentId
    let statusObj = {
      id: bankId
    }
    bank.status.doing = false
    bank.status.done = true
    if (wrongList.length > 0) {
      bank.status.mistaked = true
    } else {
      bank.status.mistaked = false
    }
    statusObj.status = bank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let result = statusList.findIndex((value) => {
        return value.id == bankId
      })
      if(result !== -1) {
        if (wrongList.length > 0) {
          console.log('mistaked')
          statusList[result].status.mistaked = true
        } else {
          statusList[result].status.mistaked = false
        }
        statusList[result].status.doing = false
        statusList[result].status.done = true
      } else {
        statusList.push(statusObj)
      }
      console.log(statusList)
      wx.cloud.callFunction({
        name: 'updateBankStatus',
        data: {
          statusList,
        }
      }).then(console.log)

    })
  },

  // 处理最终更新题库详情状态 （只更新该用户的数据）
  handleBankStatusDetail: function(accuracy) {
    let bank = this.data.bank
    let bankId = bank.parentId
    bank.chooseValue = this.data.chooseValue 
    if (accuracy) {
      bank.accuracy = accuracy
      bank.wrongList = this.data.wrongList 
    }
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
      }).then(() => {
        wx.navigateTo({
          url: '../score/score?id=' + this.data.bank.parentId ,
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            // res.eventChannel.emit('acceptDataFromOpenerPage', accuracy)
            // that.setData({
            //   wrongList: []
            // }) 
          }
        })
      })
    })
  },

  // 处理确定提交 （此时真正提交）
  handleComplete: function(e) {
    // 处理错题和分数评判(分数评判功能可能会取消)
    this.handleWrongAndScore()
    let accuracy = this.handleCorrectRate() // 获取题型的正确率
    this.handleBankStatus() // 更新题库简介状态
    this.handleBankStatusDetail(accuracy) // 更新题库详情状态
    // 跳转到分数界面，并将数据传送过去，包括分数和比例
    let examBank = {
      bank: this.data.bank, // 当前题库
      wrongList: this.data.wrongList, // 错误集合
      chooseValue: this.data.chooseValue // 用户选择的集合
    }
    let that = this
    app.globalData.examBank = examBank
    clearInterval(this.pageObj.timer)
    this.pageObj.timer = null
  

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
    this.data.chooseValue[this.data.index] = e.detail.value.sort()

  },

  // 处理填空，排序
  inputChange: function(e) {
    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.id*1 - 1
    let value = e.detail.value.trim().toLowerCase()
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
  pageObj: {
    timer: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
        wx.hideLoading()
        writtenBankForUser.get().then((res) => {
          let writtenBankList = res.data[0].writtenBankList
          bank.status.doing = true
          bank.status.done = false
          let result = writtenBankList.findIndex((value) => {
            return value.parentId == bank.parentId
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
        this.setData({
          time: this.data.bank.limit_time,
        }, () => {
          this.pageObj.timer = setInterval(() => {
            let time = this.data.time
            time = this.format(time, false) // 转化为秒
            if (time > 0) { // 答题时间还未结束
              time--
              this.setData({
                time: this.format(time, true) // 转化为
              })
            } else { // 答题时间结束
              clearInterval(this.pageObj.timer)
              this.pageObj.timer = null
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
    clearInterval(this.pageObj.timer)
    this.pageObj.timer = null
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