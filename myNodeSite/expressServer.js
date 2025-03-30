var express = require('express');
var path = require('path');
var app = express();
var port = 1337;

// Set path to public directory
var dir = __dirname + '/public/';

// Serve static files from directories
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));
app.use(express.static('public/data'));

// Route handlers
app.get('/', function(request, response) {
    response.sendFile(dir + 'index.html');
});

app.get('/index', function(request, response) {
    response.sendFile(dir + 'index.html');
});

app.get('/guide', function(request, response) {
    response.sendFile(dir + 'guide.html');
});

app.get('/shop', function(request, response) {
    response.sendFile(dir + 'shop.html');
});

// 404 handler - must be last route
app.use('/*', function(request, response){
    response.sendFile(dir + '404.html');
});

// Start server
app.listen(port, function(){
    console.log("Listening... Go to http://localhost:" + port);
});