'use strict'

const repository = require('../repositories/record-repository');

exports.get = async (req, res, next) => {
  try {
    var data = await repository.getAll();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getAllRecords'
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

exports.getByStudent = async (req, res, next) => {
  try {
    var data = await repository.getByStudent(req.params.student);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getByStudent'
    })
  }
}

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(200).send({
      message: 'Record cadastrada com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao cadastrar Record'
    });
  }
}

// exports.put = async (req, res, next) => {
//   try {
//     await repository.update(req.params.id, req.body);
//     res.status(201).send({ 
//       message: 'Gym atualizado com sucesso'});
//   } catch (e) {
//     res.status(500).send({
//       message: 'Falha ao atualizar Gym'
//     });
//   }
// }

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
    res.status(201).send({
      message: 'Record deletado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao deletar Record'
    })
  }
}