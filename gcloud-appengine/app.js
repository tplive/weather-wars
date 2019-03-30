const express = require('express');

const app = express();

function getTemperature(searchTerm) {
    // TODO Implement actual function
    // Will look up temperature at "searchTerm" and return the
    // forecast temperature for that particular site
    return Math.random() * 60 * (Math.random() < 0.5 ? -1 : 1);
}

function diffTwoTemperatures(a, b) {
    if (a >= b ) {
        return a-b;
    }else {
        return b-a;
    }
}

app.get('/', function (req, res) {
    const a = getTemperature("Sometown");
    const b = getTemperature("Otherplace");
    const diff = diffTwoTemperatures(a, b);

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
