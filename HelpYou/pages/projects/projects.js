//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487775499248&di=8a4a51b6824a0a5cb3fe508d84d16b2f&imgtype=0&src=http%3A%2F%2Fwww.3987.com%2Fuploadfile%2F2017%2F0109%2F20170109014112556.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488370312&di=0d2341cae756c931d54813169c624ea7&imgtype=jpg&er=1&src=http%3A%2F%2Fstorage.ecmaitian.com%2Fuploadfile%2F2016%2F0922%2F20160922092310827.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487775593669&di=ace1b08b632e6f31ff8c324e4fd39f5e&imgtype=0&src=http%3A%2F%2Fwww.k0631.com%2FupLoad%2Fimage%2F20160922%2F14745161291753080.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1500,
    contentItems: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489115997&di=2561ac20a7ba31d5368d32b87858a2e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20151218%2Fqingchaozhengfangxingtongyin_5613238.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488521231049&di=73315589a394f9ba0a021f520ebd1e3a&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172456_KSYQL.jpeg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488521298895&di=8243216bf95b98aff3f6e0f932ec2eaf&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F15%2F69%2F16156908-a12a546c7677f06c7daba82ec50fde70.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488521315710&di=5a630313dc25625057ea32893ceb8bb9&imgtype=0&src=http%3A%2F%2Fimg008.hc360.cn%2Fm1%2FM00%2F8C%2FC2%2FwKhQcFQ1xRmEEBucAAAAAIMh550894.jpg"
    ],
    listviewItem: [, , ,],
    modalhidden: true,
    isVip: true,
  },


  // 点击查看项目详情
  checkdetail: function (e) {

    // 判断是够为VIP用户
    if (this.data.isVip) {


      wx.navigateTo({
        url: '../projects/projectDetail',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    } else {


      // 非VIP客户，提示充值
      this.setData({ modalhidden: false })
    }

  },

  modalcancel: function (e) {
    this.setData({ modalhidden: true })
  },


  modalfirm: function (e) {
    console.log(e);
    this.setData({ modalhidden: true })
  },


})
