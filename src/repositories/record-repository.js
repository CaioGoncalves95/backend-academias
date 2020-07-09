'use strict'

const mongoose = require('mongoose');
const Record = mongoose.model('Record');

exports.getAll = async () => {
  return await Record.find({});
}

exports.getById = async (id) => {
  return await Record.findById(id)
}

exports.getByStudent = async (student) => {
  return await Record.find({ student: student }).populate('student','name').populate('exercises.exercise','name grouping');
}

exports.create = async (data) => {
  let record = new Record(data);
  await record.save();
}

// exports.update = async (id, data) => {
//   await Exercise
//     .findByIdAndUpdate(id, {
//       $set: {
//         gym: data.gym,
//         name: data.name,
//         grouping: data.grouping
//       }
//     });
// }

exports.delete = async (id) => {
  return await Record.findByIdAndRemove(id);
}