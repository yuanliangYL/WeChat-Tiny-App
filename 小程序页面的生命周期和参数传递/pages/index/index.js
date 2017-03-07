Page({
  data: {
    // text:"这是一个页面"
  },



  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log("---index page onLoad---");
  },


  onReady: function () {
    // 页面渲染完成
    console.log("---index page onReady---");
  },


  onShow: function () {
    // 页面显示
    console.log("---index page onShow---");
  },


  onHide: function () {
    // 页面隐藏
    console.log("---index page onHide---");
  },



  onUnload: function () {
    // 页面关闭
    console.log("---index page onUnload---");
  },



  // navigateTo,tab页不能跳进。坑太多。。。
  itemClick: function (e) {

    console.log(111111);

    wx.navigateTo({
      url:"../logToNavi/logToNavi?id=1"
    })

// 将当前的页面替换成新的页面
    // wx.redirectTo({
    //   url: "../logToNavi/logToNavi"
    // })



  },

  tapName: function (e) {

    console.log(e);

  }


})
