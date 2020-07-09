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
  date: [{ 
    day: Date,
    initalTime: Date, 
    endTime: Date
  }],
  maxStudents: {
    type: Number,
    required: true
  },
  currentNumberOfStudents: {
    type: Number,
    default: 0
  },
  currentStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: false
  }]
})

module.exports = mongoose.model('Class', schema);

/*
{
  "gym": "",
  "description": "",
  "date": [{ 
    "day": "",
    "initalTime": "", 
    "endTime": ""
  }],
  "maxStudents": ""
}
*/