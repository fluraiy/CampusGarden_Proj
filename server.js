var express = require('express'); //loading package express
var httpModule = require('http'); //loading package http

var app = express(); //create an express app (to hanle html stuff)
var http = httpModule.Server(app);

app.use(express.static('assets')); //any assets will be found in the folder assets (pics and such)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log('got a GET request');
}); //get request to / is given to responder function

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
  console.log('got a GET request');
}); //get request to /about is given to responder function

app.get('/volunteer', (req, res) => {
  res.sendFile(__dirname + '/volunteer.html');
  console.log('got a GET request');
}); //get request to /volunteer is given to responder function

app.get('/location', (req, res) => {
  res.sendFile(__dirname + '/location.html');
  console.log('got a GET request');
}); //get request to /location is given to responder function

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
  console.log('got a GET request');
}); //get request to /volunteer is given to responder function

function portListener(){
  console.log('Listening on localhost ' + port);
};

var port = process.env.PORT || 3000;
http.listen(port, portListener);
