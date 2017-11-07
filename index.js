var express = require('express'),
	app		= express(),
	PORT 	= process.env.PORT || 3000;

app.get('/', function(req, res){
	res.send("HI!");
});

app.listen(PORT, function(){
	console.log("APP is running on port " + process.env.PORT);
});