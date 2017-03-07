//index.js
//获取应用实例
var imageUtil = require('../../utils/util.js');

var app = getApp()

Page({
  hidden:true,
  data: {
    backgroundImg:null,
    backImgArr:null,
    netData:null,

    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 800
  },

  onLoad: function () {

  },

  // swiper变化更改图片背景
  bindchange: function (e) {
    var index = e.detail.current;

    this.setData({
      backgroundImg: this.data.backImgArr[index],
    })
    console.log(e.detail.current);

  },


// netdata require 网络请求
  onLoad: function (e) {
    var that = this;

    wx.request({
      url: 'https://web.ahcanxiang.com/index.php?s=/api/api/getdetail', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
       that.setData({
          hidden: false,
          netData:res.data.data,
          backgroundImg:res.data.back_img[0],
          backImgArr:res.data.back_img,
           })
        console.log(res.data.data,res.data.back_img)
      }
    })
    

  }



})
