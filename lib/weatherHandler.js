'use strict';

//Dependancies
const makeRequest = require('./makeRequest.js');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

//The asynchronous function itself, went with await because there is only one request
async function weatherHandler(request, response) {
  //Get relevant data from request
  let lat = request.query.lat;
  let lon = request.query.lon;

  //Get info from further API
  let url = `http://api.weatherbit.io/v2.0/current?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
  console.log(url);
  let results = await makeRequest(url);

  console.log('Weather data received')
  console.log(results);

  //Package and return data
  let weatherInfo = results.data.map(day => new Forecast(day));
  response.json(infoOut);
}

//Constructor to make Forecast objects which the client application can process easier
class Forecast {
  constructor(dayInfo) {
    this.description= dayInfo.weather.description;
    this.date = dayInfo.datetime;
  }
}

//Match this in the class above
// {
//   "description": "Low of 17.1, high of 23.6 with broken clouds",
//   "date": "2021-03-31"
// }

// export name, match this
module.exports = weatherHandler;