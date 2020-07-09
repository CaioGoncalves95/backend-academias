'use strict'

const repository = require('../repositories/student-repository');

exports.get = async (req, res, next) => {
  try {
    var data = await repository.getAll();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getAllStudents'
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

exports.getAllStudentsByGym = async (req, res, next) => {
  try {
    var data = await repository.getAllStudentsByGym(req.params.gym);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getAllStudentsByGym'
    })
  }
}

exports.getAllRecordsById = async (req, res, next) => {
  try {
    var data = await repository.getByOwner(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getByOwner'
    })
  }
}

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(200).send({
      message: 'Aluno(a) cadastrado(a) com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao cadastrar aluno(a)'
    });
  }
}

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(201).send({ 
      message: 'Aluno(a) atualizado(a) com sucesso'});
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao atualizar aluno(a)'
    });
  }
}

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
    res.status(201).send({
      message: 'Aluno(a) deletado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao deletar aluno(a)'
    })
  }
}