const https = require('https');
const xmlToJSON = require('xml-js');

module.exports = {
    xmlToJson: function(lat, lon)    {
        // Supplu lat and lon to get weather in JSON format for that location from the YR-API.
        https.get('https://api.met.no/weatherapi/locationforecast/1.9/?lat=' + lat + '&lon=' + lon, (resp) => {
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', () => {

                return xmlToJSON.xml2json(data, {compact: true, spaces: 4});
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
}