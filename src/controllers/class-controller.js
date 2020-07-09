'use strict'

const repository = require('../repositories/class-repository');

exports.get = async (req, res, next) => {
  try {
    var data = await repository.getAll();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getAllClasses'
    })
  }
}

exports.checkStudentAlredyInClass = async (req, res, next) => {
  try {
    var data = await repository.checkStudentAlreadyInClass(req.params.class);
    for (let i = 0; i < data.length; i++) {
      if (data[i] == req.params.student) {
        // estudante já está cadastrado
      }
    }
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: getStudentAlreadyInClass'
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

exports.checkClassAvailability = async (req, res, next) => {
  try {
    var data = await repository.checkClassAvailability(req.params.gymclass);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar requisição: checkClassAvailability'
    })
  }
}

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(200).send({
      message: 'Class cadastrada com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao cadastrar Class'
    });
  }
}

// função que checa se o número de alunos presentes na classe é menor que o número máximo permitido.
// sendo menor, o aluno é cadastrado na aula. sendo maior ela retorna um erro informando que o número máximo
// de alunos já foi alcançado. Ela também checa se o aluno já está cadastrado na aula, não deixando ocorrer duplo registro no banco
exports.insertStudentIntoClass = async (req, res, next) => {
  try {
    let data = await repository.checkClassAvailability(req.params.class);
    if (data.currentNumberOfStudents < data.maxStudents) {
      let studentsInClass = await repository.checkStudentAlreadyInClass(req.params.class);
      if (studentsInClass.length > 0) { // checa se tem já tem algum aluno cadastrado primero (deu problema se não fizer essa checagem primeiro)
        for (let i = 0; i < studentsInClass.length; i++) {
          if (studentsInClass[i] == req.params.student) {
            // estudante já está cadastrado
            res.status(500).send({
              message: 'Student já cadastrado na Class'
            });
          } else { // estudante não está na aula, posso cadastrá-lo
            await repository.saveStudent(req.params.class, req.params.student);
            let numStudents = parseInt(data.currentNumberOfStudents) + 1;
            await repository.updateNmrOfStudents(req.params.class, numStudents);
            res.status(200).send({
              message: 'Student cadastrado(a) com sucesso na Class'
            });
          }
        }
      } else {
        await repository.saveStudent(req.params.class, req.params.student);
        let numStudents = parseInt(data.currentNumberOfStudents) + 1;
        await repository.updateNmrOfStudents(req.params.class, numStudents);
        res.status(200).send({
          message: 'Student cadastrado(a) com sucesso na Class'
        });
      }
    } else {
      res.status(500).send({
        message: 'Número máximo de Students na Class alcançado'
      });
    }
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao cadastrar Student em Class'
    });
  }
}

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(201).send({
      message: 'Class atualizado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao atualizar Class'
    });
  }
}

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
    res.status(201).send({
      message: 'Class deletado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao deletar Class'
    })
  }
}

// função que exclui o aluno da aula em que está cadastrado
exports.deleteStudentFromClass = async (req, res, next) => {
  try {
    let data = await repository.checkClassAvailability(req.params.class);
    await repository.deleteStudent(req.params.class, req.params.student);
    let numStudents = parseInt(data.currentNumberOfStudents) - 1;

    if (numStudents < 0) {
      numStudents = 0
    }

    await repository.updateNmrOfStudents(req.params.class, numStudents);
    res.status(200).send({
      message: 'Student excluído(a) com sucesso na Class'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao excluir Student em Class'
    });
  }
}