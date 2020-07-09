'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  },
  cnpj: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  fantasyName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
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
  paymentOption: {
    type: String,
    required: true
  },
  monthlyRevenue: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Gym', schema);

/*
{
  "owner": "",
  "cnpj": "",
  "companyName": "",
  "fantasyName": "",
  "email": "",
  "password": "",
  "phone": "",
  "postalCode": "",
  "street": "",
  "number": "",
  "complement": "",
  "city": "",
  "state": "",
  "paymentOption": "",
  "monthlyRevenue": "",
  "active": ""
}
*/