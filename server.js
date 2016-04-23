// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var admin = require('./admins.js')
var table = require('./table.js')
var waiting = require('./waiting.js')

// Creates an instance of "express server"
var app = express();
var PORT = 3000;

// app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

// Incorporate body-parser middleware
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json



app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname + '/tables.html'));
})

app.get('/reservations', function(req, res){
	res.sendFile(path.join(__dirname + '/reservation.html'));
})

app.post('/reservations', function(req, res){


		console.log(req.body)
		table.push(req.body)
		console.log(table)

	
})

app.get('/api/reservations', function(req, res){
	res.json(table)
})

app.get('/admin', function(req, res){
	res.sendFile(path.join(__dirname + '/admin.html'));
})

app.get('/api/admin', function(req, res){

	// for (var i = 0; i < admin.length; i++) {	
	// 		res.send(admin[i]);
	// }
	// res.send(admin);
	res.json(admin);

});


// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
})

// app.use('/public', express.static(path.join(__dirname + '/public')));

