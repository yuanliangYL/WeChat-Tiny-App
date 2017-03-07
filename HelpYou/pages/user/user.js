//获取应用实例
var app = getApp()
Page({
  data: {
    userImg: null,
    userName: null,
    userCount: "marvelous-YL",
    isvip: "VIP未开通",
    caches: "100",
    aboutUs: [
      { title: "邮箱", detail: "yuanliangios@163.com" },
      { title: "官网", detail: "www.dayuanyun.cn" },
      { title: "公众号", detail: "安徽大愿网络科技" },
      { title: "客服微信", detail: "dayuanyun" },
      { title: "联系电话", detail: "0551-34564345" },
    ]
  },


  // 加载页面获取微信个人信息
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

    var userInfo = app.globalData.userInfo;
    this.setData({
      userImg: userInfo.avatarUrl,
      userName: userInfo.nickName,
    })

  },


  // 微信支付函数
  toBuy: function (e) {
    console.log("待支付");
  },

  // 清除缓存
  clearCaches: function () {
    // 模拟数据
    this.setData({
      caches: 0
    });

    wx.clearStorage();
  },



  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },

})

