require.config({
	baseUrl:"js/lib",
	paths:{
		"myJs":"myJs",	
		"comms":"comms",
		"jquery":"jquery"
	}
})
require(["myJs","comms","jquery"],function(a,b,$){
   $.ajax({
		url:"nva.json",
		type:"get",
		success:function(data){
			for(var prop in data){
				console.log(data[prop])
			}
		}
	})
	  
})