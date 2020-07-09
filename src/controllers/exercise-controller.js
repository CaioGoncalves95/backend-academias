'use strict'

const repository = require('../repositories/exercise-repository');

exports.get = async (req, res, next) => {
  try {
    var data = await repository.getAll();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getAllExercises'
    })
  }
}

exports.getById = async (req, res, next) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getById'
    })
  }
}

exports.getByGym = async (req, res, next) => {
  try {
    var data = await repository.getByGym(req.params.gym);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getByGym'
    })
  }
}

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(200).send({
      message: 'Exercise cadastrada com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao cadastrar Exercise'
    });
  }
}

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(201).send({ 
      message: 'Exercise atualizado com sucesso'});
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao atualizar Exercise'
    });
  }
}

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
    res.status(201).send({
      message: 'Exercise deletado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao deletar Exercise'
    })
  }
}