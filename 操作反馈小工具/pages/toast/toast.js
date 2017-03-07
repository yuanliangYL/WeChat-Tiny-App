// pages/toast/toast.js
Page({
  data: {
    hidden: true,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  click: function (e) {
    this.setData({ hidden: false })
  },

  toastChage: function (e) {
    this.setData({ hidden: true });
    console.log(e);
    
  },

})