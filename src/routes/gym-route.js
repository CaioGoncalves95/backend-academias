'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/gym-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/owner/:owner', controller.getByOwner);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
