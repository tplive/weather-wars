const express = require('express');
const weatherApi = require('./weatherapi');
const request = require('request-promise');

// Dotenv parses the contents of the .env file from the working folder.
// Make your own .env file as it shouldn't be commited to git.

require('dotenv').config();

const app = express();

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
  }

  try {
    var result = await request(options);
    console.log(result.results[0].geometry.location); // This returns the location data
    var lat = result.results[0].geometry.location.lat; // This is set to the location data parts
    var lng = result.results[0].geometry.location.lng;

    // This should return the data as an object?
    return {
      lat: lat,
      lng: lng
    }
  } catch (err) {
      console.error(err);

  }
  


}


app.get('/', function (req, res) {
    const a = weatherApi.getTemperature("Sometown");
    const b = weatherApi.getTemperature("Otherplace");
    const diff = weatherApi.diffTwoTemperatures(a, b);
    
    const location = geocodeThis("Mathias Lunds gate, Stjørdal"); // Returned as [object Promise] - promising, I guess.. :P
    
    sendThis = "Temperature at site A was " + a + "\nTemperature at site B was " + b + "\nDifference is " + diff;
    sendThis += "\nAnd the location is: " + location;
    res.send(sendThis);
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
