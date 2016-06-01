require.config({
	baseUrl:"js/lib",
	paths:{		
		"comms":"comms",
		"jquery":"jquery",		
		"myJs":"myJs"	

	}
})
require(["comms","jquery","myJs"],function(Sa,$,Sb){
   // head-right
   $.ajax({
		url:"json/1.json",
		type:"get",
		success:function(data){			
			var right=data["right"];
			for(var prop in right){
				 var a=$("<a class='head-right-a'></a>").text(right[prop]).attr("href","#")				 
	             var li =$("<li class='head-right-li'></li>").append(a)	                
	             var ul =$("<ur  class='head-right-ul'></ul>").append(li)
	             $(".head-right").append(ul);
	             if(a.html()=="免费注册"){
             	 a.css("color","#C81623")
                  }             
			}			
			$(".head-right-a:gt(6)").css("color","#666666")	
			$(".head-right-li:gt(5)").add(".head-right-li:eq(3)").mouseover(function(e){
				$(this).css("background-color","white")
				
			 }).mouseout(function(e){
				$(this).css("background-color","#F1F1F1")
			})
			//二级
       }
	})	
//	 创建不出来二级     
   $.ajax({ 	
   	url:"json/2.json",
   	type:"get",
   	success:function(data){  		
// 		var div3=$("<div class='head-right-li-div3'></div>").text("")    	  
// 		    $(".head-right-li:eq(3)").append(div3)
// 		var div6=$("<div class='head-right-li-div3'></div>").text("")    	  
// 		    $(".head-right-li:eq(6)").append(div6)
// 		var div7=$("<div class='head-right-li-div3'></div>").text("")    	  
// 		    $(".head-right-li:eq(7)").append(div7)
// 		var div8=$("<div class='head-right-li-div3'></div>").text("")    	  
// 		    $(".head-right-li:eq(8)").append(div8)
// 		var div9=$("<div class='head-right-li-div3'></div>").text("")    	  
// 		    $(".head-right-li:eq(9)").append(div9)  		
   	}
   });
   console.log("asda");
   $.ajax({
   	url:"json/3.json",
   	type:"get",
   	success:function(data){
   		
   	   for(var prop in data["name1"]){
   	   	 var data1=data["name1"][prop];
   	   	 var a=$("<a class='nva-ul-a'></a>").text(data1).attr("href","#");
   	   	 var li=$("<li class='nva-ul-li'></li>").append(a);
   	   	 var ul=$("<ul class='nva-ul-ul'></ul>").append(li);  	   	 
   	   	    $(".nva-ul").append(ul)
   	     }
   	 }
   });  
	$(document).ready(function(){
		
	})
})