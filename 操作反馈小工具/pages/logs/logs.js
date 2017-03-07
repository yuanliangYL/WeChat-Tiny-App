//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    modalhidden:true,
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },

  click: function (e) {
    this.setData({ modalhidden: false })
  },

modalcancel:function (e) {
    this.setData({ modalhidden: true })
  },


modalfirm:function (e) {
console.log(e);

  },


})
