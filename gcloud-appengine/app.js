const express = require('express');
const weatherApi = require('./weatherapi');
const request = require('request-promise');

// Dotenv parses the contents of the .env file from the working folder into environment variables.
// Make your own .env file as it shouldn't be commited to git.
require('dotenv').config();

const app = express();

// This is set in the .env file
const API_KEY = process.env.GOOGLE_API_KEY;

async function geocodeThis(address) {

  var url = "https://maps.googleapis.com/maps/api/geocode/json";
  var options = {
    uri: url,
    method: "GET",
    qs: {
      address: address,
      key: API_KEY
    },
    json: true
  };
  
  var result = await request(options);
  return result.results[0].geometry.location;
    
}


app.get('/getGeoLocation', function (req, res) {
  geocodeThis(req.query.address)
    .then( loc => {
      res.send(loc);
    })
    .catch( (error) => {
      console.log(error);
      res.send("Error: " + error);
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
