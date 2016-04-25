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

// Enabling Express to serve static files. (Allows our JavaScript files to be used)
app.use('/public', express.static(__dirname + '/public'));

// Incorporate body-parser middleware
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname + '/tables.html'));
});

app.get('/reservations', function(req, res){
	res.sendFile(path.join(__dirname + '/reservation.html'));
});

app.get('/api/tables', function(req, res){
	res.json(table)
});

// app.post('/api/tables', function(req, res){
// 	table.push(req.body)
// });

app.post('/api/tables', function(req, res){
	if (table.length < 10) {
		table.push(req.body)
		res.end();
	} else {
		waiting.push(req.body)
		res.end();
	};
});

// Trying something...
app.post('/api/update', function(req, res){
	table = [];
	table = req.body;
})

app.get('/api/waiting', function(req, res){
	res.json(waiting)
});


app.get('/admin', function(req, res){
	res.sendFile(path.join(__dirname + '/admin.html'));
});

app.get('/api/admin', function(req, res){
	res.json(admin);
});


// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});