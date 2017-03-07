Page({
  data: {

    aritcalId: null,
    title:null,
  },

  onLoad: function (options) {

    // 通过options获得导航传递的数据
    console.log(options)

this.setData({aritcalId:options.id,title:options.title})
  },


  onReady: function () {
    // 页面渲染完成
    console.log("---logs page onReady---");

  },
  onShow: function () {
    // 页面显示
    console.log("---logs page onShow---");
  },
  onHide: function () {
    // 页面隐藏
    console.log("---logs page onHide---");
  },
  onUnload: function () {
    // 页面关闭
    console.log("---logs page onUnload---");
  }
})
