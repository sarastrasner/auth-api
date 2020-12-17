'use strict';

const mongoose = require('mongoose');

const jokeSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  punchline: { type: String}
});

const jokeModel = mongoose.model('joke', jokeSchema);

module.exports = jokeModel;
