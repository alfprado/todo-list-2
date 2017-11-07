var express 	= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	PORT 		= process.env.PORT || 3000;

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
	res.send("HI ROOT!");
});


app.use('/api/todos', todoRoutes);

app.listen(PORT, function(){
	console.log("APP is running on port " + process.env.PORT);
});