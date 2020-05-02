// miniprogram/pages/home/examWritten/examWritten.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank: {
      "id": 1, 
      "industry": "前端", 
      "class": "笔试题",
      "title": "百度2019校招Web前端工程师笔试卷", 
      "limit_time": "1",
      "score": "",
      "total_points": "100",
      "status": { 
        "done": false, 
        "doing": true,
        "collection": false, 
        "mistaked": false 
      }, 
      "bank": [ 
        {
          "title": "TCP和UDP说法错误的是（  ）",  
          "type": "单选",  
          "mistaked": false,
          "check": false,
          "id": 1,
          "options": {
            "A": "UDP是面向字节流的协议",
            "B": "TCP的头部消息较UDP来说更全面",
            "C": "TCP是端对端的不支持广播、多播",
            "D": "TCP可以用在远程登陆方面，UDP可以用在语音通话方面",
          },  
          "correct_answer": ["A"],  
          "parsing": "这是常识来着", 
          "score": 8,  
          "note": "这是一条备注",  
          "comments": [  
            {
              "user_name": "zarek",  
              "avatar": "https://wdwd1312.jpg",  
              "user_id": 1,  
              "content": "这道题好难啊！！！",
              "spot_count": 666,  
              "create_time":  "2020-04-14 19:30",  
              "reply": [  
                {
                  "user_name": "zzl",  
                  "avatar": "https://wdwd1323412.jpg",  
                  "user_id": 2,  
                  "content": "是啊是啊！",  
                  "spot_count": 111,  
                  "create_time":  "2020-04-14 19:35"  
                }
              ]
            }
          ]
        },
        {
          "title": "下面关于进程三态模型说法错误的是（  ）",  
          "type": "多选",  
          "mistaked": false,
          "check": false,
          "id": 2,
          "options": {
            "A": "就绪状态和执行状态可以互相转换",
            "B": "阻塞状态可以直接转换为执行状态",
            "C": "就绪状态转换为执行状态进行了进程调度",
            "D": "阻塞状态可以直接转换为就绪状态",
          },  
          "correct_answer": ["A", "B", "C", "D"],  
          "parsing": "这是常识来着", 
          "score": 10,  
          "note": "这是一条备注",  
          "comments": [  
            {
              "user_name": "zarek",  
              "avatar": "https://wdwd1312.jpg",  
              "user_id": 1,  
              "content": "这道题好难啊！！！",
              "spot_count": 666,  
              "create_time":  "2020-04-14 19:30",  
              "reply": [  
                {
                  "user_name": "zzl",  
                  "avatar": "https://wdwd1323412.jpg",  
                  "user_id": 2,  
                  "content": "是啊是啊！",  
                  "spot_count": 111,  
                  "create_time":  "2020-04-14 19:35"
                }
              ]
            }
          ]
        },
        {
          "title": "TCP和UDP说法错误的是（  ）",  
          "type": "不定项选",  
          "mistaked": false,
          "check": false,
          "id": 3,
          "options": {
            "A": "UDP是面向字节流的协议",
            "B": "TCP的头部消息较UDP来说更全面",
            "C": "TCP是端对端的不支持广播、多播",
            "D": "TCP可以用在远程登陆方面，UDP可以用在语音通话方面",
            "E": "UDP不是面向字节流的协议",
          },  
          "correct_answer": ["A", "B", "C", "D"],  
          "parsing": "这是常识来着", 
          "score": 8,  
          "note": "这是一条备注",  
          "comments": [  
            {
              "user_name": "zarek",  
              "avatar": "https://wdwd1312.jpg",  
              "user_id": 1,  
              "content": "这道题好难啊！！！",
              "spot_count": 666,  
              "create_time":  "2020-04-14 19:30",  
              "reply": [  
                {
                  "user_name": "zzl",  
                  "avatar": "https://wdwd1323412.jpg",  
                  "user_id": 2,  
                  "content": "是啊是啊！",  
                  "spot_count": 111,  
                  "create_time":  "2020-04-14 19:35"
                }
              ]
            }
          ]
        },
        {
          "title": "TCP和UDP说法错误的是（  ）",  
          "type": "判断",  
          "mistaked": false,
          "check": false,
          "id": 4,
          "options": {
            "A": "对",
            "B": "错",
          },  
          "correct_answer": ["A"],  
          "parsing": "这是常识来着", 
          "score": 8,  
          "note": "这是一条备注",  
          "comments": [  
            {
              "user_name": "zarek",  
              "avatar": "https://wdwd1312.jpg",  
              "user_id": 1,  
              "content": "这道题好难啊！！！",
              "spot_count": 666,  
              "create_time":  "2020-04-14 19:30",  
              "reply": [  
                {
                  "user_name": "zzl",  
                  "avatar": "https://wdwd1323412.jpg",  
                  "user_id": 2,  
                  "content": "是啊是啊！",  
                  "spot_count": 111,  
                  "create_time":  "2020-04-14 19:35"
                }
              ]
            }
          ]
        },
        {
          "title": "TCP可以用在 __[填空1]__，UDP可以用在__[填空2]__方面，TCP是端对端的不支持广播、多播。",  
          "type": "填空", 
          "mistaked": false,
          "check": false,
          "id": 5,
          "correct_answer": ["远程登录", "语音通话"],  
          "parsing": "这是常识来着", 
          "score": 8,  
          "note": "这是一条备注",  
          "comments": [  
            {
              "user_name": "zarek",  
              "avatar": "https://wdwd1312.jpg",  
              "user_id": 1,  
              "content": "这道题好难啊！！！",
              "spot_count": 666,  
              "create_time":  "2020-04-14 19:30",  
              "reply": [  
                {
                  "user_name": "zzl",  
                  "avatar": "https://wdwd1323412.jpg",  
                  "user_id": 2,  
                  "content": "是啊是啊！",  
                  "spot_count": 111,  
                  "create_time":  "2020-04-14 19:35"
                }
              ]
            }
          ]
        },
        {
          "title": "下列步骤的正确顺序是 __[填空1]__ 。",  
          "type": "排序",
          "mistaked": false,
          "check": false,
          "id": 6,  
          "options": {
            "A": "UDP是面向字节流的协议",
            "B": "TCP的头部消息较UDP来说更全面",
            "C": "TCP是端对端的不支持广播、多播",
            "D": "TCP可以用在远程登陆方面，UDP可以用在语音通话方面",
          },  
          "correct_answer": ["DBAC"],  
          "parsing": "这是常识来着", 
          "score": 8,  
          "note": "这是一条备注",  
          "comments": [  
            {
              "user_name": "zarek",  
              "avatar": "https://wdwd1312.jpg",  
              "user_id": 1,  
              "content": "这道题好难啊！！！",
              "spot_count": 666,  
              "create_time":  "2020-04-14 19:30",  
              "reply": [  
                {
                  "user_name": "zzl",  
                  "avatar": "https://wdwd1323412.jpg",  
                  "user_id": 2,  
                  "content": "是啊是啊！",  
                  "spot_count": 111,  
                  "create_time":  "2020-04-14 19:35"
                }
              ]
            }
          ]
        },
        {
          "title": "TCP和UDP说法错误的是（  ）",  
          "type": "单选",  
          "mistaked": false,
          "check": false,
          "id": 7,
          "options": {
            "A": "UDP是面向字节流的协议",
            "B": "TCP的头部消息较UDP来说更全面",
            "C": "TCP是端对端的不支持广播、多播",
            "D": "TCP可以用在远程登陆方面，UDP可以用在语音通话方面",
          },  
          "correct_answer": ["A"],  
          "parsing": "这是常识来着", 
          "score": 8,  
          "note": "这是一条备注",  
          "comments": [  
            {
              "user_name": "zarek",  
              "avatar": "https://wdwd1312.jpg",  
              "user_id": 1,  
              "content": "这道题好难啊！！！",
              "spot_count": 666,  
              "create_time":  "2020-04-14 19:30",  
              "reply": [  
                {
                  "user_name": "zzl",  
                  "avatar": "https://wdwd1323412.jpg",  
                  "user_id": 2,  
                  "content": "是啊是啊！",  
                  "spot_count": 111,  
                  "create_time":  "2020-04-14 19:35"  
                }
              ]
            }
          ]
        },
      ]
    },
    index: 0,  // 题目序列
    chooseValue: [], // 选择的答案序列
    totalScore: 100, // 总分
    wrongList: [], // 错误的题目集合
    blankArry: [], // 专门用于存储填空题答案的数组
    type: '', // 此时题目的类型
    time: "60:00"
  },
  //处理提交
  handleSubmit: function(e) {
    console.log(this.data.chooseValue)
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
    let timer = null;
    this.setData({
      time: this.data.bank.limit_time
    }, () => {
      timer = setInterval(() => {
        console.log(this.data.time)
        let time = this.data.time
        time = this.format(time, false) // 转化为秒
        if (time > 0) { // 答题时间还未结束
          time--
          this.setData({
            time: this.format(time, true) // 转化为
          })
        } else { // 答题时间结束
          clearInterval(timer)
          wx.showModal({
            title: '提示',
            content: '答题时间结束，将在两秒钟后自动提交',
            showCancel: false,
            success (res) {
              if (res.confirm) {
                wx.showToast({
                  title: '已提交',
                })
                wx.navigateTo({
                  url: '../index/index',
                })
              } 
             
              
            }
          })
          
        }
      
      }, 1000)
    })
  

  },
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