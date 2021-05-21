'use strict';

//Used from the example in class taken from Peyton Mayder's project
//Seriously I had no idea how to tackle these error messages
//https://github.com/peymade/city-explorer-api
function errorHandler(error, response) {
  response.status('500').send('Internal Server Error');
}

module.exports = errorHandler;