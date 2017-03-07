//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    texInput: null,
    expressInfo: {
      "result": {
        "number": "426953631387",
        "type": "zto",
        "list": [
          {
            "time": "2017-02-12 13:07:08",
            "status": "[合肥市] 快件已在 合肥柏堰 签收 签收照片,感谢您使用中通快递，期待再次为您服务!"
          },
          {
            "time": "2017-02-12 09:17:37",
            "status": "[合肥市] 合肥柏堰 的 汤国全[13955190063] 正在派件"
          },
          {
            "time": "2017-02-12 08:26:12",
            "status": "[合肥市] 快件已经到达 合肥柏堰"
          },
          {
            "time": "2017-02-11 18:42:17",
            "status": "[合肥市] 快件离开 合肥中转部 已发往 合肥柏堰"
          },
          {
            "time": "2017-02-11 18:36:45",
            "status": "[合肥市] 快件已经到达 合肥中转部"
          },
          {
            "time": "2017-02-10 20:02:05",
            "status": "[揭阳市] 快件离开 潮汕中心 已发往 合肥中转部"
          },
          {
            "time": "2017-02-10 03:17:19",
            "status": "[揭阳市] 快件已经到达 潮汕中心"
          },
          {
            "time": "2017-02-10 00:29:04",
            "status": "[汕头市] 快件离开 汕头 已发往 合肥"
          },
          {
            "time": "2017-02-09 23:49:50",
            "status": "[汕头市] 汕头 的 家家乐[13715989090] 已收件"
          }
        ],
        "deliverystatus": "3",
        "issign": "1"
      }
    },
  },

  // 426953631387
  // 查询事件处理
  btnClick: function () {

    // console.log(this.data.texInput);

    var thispage = this;

    app.getExpressInfo(this.data.texInput, function (data) {

      cosole.log(data);

      this.setData({ expressInfo: data.result });

    })
  },


  // 输入框处理
  inputText: function (e) {
    console.log(e);

    this.setData({ texInput: e.detail.value })
  },


  onLoad: function () {
    // console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

})
