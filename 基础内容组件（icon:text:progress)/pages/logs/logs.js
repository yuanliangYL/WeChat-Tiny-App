//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    text:"这是文章内容...\n第二行内容"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
