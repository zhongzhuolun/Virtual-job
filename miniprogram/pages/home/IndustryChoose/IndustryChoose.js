// import {industryData} from '../../../data/industryData'
const db = wx.cloud.database()
const industryData = db.collection('industryData')
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
    industryData: [],
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
        // wx.showToast({
        //   title: '可以去个人中心修改行业哦',
        // })
        wx.navigateTo({
          url: '../enterInterview/enterInterview?examType=面试题',
        })
      } else if (examType === '笔试') {
        // wx.showToast({
        //   title: '可以去个人中心修改行业哦',
        // })
        wx.navigateTo({
          url: '../enterWritten/enterWritten?examType=笔试题',
        })
      } else if (tabbar === 'center') {
        wx.navigateBack()
      } else {
        // wx.showToast({
        //   title: '可以去个人中心修改行业哦',
        // })
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
    industryData.get().then((res) => {
      console.log(res.data[0])
      let industryData = res.data[0]
      this.setData({
        industryData
      }, () => {
        let list = [{}];
        let length = this.data.industryData.classes.length
        for (let i = 0; i < length; i++) {
          list[i] = {};
          list[i].name = this.data.industryData.classes[i].posts
          list[i].id = i;
        }
        this.setData({
          list: list,
          listCur: list[0],
          examType: option.type
        })
      })
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