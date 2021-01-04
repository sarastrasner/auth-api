'use strict';

const mongoose = require('mongoose');

const cfSchema = mongoose.Schema({
  title: { type: String, required: true },
  id: { type: String, required: true },
  description: { type: String, required: true },
  over: { type: Boolean, required: true },
  win: { type: Boolean, required: true },
  answers: { type: Boolean, required: true },
});

const cfModel = mongoose.model('code-followers', cfSchema);

module.exports = cfModel;

