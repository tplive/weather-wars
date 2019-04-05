const request = require('request-promise');
require('dotenv').config();
// This is set in the .env file
const API_KEY = process.env.GOOGLE_API_KEY;
/**
 * 
 * geocodeapi takes an address and returns a Promise with lat and lon coordinates.
 * 
 * Example usage: geocode("Drammensveien 1, Oslo").then(console.log); Prints the JSON to console.
 * 
 * @param {*} address = address
 */
module.exports = {
    geocode: async function(address) {

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
}