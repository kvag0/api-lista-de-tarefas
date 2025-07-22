const express = require('express');
const { getTodos, createTodo } = require('../controllers/todosController');

const router = express.Router();

router.route('/')
  .get(getTodos)
  .post(createTodo);

module.exports = router;
