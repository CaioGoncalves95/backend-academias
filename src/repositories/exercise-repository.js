'use strict'

const mongoose = require('mongoose');
const Exercise = mongoose.model('Exercises');

exports.getAll = async () => {
  return await Exercise.find({});
}

exports.getById = async (id) => {
  return await Exercise.findById(id)
}

exports.getByGym = async (gym) => {
  return await Exercise.find({ gym: gym }).populate('gym','fantasyName');
}

exports.create = async (data) => {
  let exercise = new Exercise(data);
  await exercise.save();
}

exports.update = async (id, data) => {
  await Exercise
    .findByIdAndUpdate(id, {
      $set: {
        gym: data.gym,
        name: data.name,
        grouping: data.grouping
      }
    });
}

exports.delete = async (id) => {
  return await Bill.findByIdAndRemove(id);
}