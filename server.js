'use strict';

//Setting up global environment
const express = require('express');
const cors = require('cors');

//Bringing in the handlers
const movieHandler = require('./lib/movieHandler.js');
const weatherHandler = require('./lib/weatherHandler.js');

//I don't really know why this is here
require('dotenv').config();

//Setting up variables and data
const PORT = process.env.PORT || 3030;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
let data = require('./data/weather.json');

//Set up the app and the things that uses
const app = express();
app.use(cors());

//Doing Movies First, move declarations later up somewhere
app.get('/movies', movieHandler);
app.get('/weather', weatherHandler);

//A catch-all for requests
app.get('/', (request, response) => {
  response.send('You landed on the root');
});

//Proof of life check
app.get('/helloworld', (request, response) => {
  response.send('Hello World!');
});


app.listen('3030', () => console.log("The server is running"));