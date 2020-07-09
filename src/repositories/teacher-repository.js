'use strict'

const mongoose = require('mongoose');
const Teacher = mongoose.model('Teacher');

exports.getAll = async () => {
  return await Teacher.find({});
}

exports.getById = async (id) => {
  return await Teacher.findById(id)
}

exports.getByGym = async (gym) => {
  return await Teacher.find({ gym: gym }).populate('gym','fantasyName');
}

exports.create = async (data) => {
  let teacher = new Teacher(data);
  await teacher.save();
}

exports.update = async (id, data) => {
  await Teacher
    .findByIdAndUpdate(id, {
      $set: {
        name: data.name
      }
    });
}

exports.delete = async (id) => {
  return await Teacher.findByIdAndRemove(id);
}