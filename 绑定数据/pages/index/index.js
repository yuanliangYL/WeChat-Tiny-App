//index.js

Page({
  data: {
	   message:"微信小程序",
		 array:['a','b','c','d','e',1,2,3,'hello'],
		 view:'APP',
		 yuanliang : {name:'yuanliang',age:26},
		 lisi : {name:'lisi',age:18},
         count: 1
  },



  add: function(e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})