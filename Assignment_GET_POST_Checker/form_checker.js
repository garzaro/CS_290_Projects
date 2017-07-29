var express = require('express');

var app = express(); 
var handlebars = require('express-handlebars').create({defaultLayout:'template'});
var bodyParser = require('body-parser');

app.use(bodyParserurlencoded({extended: false}));
app.use(bodyParser.json()); 

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 62521); 

app.get('/check', function(req, res){
	var qParams = []; 
	for (var p in req.query){
		qParams.push({'name':p,'value':req.query[p]})
	}
	var context = { title: "GET Request Received"};
	context.dataList = qParams; 

	var h = document.getElementById("myHead");
	var t = document.createTextNode("GET Request Received"); 
	h.appendChild(t); 

	res.render('check', context); 
});

app.post('/check', function(req, res){

	var qParams = []; 

	for (var p in req.body){
		qParams.push({'name':p, 'value':req.body[p]})
	}
	console.log(qParams);
	console.log(req.body); 
	var context = { title: "POST Request Received"}
	context.dataList = qParams; 
	res.render('check', context);
});

app.use(funciton(req,res){
	res.status(404); 
	res.render('404'):
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500); 
	res.render('500');
});

