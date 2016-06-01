// DOM2 监听事件
    var EventUtil={
				addHanlder:function(element,type,handle){//添加监听事件
					if(element.addEventListener){
					element.addEventListener(type,handle,false);}else if(element.attachEvent){
						element.attachEvent("on"+type,handle);
					}else{
						element["on"+type]=handle;
					}
				},
				removeHandler:function(element,type,handle){//移除监听事件
					if(element.removeEventListener){
					element.removeEventListener(type,handle,false);
					}else if(element.detachEvent){
						element.detachEvent("on"+type,handle);
					}else{
						element["on"+type]=null;
					}
				},
				getEvent:function(event){//取到事件对象
				return event ?event:window.event;//当值不是空或者undefined时直接使用event可以进行
				},
				getTarget:function(event){//拿到事件源
					return event.target||event.srcElement;
				},
				stopPropagation:function(event){//关闭冒泡
					if(event.stopPropagation){
						event.stopPropagation();
					}else{
						event.cancelBubble=true;
					}
				}
			}
// var  v1=document.getElementsByClassName("head-right-a")[0];
//  v1.onclick=function(){
//  	console.log("sa1110000")
//  }
