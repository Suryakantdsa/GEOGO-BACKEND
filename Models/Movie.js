const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trailerLink: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  posterImg: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  cast: {
    type: [String],
    // required: true,
  },
  director:{
    type: String,
    required: true,
  },
  writer:{
    type: String,
    required: true,
  }
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;