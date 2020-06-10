// miniprogram/pages/questionBank/answerQuestions/answerQuestions.js
const app = getApp()
const db = wx.cloud.database()
const banksList = db.collection('banks-list')
const bankStatusList = db.collection('bank-status')
const writtenQuestions = db.collection('writtenQuestions')
const writtenBankForUser = db.collection('writtenBankForUser')
const interviewQuestions = db.collection('interviewQuestions')
const interviewBankForUser = db.collection('interviewBankForUser')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    examType: app.globalData.examType,
    bank: {}, // 从数据库中获取的题目
    index: 0, // 专门给填空题使用的
    nowIndex: null, // 标志用户做到的最后的一道题
    chooseValue: [], // 选择的答案序列
    wrongList: [], // 错误的题目集合
    blankArry: [], // 专门用于存储填空题答案的数组
    type: '', // 此时题目的类型
    time: "", // 页面上的时间
    ifSubmit: false, // 是否点击了提交
    emptyQuestions: [], // 用于存储未完成的题目序列
    emptyStr: '', // 用于存储未完成的题目序列的字符串
    checkClass: '', // 选中后的颜色更改
    questionIndex: 0, // 当前题目的序列
    correct_answer: '', // 正确答案
    ifViewAllComments: false, // 查看所有评论
    ifCollect: false, // 是否收藏
    modalName: null, // 模态框是否显示
    ifViewWrong: false, // 是否只看错题
    wrongIndex: 0, // 错题序列
    ifViewAnwser: false, // 是否查看答案
    ifSubmitOne: true, // 是否是处于单道题目的提交状态
    writtenBank: {},
    clearValue: '', // 清除填空题答案
    // topNum: 0,
  },
  goTop: function () {  // 一键回到顶部
    // this.setData({
    //   topNum: 0
    //   });
      wx.createSelectorQuery().select('#page').boundingClientRect(function(rect){
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.top
        })
      }).exec()
    },
  // 处理确定提交 （此时真正提交）
  handleComplete: function () {
    // 处理错题和分数评判(分数评判功能可能会取消)
    // this.handleWrongAndScore()
    let accuracy = this.handleCorrectRate() // 获取题型的正确率
    this.handleBankStatus(accuracy) // 更新题库简介状态
    this.handleBankStatusDetail(accuracy) // 更新题库详情状态
    // 跳转到分数界面，并将数据传送过去，包括分数和比例
    let examBank = {
      bank: this.data.bank, // 当前题库
      wrongList: this.data.wrongList, // 错误集合
      chooseValue: this.data.chooseValue // 用户选择的集合
    }
    app.globalData.examBank = examBank
  },
  // 处理题型的正确率 （功能针对所有用户，但获得的正确率只针对该用户）
  handleCorrectRate: function () {
    let {
      bank,
      questionTypeNum,
      accuracy
    } = this.data.bank
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
    accuracy.radio = (accuracy.radio / (questionTypeNum.radio === 0 ? 1 : questionTypeNum.radio)).toFixed(4) * 100
    accuracy.checkbox = (accuracy.checkbox / (questionTypeNum.checkbox === 0 ? 1 : questionTypeNum.checkbox)).toFixed(4) * 100
    accuracy.unsteady = (accuracy.unsteady / (questionTypeNum.unsteady === 0 ? 1 : questionTypeNum.unsteady)).toFixed(4) * 100
    accuracy.judge = (accuracy.judge / (questionTypeNum.judge === 0 ? 1 : questionTypeNum.judge)).toFixed(4) * 100
    accuracy.blank = (accuracy.blank / (questionTypeNum.blank === 0 ? 1 : questionTypeNum.blank)).toFixed(4) * 100
    accuracy.sort = (accuracy.sort / (questionTypeNum.sort === 0 ? 1 : questionTypeNum.sort)).toFixed(4) * 100
    console.log(accuracy, questionTypeNum)
    return accuracy
  },
  // 处理错题和分数评判（功能针对所有用户，但获得的分数只针对该用户,分数评判暂时不需要）
  handleWrongAndScore: function () {
    let {
      chooseValue,
      wrongList,
      type,
      questionIndex,
      bank
    } = this.data
    let choose = chooseValue[questionIndex]
    // let bank = bank.bank
    let correctAnswer = bank.bank[questionIndex].correct_answer

    if (choose) { // 用户填的题目不为空的时候
      choose = choose.toString().toLowerCase()
    }
    if (type !== '填空') { // 代表不为填空题的时候
      correctAnswer = correctAnswer.toString().trim().toLowerCase()
      if (choose !== correctAnswer) { // 代表做错了
        wrongList.push(questionIndex);
      }
    } else { // 代表为填空题的时候
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
        if (chooseArr[index]) {
          chooseArr[index] = chooseArr[index].toLowerCase()
        }
        if (!(chooseArr[index] === value.trim().toLowerCase())) {
          // 代表该空做错了
          wrongBlankObj.indexArry.push(index)
        }
      })
      if (wrongBlankObj.indexArry.length > 0) {
        wrongBlankObj.index = questionIndex
        wrongList.push(wrongBlankObj); // 代表填空题至少有一个空出错了
      }
    }
    if (wrongList.length > 0) {
      // 代表有错题
      bank.status.mistaked = true
      wrongList.forEach((value, index) => {
        if (typeof value === 'object') { // 填空题
          // totalScore -= value.blankScore // 题库的总分减去错题的分数
          bank.bank[value.index].mistaked = true

        } else { // 非填空题
          bank.bank[value].mistaked = true
        }
      })
    } else {
      this.data.bank.status.mistaked = false
    }
    this.setData({
      bank
    })
  },

  // 处理更新题库简介状态（只更新该用户的数据）
  handleBankStatus: function (accuracy) {
    let {
      bank,
      wrongList
    } = this.data
    let bankId = bank.parentId
    let statusObj = {
      id: bankId
    }
    if (accuracy) {
      bank.status.doing = false
      bank.status.done = true
      if (wrongList.length > 0) {
        bank.status.mistaked = true
      } else {
        bank.status.mistaked = false
      }
    } else {
      bank.status.doing = true
      bank.status.done = false
    }
    
    statusObj.status = bank.status
    bankStatusList.get().then(res => {
      let statusList = res.data[0].statusList
      let result = statusList.findIndex((value) => {
        return value.id == bankId
      })
      if (result !== -1) {
        console.log(accuracy)
        if (accuracy) {
          console.log(accuracy)
          statusList[result].status.doing = false
          statusList[result].status.done = true
          if (wrongList.length > 0) {
            console.log('mistaked')
            statusList[result].status.mistaked = true
          } else {
            statusList[result].status.mistaked = false
          }
        } else {
          statusList[result].status.doing = true
          statusList[result].status.done = false
        }
       
        // statusList[result].status.doing = false
        // statusList[result].status.done = true
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
  handleBankStatusDetail: function (accuracy) {
    // let typeNum = data // 拿到用户每种题型的正确率和题库中每种题型的数量
    let bank = this.data.bank
    let bankId = bank.parentId
    let that = this
    bank.chooseValue = this.data.chooseValue
    bank.wrongList = this.data.wrongList
    if (accuracy) {
      bank.accuracy = accuracy
    }
    writtenBankForUser.get().then((res) => {
      let writtenBankList = res.data[0].writtenBankList
      let result = writtenBankList.findIndex((value) => {
        return value.parentId == bankId
      })
      if (result !== -1) {
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
        if (accuracy) {
          wx.navigateTo({
            url: `../endQuestion/endQuestion?id=${bank.parentId}`,
            events: {},
            success: function (res) {
              that.setData({
                wrongList: []
              })
            }
          })
        }
      })
    })
  },

  // 处理单选，判断
  radioChange: function (e) {
    let index = e.currentTarget.id * 1 - 1
    let type = e.currentTarget.dataset.type
    let {
      chooseValue
    } = this.data
    chooseValue[index] = e.detail.value;
    this.setData({
      index,
      type,
      chooseValue
    })
    // this.data.chooseValue[this.data.index] = e.detail.value;
  },
  // 处理多选，不定项选
  checkboxChange: function (e) {
    let index = e.currentTarget.id * 1 - 1
    let type = e.currentTarget.dataset.type
    let {
      chooseValue
    } = this.data
    chooseValue[index] = e.detail.value.sort();

    this.setData({
      index,
      type,
      chooseValue
    })
    // this.data.chooseValue[this.data.index] = e.detail.value.sort();
  },
  // 专门给填空题使用的
  handleTap: function (e) {
    console.log(e.currentTarget.dataset.type)
    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.id * 1 - 1
    this.setData({
      index,
      type
    })
  },
  // 处理填空，排序
  inputChange: function (e) {
    let index = e.currentTarget.id * 1 - 1
    let value = e.detail.value.trim().toUpperCase()
    let index1 = e.target.dataset.index
    let type = e.currentTarget.dataset.type
    let {
      chooseValue,
      blankArry,
      questionIndex
    } = this.data
    if (type && index) {
      this.setData({
        index,
        type
      })
    }
    if (type === '填空') {
      blankArry[index1] = value
      this.setData({
        blankArry
      }, () => {
        chooseValue[questionIndex] = blankArry
        this.setData({
          blankArry,
          chooseValue
        })
      })

    } else {
      chooseValue[questionIndex] = value
      this.setData({
        chooseValue
      })
    }
  },
  // 处理查看答案
  viewAnwser: function (e) {
    this.setData({
      ifViewAnwser: !this.data.ifViewAnwser
    })
  },
  // 处理单道题目提交
  handleOneCommit: function (e) {
    let {
      chooseValue,
      questionIndex,
      bank,
      questionModal,
    } = this.data
    this.setData({
      blankArry: [],
      clearValue: ''
    }) // 每次提交题目后都要重置填空题的数据
    
    if (!chooseValue[questionIndex]) {
      if (bank.bank[questionIndex].type === '填空' || bank.bank[questionIndex].type === '排序') {
        // 代表没有填空，为了防止因为出现没有填空而导致的数组长度不一致
        // chooseValue[questionIndex] = ['未作答']
        chooseValue[questionIndex] = ['']
      } else {
        wx.showToast({
          title: '答案不能为空',
          icon: 'none'
        })
      }
      
    } else {
      if (questionModal === 'fighter') {
        this.handleWrongAndScore()
        this.handleNext()
      } else {
        this.handleWrongAndScore()
        if (!bank.bank[questionIndex].mistaked) {
          wx.showToast({
            title: '(∩_∩)答对啦！',
          })
        } else {
          wx.showToast({
            title: 'T_T答错了呢！',
            icon: 'none'
          })
        }
        this.setData({
          ifSubmitOne: false,
          ifViewAnwser: true,
        })
      }
      if (questionIndex < bank.bank.length - 1) {
        this.handleBankStatus() // 更新题库简介状态
        this.handleBankStatusDetail()
      }
    
    }
  },
  // 处理下一题
  handleNext: function (e) {
    let {
      questionIndex,
      correct_answer,
      bank,
      chooseValue,
      ifSubmitOne,
      ifViewAnwser,
      nowIndex
    } = this.data
    if (questionIndex < bank.bank.length - 1) {
      questionIndex++
      // nowIndex++
      this.goTop()
      correct_answer = bank.bank[questionIndex].correct_answer.toString()
      if (nowIndex) { // 如果标志存在证明此时用户至少点击了一次上一题
        if (questionIndex === nowIndex) { // 如果用户点击的下一题的序列等于当前标志的序列，则代表已经到了未提交的那一题
          console.log(chooseValue[questionIndex], '未作答')
          ifSubmitOne = true
          ifViewAnwser = false
          this.setData({ // 当到了未提交的那一题之后，需要重置标志
            nowIndex: null
          })
        } else {
          console.log(chooseValue[questionIndex], '已作答')
          ifSubmitOne = false
          ifViewAnwser = true
        }
        
      } else {
        if (!chooseValue[questionIndex]) { 
          console.log(chooseValue[questionIndex], '未作答')
          ifSubmitOne = true
          ifViewAnwser = false
        } else {
          console.log(chooseValue[questionIndex], '已作答')
          ifSubmitOne = false
          ifViewAnwser = true
        }
      }
      this.setData({
        questionIndex,
        correct_answer,
        ifSubmitOne,
        ifViewAnwser
      })
    } else {
      // 代表当前已经答完题目
      this.handleComplete()
    }

  },
  // 处理上一题
  handlePre: function (e) {
    let {
      questionIndex,
      correct_answer,
      bank,
      ifSubmitOne,
      nowIndex
    } = this.data
    if (questionIndex > 0) {
      this.goTop()
      if (ifSubmitOne) {
        nowIndex = questionIndex
      }
      questionIndex--
      correct_answer = bank.bank[questionIndex].correct_answer.toString()
      this.setData({
        nowIndex,
        questionIndex,
        correct_answer,
        ifSubmitOne: false,
        ifViewAnwser: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    let type = options.type
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      questionModal: options.modal || 'fighter'
    })
    if (type === 'continue') {
      writtenBankForUser.get().then((res) => {
        let writtenBankList = res.data[0].writtenBankList
        let bank = writtenBankList.find((value) => {
          return value.parentId == options.id * 1
        })
        let correct_answer = bank.bank[0].correct_answer.toString()
        let chooseValue = bank.chooseValue
        let wrongList = bank.wrongList
        this.setData({
          bank,
          correct_answer,
          chooseValue,
          wrongList,
          questionIndex: chooseValue.length
        }, () => {
          wx.hideLoading()
        })
        // app.globalData.examBank.bank = result
      })
    } else {
      writtenQuestions.where({
        parentId: options.id * 1
      }).get().then((res) => {
        console.log(res.data)
        let bank = res.data[0]
        let correct_answer = bank.bank[0].correct_answer.toString()
        this.setData({
          bank,
          correct_answer
        }, () => {
          wx.hideLoading({})
        })
      })
    }


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
    console.log(app.globalData.examType)
    this.setData({
      examType: app.globalData.examType
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