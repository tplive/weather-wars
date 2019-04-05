const express = require('express');
const weatherApi = require('./weatherapi');
const geocode = require('./geocodeapi');


// Dotenv parses the contents of the .env file from the working folder into environment variables.
// Make your own .env file as it shouldn't be commited to git.
require('dotenv').config();

const app = express();

app.get('/getGeoLocation', function (req, res) {
  geocode.geocode(req.query.address)
    .then( loc => {
      res.send(loc);
    })
    .catch( (error) => {
      console.log(error);
      res.send(error);
    });
  
});

app.get('/getTemperatureAt', function (request, response) {
  
  weatherApi.getTemperature(request.query.lat, request.query.lon)
    .then( temp => {
      console.log("Temp now is: " + temp + "°C");
      response.send({ "temp": temp});
    })
    .catch( (error) => {
      console.log(error);
      response.send(error);
    });
});

app.put('/', function (req, res) {
    console.log("HTTP Put Request");
    res.send("HTTP PUT Request");
  });
  
  app.post('/', function (req, res) {
    console.log("HTTP POST Request");
    res.send("HTTP POST Request");  
  });
  
  app.delete('/', function (req, res) {
    console.log("HTTP DELETE Request");
    res.send("HTTP DELETE Request");
  });

//start server on the port defined in environment variable OR port 8080
const PORT = process.env.PORT || 8080;

var server = app.listen(PORT, function () {
    var host = server.address().address;

    console.log("Server listening at http://%s:%s", host, PORT);
});
