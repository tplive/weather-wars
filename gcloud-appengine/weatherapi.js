const yrweatherdata = require('./getweatherfromyr')

/**
 * 
 * 
 * 3 functions taking lat and lon, returning a Promise with Temperature, Rainfall(precipitation) and Windspeed.
 * 
 * @param {*} lat = latitude
 * @param {*} lon = longitude
 * 
 * example usage:
 * getTemperature(60.245706, 5.720512).then((result, err) => {
      if (!err)   {
        console.log(result);
      } else {
        console.log(err);
      }

   });

   getRain(60.245706, 5.720512).then(console.log);
   getWindSpeed(60.245706, 5.720512).then(console.log);
 * 
 */


module.exports =  {
    // Temperature
    getTemperature: async function(lat, lon) {
        // Returns the temperature NOW in celcius(as a Promise)
        const temp = await yrweatherdata.asJSON(lat, lon);
        return JSON.parse(temp).weatherdata.product.time[0].location.temperature._attributes.value;    
    },

    diffTwoTemperatures: function(a, b) {
        // Compare two double numbers, and return the difference
        return Math.abs(a-b);
    },

    // Rain(precipitation)
    getRain: async function(lat, lon) {
        // Returns the rainfall(precipitation) NOW in mm(as a Promise)
        const rain = await yrweatherdata.asJSON(lat, lon);
        return JSON.parse(rain).weatherdata.product.time[1].location.precipitation._attributes.value;
    },
    // Windspeed
    getWindSpeed: async function(lat, lon)    {
        // Returns the windspeed NOW in Meters Per Second(MPS)(as a Promise)
        const weather = await yrweatherdata.asJSON(lat, lon);
        return JSON.parse(weather).weatherdata.product.time[0].location.windSpeed._attributes.mps;
    }
}
