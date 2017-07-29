var express = require('express');

var app = express(); 
var handlebars = require('express-handlebars').create({defaultLayout:'template'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 62521); 

app.get('/', function(req, res){
	var qParams = []; 
	for (var p in req.query){
		qParams.push({'name':p,'value':req.query[p]})
	}
	var context = {};
	context.dataList = qParams; 
	res.render('check', context); 
});

app.post('/showpost', function(req, res){

	var qParams = []; 

	for (var p in req.body){
		qParams.push({'name':p, 'value':req.body[p]})
	}
	console.log(qParams);
	console.log(req.body); 
	var context = {}
	context.dataList = qParams; 
	res.render('check', context);
});

app.use(function(req,res){
	res.status(404); 
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500); 
	res.render('500');
});

