'use strict';

//Setting up global imports / variables
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3030;
let data = require('./data/weather.json');

//Setup the Forecast class
class Forecast {
  constructor(description, date) {
    this.description= description;
    this.date = date;
  }
}

//Set up the app and the things that uses
const app = express();
app.use(cors());

app.get('/', (request, response) => {

  response.send(data);

});

app.get('/weather', (request, response) => {

  //Figure out how to parse info from request
  //params that jacob used in class never worked. request.query is the correct term to use
  let lat = request.query.lat;
  let long = request.query.lon;
  let cityName = request.query.searchQuery;
  let infoIn = [lat, long, cityName];

  //use find() to filter data somehow
  //Alright, TA said the weather data set is not good, just going to filter it because it is only data for one city
  
  //look at the data section of the weather.json
  let infoTemp = data.data;
  let infoOut = [];
  //Going through each day add the relevant info to a forecast object
  for(let day of infoTemp){
    infoOut.push(new Forecast(day.weather.description, day.datetime));
  }

  //send it back out
  response.json(infoOut);
});

app.listen('3030', () => console.log("The server is running"));