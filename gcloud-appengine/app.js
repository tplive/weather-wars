const express = require('express');
const weatherApi = require('./weatherapi');

const app = express();



app.get('/', function (req, res) {
    const a = weatherApi.getTemperature("Sometown");
    const b = weatherApi.getTemperature("Otherplace");
    const diff = weatherApi.diffTwoTemperatures(a, b);

    res.send("Temperature at site A was " + a + "\nTemperature at site B was " + b + "\nDifference is " + diff);
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
