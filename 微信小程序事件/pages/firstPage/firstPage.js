//index.js


var param = {

data: {
	motto:'hello world',
	userInfo:{}
},

// 事件处理函数
view1Click:function(e){
   console.log("view1Click",e);
},

view2Click:function(e){
    console.log("view2Click",e);
},

view3Click:function(e){
   console.log("view3Click",e);   
},


};


Page(param);