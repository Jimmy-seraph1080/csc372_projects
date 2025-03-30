// allows us to express modules
var express = require('express');
// this is how we'll access all of the functionality of the module
var app = express();
// port number
var port = 1337;

// create path to public directory
var dir = __dirname + '/public/';

// serve static files from public directories
// look for static file to be served inside public, public/css, public/images, public/js, public/data directories
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));
app.use(express.static('public/data'));

// get the respecyive route
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

// add  a wildcard for any route that is not defined and respond by serving 404 HTML file
app.use('/*', function(request, response){
    response.sendFile(dir + '404.html');
});

// start server
app.listen(port, function(){
    console.log("Listening... Go to http://localhost:" + port);
});