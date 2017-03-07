//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    scrollTop: 0,
    scrollToView: "",
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },



  // 滑动到底部时调用，可与upper-threshold连用设置调用实际
  scrollToUpper: function (e) {
    console.log(e);
  },

  bindscrolltolower: function (e) {
    console.log(e);
  },

  // 滚动时随即滴啊用
  bindscroll: function (e) {
    console.log(e);
  },


  // scroll-top滚动动态使用
  click: function (e) {
    console.log("click.....");
    // this.setData({ scrollTop: this.data.scrollTop + 20 })
    this.setData({ scrollToView: "blue" })
  }

})
