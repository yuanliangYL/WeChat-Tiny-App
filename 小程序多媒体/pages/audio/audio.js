// pages/audio/audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    action:null,  //该参数是一个对象
  },


// 播放
  audioPlay: function () {
    // this.audioCtx.play()
    this.setData({
      action:{
        method:"play"
        }
      })
  },

// 暂停
  audioPause: function () {
    // this.audioCtx.pause()
    this.setData({
      action:{
        method:"pause"
        }
      })
  },

  // 调整播放速度
audioPlaybackRateSpeedUp: function () {
    this.setData({
      action:{
        method:"setPlaybackRate",
        data:4
        }
      })
  },


audioPlaybackRateNormal: function () {
    this.setData({
      action:{
         method:"setPlaybackRate",
        data:1
        }
      })
  },


audioPlaybackRateDown: function () {
  console.log("audioPlaybackRateDown")
   this.setData({
      action:{
         method:"setPlaybackRate",
         data:0.1
        }
      })
  },

  // 选择时段
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})