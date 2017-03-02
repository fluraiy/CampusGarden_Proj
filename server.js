var express = require('express'); //loading package express
var httpModule = require('http'); //loading package http

var app = express(); //create an express app (to hanle html stuff)
var http = httpModule.Server(app);

app.use(express.static('assets')); //any assets will be found in the folder assets (pics and such)

app.configure(function(){
    app.use(express.static(__dirname + '/img'));
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log('got a GET request');
}); //get request to / is given to responder function

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log('got a GET request');
});

app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/about.html');
  console.log('got a GET request');
});

app.get('/volunteer.html', (req, res) => {
  res.sendFile(__dirname + '/volunteer.html');
  console.log('got a GET request');
});

app.get('/stats.html', (req, res) => {
  res.sendFile(__dirname + '/stats.html');
  console.log('got a GET request');
});

app.get('/location.html', (req, res) => {
  res.sendFile(__dirname + '/location.html');
  console.log('got a GET request');
});

app.get('/contact.html', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
  console.log('got a GET request');
});

app.get('/img/:img_path', (req, res) => {
  res.sendFile(__dirname + '/img/:img_path');
  console.log('got a GET request for img');
});

function portListener(){
  console.log('Listening on localhost ' + port);
};

var port = process.env.PORT || 3000;
http.listen(port, portListener);
