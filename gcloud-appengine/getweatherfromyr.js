const convert = require('xml-js');
const request = require('request');

/**
 * 
 * getWeatherAsJSON takes lat and lon, returns a Promise with weather in JSON form.
 * 
 * Example usage: getWeatherAsJSON(60.1, 9.58).then(console.log); Prints the JSON to console.
 * 
 * @param {*} lat = latitude
 * @param {*} lon = longitude
 */

async function asJSON(lat, lon)    {
    // Supply lat and lon to get weather in JSON format for that location from the YR-API.
    const url = 'https://api.met.no/weatherapi/locationforecast/1.9/?lat=' + lat + '&lon=' + lon;

    function getXML(url)    {
        return new Promise(function(resolve, reject){
            request.get(url, (err, res, body) => {
                if(!err)    {
                    resolve(body);
                } else {
                    reject(console.log(err));
                }
            });
        });
    };

    return await getXML(url).then(xml => convert.xml2json(xml, {compact: true, spaces: 4}));
}


