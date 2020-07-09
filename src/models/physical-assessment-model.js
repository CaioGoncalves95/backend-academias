'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  date: {
    type: Date,
    default: Date.now
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  imc: {
    type: Number
  },
  metodo: {
    type: String,
    enum: ['P3','P7']
  },
  triciptal: {
    type: Number
  },
  subescapular: {
    type: Number
  },
  axilarMedia: {
    type: Number
  },
  suprailiaca: {
    type: Number
  },
  peitoral: {
    type: Number
  },
  abdominal: {
    type: Number
  },
  coxa: {
    type: Number
  },
  coxa: {
    type: Number
  },
  densidadeCorporal: {
    type: Number
  },
  percentualGordura: {
    type: Number
  }
})

module.exports = mongoose.model('Assessment', schema);

/*
{
  "gym": "",
  "name": "",
  "grouping": ""
}
*/