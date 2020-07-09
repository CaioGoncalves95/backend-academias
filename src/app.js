'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');

const app = express();
const router = express.Router();

// Conecta no banco MongoDB
mongoose.connect(config.connectionString);

// Carrega os Models
const Owner = require('./models/owner-model');
const Gym = require('./models/gym-model');
const Bill = require('./models/bill-model');
const Employees = require('./models/employee-model');
const Students = require('./models/student-model');
const Exercises = require('./models/exercise-model');
const Records = require('./models/record-model');
const Classes = require('./models/class-model');
const Teacher = require('./models/teacher-model');

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const ownersRoute = require('./routes/owner-route');
const gymsRoute = require('./routes/gym-route');
const billsRoute = require('./routes/bill-route');
const employeesRoute = require('./routes/employee-route');
const studentsRoute = require('./routes/student-route');
const exercisesRoute = require('./routes/exercise-route');
const recordsRoute = require('./routes/record-route');
const classesRoute = require('./routes/class-route');
const teachersRoute = require('./routes/teacher-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/owners', ownersRoute);
app.use('/gyms', gymsRoute);
app.use('/bills', billsRoute);
app.use('/employees', employeesRoute);
app.use('/students', studentsRoute);
app.use('/exercises', exercisesRoute);
app.use('/records', recordsRoute);
app.use('/classes', classesRoute);
app.use('/teachers', teachersRoute);

module.exports = app;