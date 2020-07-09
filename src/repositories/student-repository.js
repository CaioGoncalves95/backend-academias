'use strict'

const mongoose = require('mongoose');
const Student = mongoose.model('Student');

exports.getAll = async () => {
  return await Student.find({});
}

exports.getAllStudentsByGym = async (gym) => {
  return await Student.find({gym: gym}).populate('gym', 'fantasyName');
}

exports.getById = async (id) => {
  return await Student.findById(id);
}

exports.getAllRecordsById = async (id) => {
  return await Student.find({ id: id }).populate('record','number initialDate finalDate');
}

exports.create = async (data) => {
  let student = new Student(data);
  await student.save();
}

exports.update = async (id, data) => {
  await Student
    .findByIdAndUpdate(id, {
      $set: {
        name: data.name
      }
    });
}

exports.delete = async (id) => {
  return await Student.findByIdAndRemove(id);
}