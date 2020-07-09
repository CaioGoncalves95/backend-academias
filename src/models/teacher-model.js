'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gym'
  },
  cpf: {
    type: String,
    required: true
  },
  registration: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  cellphone: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  postalCode: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  number: {
    type: String
  },
  complement: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  cref1: {
    type: String
  },
  salary: {
    type: Number
  },
  active: {
    type: Boolean
  }
})

module.exports = mongoose.model('Teacher', schema);


/*
{
  "gym": "",
  "cpf": "",
  "registration": ,
  "name": "",
  "email": "",
  "cellphone": "",
  "phone": "",
  "postalCode": "",
  "street": "",
  "number": "",
  "complement": "",
  "city": "",
  "state": "",
  "cref1": "",
  "salary": "",
  "active": 
}
*/