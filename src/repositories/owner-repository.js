'use strict'

const mongoose = require('mongoose');
const Owner = mongoose.model('Owner');

exports.getallOwners = async () => {
  return await Owner.find({}, 'name email phone');
}

exports.getById = async (id) => {
  return await Owner.findById(id, 'name email phone');
}

exports.create = async (data) => {
  let owner = new Owner(data);
  await owner.save();
}

exports.update = async (id, data) => {
  await Owner
    .findByIdAndUpdate(id, {
      $set: {
        name: data.name,
        email: data.email,
        phone: data.phone
      }
    });
}

exports.delete = async (id) => {
  return await Owner.findByIdAndRemove(id);
}