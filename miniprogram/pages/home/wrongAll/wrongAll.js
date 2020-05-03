// miniprogram/pages/home/wrongAll/wrongAll.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bank: {
      "id": 10, 
      "industry": "前端", 
      "class": "笔试题",
      "title": "百度2019校招Web前端工程师笔试卷", 
      "limit_time": "60:00",
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
      ]
    }, // 模拟数据
    class: '',
    examBank: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.class)
    console.log(app.globalData.examBank)
    this.setData({
      class: options.class,
      // examBank: app.globalData.examBank
      examBank: app.globalData.examBank
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