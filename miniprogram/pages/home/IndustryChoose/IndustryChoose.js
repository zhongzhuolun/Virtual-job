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
          "class": "技术",
          "posts": [
            {
              "post": "移动开发",
              "skill": ["前端"]
            }
          ]
        },
        {
          "class": "医疗健康",
          "posts": [
            {
              "post": "护士/护理",
              "skill": ["护士长", "护士", "导医"]
            }
          ]
        },
        {
          "class": "金融",
          "posts": [
            {
              "post": "税务审计",
              "skill": ["会计"]
            },
            {
              "post": "银行",
              "skill": ["银行"]
            }
          ]
        },
        {
          "class": "销售",
          "posts": [
            {
              "post": "销售",
              "skill": ["销售"]
            }
          ]
        },
        {
          "class": "通用",
          "posts": [
            {
              "post": "通用",
              "skill": ["通用"]
            }
          ]
        },
        {
          "class": "外企",
          "posts": [
            {
              "post": "外企",
              "skill": ["外企"]
            }
          ]
        },
      ]
    },
    activeName: 0,
    examType: '',
    center: ''
  },
  handleConfirm() {
    let {industry, examType, tabbar} = this.data
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
      } else if (examType === '笔试') {
        wx.navigateTo({
          url: '../enterWritten/enterWritten?examType=笔试题',
        })
      } else if (tabbar === 'center') {
        wx.navigateBack()
      } else {
        wx.switchTab({
          url: '../../questionBank/index/index',
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
    this.setData({
      tabbar: option.tabbar
    })
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
    this.setData({
      activeName: event.detail
    });
  },

  tabSelect(e) {
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