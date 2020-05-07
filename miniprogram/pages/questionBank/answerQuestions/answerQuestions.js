// miniprogram/pages/questionBank/answerQuestions/answerQuestions.js
const app = getApp()
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
    examType: app.globalData.examType,
    bank: {}, // 从数据库中获取的题目
    index: 0,  // 专门给填空题使用的
    myIndex: 0, //
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
  },
  // 处理单道题目提交
  handleOneCommit: function(e) {
    console.log(e)
    let {chooseValue, questionIndex, bank} = this.data
    let that = this
    if (!chooseValue[questionIndex]) {
      wx.showToast({
        title: '答案不能为空',
        icon: 'none'
      })
    } else {
      console.log('确定提交？')
      wx.showModal({
        title: '确定提交？',
        success (res) {
          if (res.confirm) {
            that.handleWrongAndScore()
            that.setData({
              ifSubmitOne: false,
              ifViewAnwser: true,
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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
    let {chooseValue, wrongList, type, questionIndex} = this.data
    let choose = chooseValue[questionIndex]
    let bank = this.data.bank.bank
    let correctAnswer = bank[questionIndex].correct_answer

    if (choose) { // 用户填的题目不为空的时候
      choose = choose.toString()
    }
    if (type !== '填空') { // 代表不为填空题的时候
      correctAnswer = correctAnswer.toString()
      if(choose !== correctAnswer) { // 代表做错了
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
        if (!(chooseArr[index] === value)) {
          // 代表该空做错了
          wrongBlankObj.indexArry.push(index)
        }
      })
      if (wrongBlankObj.indexArry.length > 0) {
        wrongBlankObj.index = questionIndex
        wrongList.push(wrongBlankObj); // 代表填空题至少有一个空出错了
      }
    }    
    // bank.forEach((value, index) => {

    //   if (choose) { // 用户填的题目不为空的时候
    //     choose = choose.toString()
    //   }
    //   if (value.type !== '填空') { // 代表不为填空题的时候
    //     correctAnswer = correctAnswer.toString()
    //     if(choose !== correctAnswer) { // 代表做错了
    //       this.data.wrongList.push(index);
    //     } 
    //   } else { // 代表为填空题的时候
    //     let chooseArr = []
    //     let wrongBlankObj = {
    //       indexArry: [], // 填空题的错误空的序列集合
    //       // blankScore: 0, // 该填空题获得的分数
    //       index: null
    //     }
    //     if (choose) { // 代表用户填了该填空题
    //       chooseArr = choose.split(',')
    //     }
    //     correctAnswer.forEach((value, index) => {
    //       if (!(chooseArr[index] === value)) {
    //         // 代表该空做错了
    //         wrongBlankObj.indexArry.push(index)
    //       }
    //     })
    //     if (wrongBlankObj.indexArry.length > 0) {
    //       wrongBlankObj.index = index
    //       this.data.wrongList.push(wrongBlankObj); // 代表填空题至少有一个空出错了
    //     }
    //   }    
    // })
    if (wrongList.length > 0) { // 代表除去填空题以外 
      // 代表有错题
      this.data.bank.status.mistaked = true
      wrongList.forEach((value, index) => {
        if (typeof value === 'object') {// 填空题
          // totalScore -= value.blankScore // 题库的总分减去错题的分数
          bank[value.index].mistaked = true

        } else { // 非填空题
          bank[value].mistaked = true
        }
      })
    }
    // this.data.bank.status.done = true // 做完了
    // this.data.bank.status.doing = false // 结束在做的状态
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
    let {chooseValue} = this.data
    chooseValue[index] = e.detail.value;
    this.setData({
      index,
      type,
      chooseValue
    })
    // this.data.chooseValue[this.data.index] = e.detail.value;
  },
  // 处理多选，不定项选
  checkboxChange: function(e) {
    let index = e.currentTarget.id*1 - 1
    let type = e.currentTarget.dataset.type
    let {chooseValue} = this.data
    chooseValue[index] = e.detail.value.sort();

    this.setData({
      index,
      type,
      chooseValue
    })
    // this.data.chooseValue[this.data.index] = e.detail.value.sort();
  },
  // 处理填空，排序
  inputChange: function(e) {
    console.log(e)
    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.id*1 - 1
    let value = e.detail.value.trim().toUpperCase()
    let index1 = e.target.dataset.index
    let {chooseValue, blankArry, questionIndex} = this.data
    if (type && index) {
      this.setData({
        index,
        type
      })
    }
    if (type === '填空') {
      blankArry[index1] = value
      chooseValue[questionIndex] = blankArry
      this.setData({
        blankArry,
        chooseValue
      })
    } else {
      chooseValue[questionIndex] = value
      this.setData({
        chooseValue
      })

      // this.data.chooseValue[this.data.index] = value
    }
  },
    // 处理查看所有评论
    viewAllComments: function(e) {
      console.log(e)
      this.setData({
        ifViewAllComments: !this.data.ifViewAllComments
      })
    },
    // 处理查看答案
    viewAnwser: function(e) {
      this.setData({
        ifViewAnwser: !this.data.ifViewAnwser
      })
    },
    // 处理下一题
    handleNext: function(e) {
      wx.showLoading({
        title: '加载中',
      })
      let {questionIndex, correct_answer, bank, chooseValue, ifSubmitOne, ifViewAnwser} = this.data

 
        if (questionIndex < bank.bank.length - 1) {
          questionIndex++
          correct_answer = bank.bank[questionIndex].correct_answer.toString()
          if (!chooseValue[questionIndex]) {
            console.log(chooseValue[questionIndex], '未作答')
            ifSubmitOne = true
            ifViewAnwser = false
          } else {
            console.log(chooseValue[questionIndex], '已作答')
            ifSubmitOne = false
            ifViewAnwser = true
          }
          this.setData({
            questionIndex,
            correct_answer,
            ifSubmitOne,
            ifViewAnwser
          }, () => {
            wx.hideLoading({
              complete: (res) => {},
            })
          })
        } else {
          // 代表查看总结
          wx.navigateBack()
        }
   
    },
    // 处理上一题
    handlePre: function(e) {
      wx.showLoading({
        title: '加载中',
      })
      let {questionIndex, correct_answer, bank} = this.data
 
        if (questionIndex > 0) {
          questionIndex--
          correct_answer = bank.bank[questionIndex].correct_answer.toString()
          this.setData({
            questionIndex,
            correct_answer,
            ifSubmitOne: false,
          }, () => {
            wx.hideLoading({
              complete: (res) => {},
            })
          })
        }
    },
     // 处理收藏(更新用户的题库状态以及题库详情)
     handleCollection(e) {
      wx.showLoading()
      let title = ''
      let {bank} = this.data
      let {ifCollect} = this.data
      let bankId = bank.parentId
      let statusObj = {
        id: bankId
      }
      if (ifCollect) {
        bank.status.collection = false
        title = '取消收藏成功'
        this.setData({
          ifCollect: false
        })
      } else {
        bank.status.collection = true
        title = '收藏成功'
        this.setData({
          ifCollect: true
        })
      }
      statusObj.status = bank.status
      bankStatusList.get().then(res => {
        let statusList = res.data[0].statusList
          let result = statusList.findIndex((value) => {
            return value.id == bankId
          })
          if(result !== -1) {
            if (!bank.status.collection) {
              statusList[result].status.collection = false
            } else {
              statusList[result].status.collection = true
            }
          } else {
            statusList.push(statusObj)
          }
          wx.cloud.callFunction({
            name: 'updateBankStatus',
            data: {
              statusList
            }
          }).then(() => {
            wx.hideLoading()
            wx.showToast({
              title: title,
              icon: 'success'
            })
          })
      })
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
    // 获取当前题库状态
    getStatus: function() {
      let id = this.data.bank.parentId
      bankStatusList.get().then(res => {
        let statusList = res.data[0].statusList
        let ifCollect
        let result = statusList.find((value) => {
          return value.id === id
        })
        if(result) {
          ifCollect = result.status.collection
        }
        this.setData({
          ifCollect
        })
  
      })
    },
    // 处理菜单的点击
    handleMenu: function(e) {
      console.log(e)
        this.setData({
          modalName: e.currentTarget.dataset.target
        })
    },
    // 处理模态框的关闭
    hideModal: function(e) {
      this.setData({
        modalName: null
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    writtenQuestions.where({
      parentId: options.id*1
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