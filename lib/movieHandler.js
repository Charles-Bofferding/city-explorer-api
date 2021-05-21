'use strict';

//Dependancies
const makeRequest = require('./makeRequest.js');
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

//The asynchronous function itself, went with await because there is only one request
async function movieHandler(request, response) {

  //Get relevant data from request
  const queryString = request.query.search;

  //Get info from further API
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${queryString}`
  let results = await makeRequest(url);

  //Package and return data
  let movies = results.results.map(movie => new MovieObj(movie));
  response.json(movies);
}

//Constructor to make movie objects which the client application can process easier
function MovieObj(movie) {

  this.title = movie.title;
  this.overview = movie.overview;
  this.average_votes = movie.vote_average;
  this.total_votes = movie.vote_count;
  this.image_url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  this.popularity = movie.popularity;
  this.released_on = movie.release_date;

}

//Match this in the class above
// {
//   "title": "Sleepless in Seattle",
//   "overview": "A young boy who tries to set his dad up on a date after the death of his mother. He calls into a radio station to talk about his dad’s loneliness which soon leads the dad into meeting a Journalist Annie who flies to Seattle to write a story about the boy and his dad. Yet Annie ends up with more than just a story in this popular romantic comedy.",
//   "average_votes": "6.60",
//   "total_votes": "881",
//   "image_url": "https://image.tmdb.org/t/p/w500/afkYP15OeUOD0tFEmj6VvejuOcz.jpg",
//   "popularity": "8.2340",
//   "released_on": "1993-06-24"
// }

// export name, match this
module.exports = movieHandler;