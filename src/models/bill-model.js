'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gym'
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  paid: {
    type: Boolean
  }
})

module.exports = mongoose.model('Bill', schema);

/*
{
  "gym": "",
  "description":"",
  "dueDate": "",
  "value": "",
  "paid": ""
}
*/