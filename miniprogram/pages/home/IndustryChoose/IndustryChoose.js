// miniprogram/pages/home/IndustryChoose/IndustryChoose.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true,
    industry: '',
    ifScroll: false,
    industryData: {
      "classes": [
        {
          "class": "校园",
          "posts": [
            {
              "post": "学生会",
              "skill": ["学习部", "体育部", "组织部", "主席团"]
            },
            {
              "post": "校团委",
              "skill": ["主席团",]
            }
          ]
        },
        {
          "class": "技术",
          "posts": [
            {
              "post": "后端开发",
              "skill": ["全栈工程师", "GIS工程师", "Java", "C++"]
            },
            {
              "post": "移动开发",
              "skill": ["HTML5", "JavaScript", "移动web前端", "iOS", "前端"]
            }
          ]
        },
        {
          "class": "产品",
          "posts": [
            {
              "post": "产品经理",
              "skill": ["硬件产品经理", "产品经理", "网页产品经理", "移动产品经理"]
            },
            {
              "post": "高端产品职位",
              "skill": ["产品总监"]
            },
            {
              "post": "其他产品职位",
              "skill": ["其他产品职位"]
            }
          ]
        },
        {
          "class": "经理",
          "posts": [
            {
              "post": "产品经理",
              "skill": ["硬件产品经理"]
            },
            {
              "post": "高端产品职位",
              "skill": ["产品总监"]
            }
          ]
        },
        {
          "class": "设计",
          "posts": [
            {
              "post": "产品经理",
              "skill": ["硬件产品经理"]
            },
            {
              "post": "高端产品职位",
              "skill": ["产品总监"]
            }
          ]
        },
        {
          "class": "运营",
          "posts": [
            {
              "post": "产品经理",
              "skill": ["硬件产品经理"]
            },
            {
              "post": "高端产品职位",
              "skill": ["产品总监"]
            }
          ]
        },
        {
          "class": "市场",
          "posts": [
            {
              "post": "产品经理",
              "skill": ["硬件产品经理"]
            },
            {
              "post": "高端产品职位",
              "skill": ["产品总监"]
            }
          ]
        },
        {
          "class": "人事",
          "posts": [
            {
              "post": "产品经理",
              "skill": ["硬件产品经理"]
            },
            {
              "post": "高端产品职位",
              "skill": ["产品总监"]
            }
          ]
        },
        {
          "class": "高级管理",
          "posts": [
            {
              "post": "产品经理",
              "skill": ["硬件产品经理"]
            },
            {
              "post": "高端产品职位",
              "skill": ["产品总监"]
            }
          ]
        }
      ]
    },
    activeName: 0,
    examType: ''
  },
  handleConfirm() {
    let {industry, examType} = this.data
    if (industry === '') {
      wx.showToast({
        title: '请选择一项职位',
        icon: 'none'
      })
    } else {
      wx.setStorage({
        data: industry,
        key: 'industry',
      })
      if (examType === '面试') {
        wx.navigateTo({
          url: '../enterInterview/enterInterview?examType=面试题',
        })
      } else {
        wx.navigateTo({
          url: '../enterWritten/enterWritten?examType=笔试题',
        })
      }

    }
  },
  handleSkillCheck(e) {
    const skill = e.target.dataset.src
    this.setData({
      industry: skill,
    })
  },
  onLoad(option) {
    console.log(option)
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    let length = this.data.industryData.classes.length
    for (let i = 0; i < length; i++) {
      list[i] = {};
      // list[i].name = String.fromCharCode(65 + i);
      list[i].name = this.data.industryData.classes[i].posts
      list[i].id = i;
    }
    console.log(list)
    this.setData({
      list: list,
      listCur: list[0],
      examType: option.type
    })
    let that = this
    wx.getStorage({
      key: 'industry',
      success (res) {
        that.setData({
          industry: res.data
        })
      }
    })
  },
  onReady() {
    wx.hideLoading()
  },
  onChange(event) {
    console.log(event)
    this.setData({
      activeName: event.detail
    });
  },

  tabSelect(e) {
    console.log(e)
   
    this.setData({
      ifScroll: true,
    })
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50,
      ifScroll: true,
      activeName: 0
    }, () => {
      this.setData({
        ifScroll: false
      })
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
})