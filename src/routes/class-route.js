'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/class-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/gym/:gym', controller.getByGym);
//router.get('/checkavailability/:gymclass', controller.checkClassAvailability); //foi usada para teste
//router.get('/checkinclass/:class/:student', controller.checkStudentAlredyInClass); // foi usada para teste
router.post('/', controller.post);
router.post('/:class/:student', controller.insertStudentIntoClass);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.delete('/:class/:student', controller.deleteStudentFromClass);

module.exports = router;