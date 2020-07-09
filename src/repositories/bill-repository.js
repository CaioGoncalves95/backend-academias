'use strict'

const mongoose = require('mongoose');
const Bill = mongoose.model('Bill');

exports.getAll = async () => {
  return await Bill.find({});
}

exports.getById = async (id) => {
  return await Bill.findById(id)
}

exports.getByGym = async (gym) => {
  return await Bill.find({ gym: gym }).populate('gym','fantasyName');
}

exports.create = async (data) => {
  let bill = new Bill(data);
  await bill.save();
}

exports.update = async (id, data) => {
  await Bill
    .findByIdAndUpdate(id, {
      $set: {
        gym: data.gym,
        description: data.description,
        dueDate: data.dueDate,
        value: data.value,
        paid: data.paid
      }
    });
}

exports.delete = async (id) => {
  return await Bill.findByIdAndRemove(id);
}