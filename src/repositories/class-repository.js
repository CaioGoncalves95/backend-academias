'use strict'

const mongoose = require('mongoose');
const Class = mongoose.model('Class');

exports.getAll = async () => {
  return await Class.find({}).populate('currentStudents', 'name');
}

exports.getById = async (id) => {
  return await Class.findById(id)
}

exports.getByGym = async (gym) => {
  return await Class.find({ gym: gym });
}

exports.create = async (data) => {
  let gymClass = new Class(data);
  await gymClass.save();
}

exports.saveStudent = async (gymClass, student) => {
  await Class.update({ '_id': gymClass }, { $push: { 'currentStudents': student } });
}

exports.update = async (id, data) => {
  await Class
    .findByIdAndUpdate(id, {
      $set: {
        gym: data.gym
      }
    });
}

exports.delete = async (id) => {
  return await Class.findByIdAndRemove(id);
}

exports.deleteStudent = async (gymClass, student) => {
  await Class.update({ '_id': gymClass }, {
    $pull: {
      currentStudents: {
        $in: [student]
      }
    }
  });
}

exports.checkStudentAlreadyInClass = async (gymClass) => {
  let test = await Class.findById(gymClass);
  return test.currentStudents;
  //return await test.find({ currentStudents: { $elemMatch: { $eq: student }}});
  //return await Class.find({ currentStudents: { $elemMatch: { $eq: student }}});
}

exports.checkClassAvailability = async (gymClass) => {
  return await Class.findById(gymClass, 'maxStudents currentNumberOfStudents');
}

exports.updateNmrOfStudents = async (id, number) => {
  await Class
    .findByIdAndUpdate(id, {
      $set: {
        currentNumberOfStudents: number
      }
    });
}



