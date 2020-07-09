'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gym'
  },
  name: {
    type: String,
    required: true
  },
  grouping: {
    type: String,
    required: true
  },
  photo: {
    type: Buffer
  },
  video: {
    type: Buffer
  }
})

module.exports = mongoose.model('Exercises', schema);

/*
{
  "gym": "",
  "name": "",
  "grouping": ""
}
*/