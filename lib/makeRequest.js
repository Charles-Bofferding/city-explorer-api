'use strict';

//Only place needing axios
const axios = require('axios');
const errorHandler = require('./errorHandler');

//asynchronous function
async function makeRequest(url) {

  //Try to make axios API call
  try {
    let result = axios.get(url);
    return result.data;

  //Error magic
  } catch (e) {
    handleError(e);
  }
}

module.exports = makeRequest;