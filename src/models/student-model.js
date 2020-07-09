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
  registrationDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['M','F']
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
  photo: {
    type: Buffer
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
  profession: {
    type: String,
    required: true
  },
  paymentOption: {
    type: String,
    required: true
  },
  monthlyRevenue: {
    type: Number,
    required: true
  },
  paid: {
    type: Boolean,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Student', schema);

/*
{
  "gym": "",
  "cpf": "",
  "registration": "",
  "registrationDate": "",
  "name": "",
  "birthDate": "",
  "gender" "",
  "email": "",
  "cellphone": "",
  "photo": "",
  "postalCode": "",
  "street": "",
  "number": "",
  "complement": "",
  "city": "",
  "state": "",
  "profession": "",
  "paymentOption": "",
  "monthlyRevenue": "",
  "paid": ,
  "active": 
}
*/