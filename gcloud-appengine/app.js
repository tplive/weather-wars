const express = require('express');
const crypto = require('crypto');

const app = express();

const PROJECT = process.env.GOOGLE_CLOUD_PROJECT || "weather-wars";

const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();

function insertVisit(visit) {
    return datastore.save({
        key: datastore.key('visit'),
        data: visit,
    });
}

function getVisits() {
    const query = datastore
        .createQuery('visit')
        .order('timestamp', {descending: true})
        .limit(10);
    return datastore.runQuery(query);
}

app.get('/', async (req, res, next) => {
    // Create a visit record to be stored in the database
    const visit = {
        timestamp: new Date(),
        // Store a hash of the visitor's IP address
        userIp: crypto
            .createHash('sha256')
            .update(req.ip)
            .digest('hex')
            .substr(0,7),
    };

    try {
        await insertVisit(visit);
        const results = await getVisits();
        const entities = results[0];
        const visits = entities.map(
            entity => `Time: ${entity.timestamp}, AddrHash: ${entity.userIp}`
        );
        res
            .status(200)
            .set('Content-Type', 'text/plain')
            .send(`Last 10 visits:\n${visits.join('\n')}`)
            .end();
    } catch (error) {
        next(error);
    }
    
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
