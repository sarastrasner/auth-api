'use strict';

const mongoose = require('mongoose');

const cfSchema = mongoose.Schema({
  title: { type: String, required: false },
  id: { type: String, required: false },
  description: { type: String, required: false },
  over: { type: Boolean, required: false },
  win: { type: Boolean, required: false },
  answers: { type: Array, required: false , Schema: [String]},
});

const cfModel = mongoose.model('code-followers', cfSchema);

module.exports = cfModel;

