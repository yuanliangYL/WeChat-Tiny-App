
var app = getApp();
var count = 0;
var param = {

data :{
  clickMsg : '显示点击的内容'
},


// e就是事件对象，包含很多内容，比如水杯点击了，什么时间被点击了，在什么位置（x,y)被点击了
   clickMe : function(e) {
      console.log(e);
      count++;

// 如何区分点击的是哪一个View
//通过id可以区分点击的对象
      var id = e.currentTarget.id;

//  吧view0上点击的显示出来
      param.data.clickMsg = '显示点击内容' + id + '被点击次数' + count;

// 取得dta-XXX的值 控件wxml里面可以携带的私有数据
     console.log(e.currentTarget.dataset);


//    setData重新刷新界面
      this.setData(param.data);

   }
}


Page(param);
