//index.js

var percent = 10;
var timerId;
var param = {

   data:{
	  text:"这里是绑定的数据内容...",
	  isShow:true,
	  array:[
		  111,222,333,444,555
	  ]
   },

	// e表示点击对象事件event
	doLoading : function(e) {
		console.log(e);
	},   

    changtext :function(e){
		console.log("buttom has been clicked");

		if(this.data.text==="这里是绑定的数据内容..."){
             this.setData({text:"this is new content!"})
		}else{
			 this.setData({text:"这里是绑定的数据内容..."})
		}
             this.setData({isShow:true})
    },


    showButton :function(e) {
            this.setData({isShow:!this.data.isShow})
	
    },

    deletearr: function(e){
		var oldArr = this.data.array;
        oldArr.shift();
		this.setData({array:oldArr})
	}


};


Page(param);