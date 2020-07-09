'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  number: {
    type: String,
    required: true,
    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  },
  initialDate: {
    type: Date,
    default: Date.now
  },
  finalDate: {
    type: Date
  },
  exercises: [{
    exercise: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercises'
    },
    series: {
      type: Number,
      required: true
    },
    rep1: {
      type: Number
    },
    rep2: {
      type: Number
    },
    rep3: {
      type: Number
    },
    rep4: {
      type: Number
    },
    rep5: {
      type: Number
    },
    rep6: {
      type: Number
    },
    load: {
      type: Number
    },
    typeLoad: {
      type: String,
      enum: ['Kg', 'Pl', 'Min', 'Seg']
    }
  }],
})

module.exports = mongoose.model('Record', schema);

/*
{
  "student": "",
  "number": "",
  "initialDate": "",
  "finalDate": "",
  "exercises": [{
      "exercise": "",
      "series: "",
      "rep1": "",
      "rep2": "",
      "rep3": "",
      "rep4": "",
      "rep5": "",
      "rep6": "",
      "load": "",
      "typeLoad": ""
    },
    {
      "exercise": "",
      "series: "",
      "rep1": "",
      "rep2": "",
      "rep3": "",
      "rep4": "",
      "rep5": "",
      "rep6": "",
      "load": "",
      "typeLoad": ""
    }
  ]
}
*/