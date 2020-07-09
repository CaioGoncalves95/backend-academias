'use strict'

const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

exports.getAll = async () => {
  return await Employee.find({});
}

exports.getById = async (id) => {
  return await Employee.findById(id)
}

exports.getByGym = async (gym) => {
  return await Employee.find({ gym: gym }).populate('gym','fantasyName');
}

exports.create = async (data) => {
  let employee = new Employee(data);
  await employee.save();
}

exports.update = async (id, data) => {
  await Employee
    .findByIdAndUpdate(id, {
      $set: {
        name: data.name
      }
    });
}

exports.delete = async (id) => {
  return await Employee.findByIdAndRemove(id);
}