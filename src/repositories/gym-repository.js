'use strict'

const mongoose = require('mongoose');
const Gym = mongoose.model('Gym');

exports.getallGyms = async () => {
  return await Gym.find({});
}


exports.getById = async (id) => {
  return await Gym.findById(id)
}

exports.getByOwner = async (owner) => {
  return await Gym.find({ owner: owner }).populate('owner','name');
}

exports.create = async (data) => {
  let gym = new Gym(data);
  await gym.save();
}

exports.update = async (id, data) => {
  await Gym
    .findByIdAndUpdate(id, {
      $set: {
        owner: data.owner,
        cnpj: data.cnpj,
        companyName: data.companyName,
        fantasyName: data.fantasyName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        postalCode: data.postalCode,
        street: data.street,
        number: data.number,
        complement: data.complement,
        city: data.city,
        state: data.state,
        paymentOption: data.paymentOption,
        monthlyRevenue: data.monthlyRevenue,
        active: data.active
      }
    });
}

exports.delete = async (id) => {
  return await Gym.findByIdAndRemove(id);
}