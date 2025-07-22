const express = require('express');
// IMPORTAR AS NOVAS FUNÇÕES
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todosController');

const router = express.Router();

// Rotas para '/' (pegar todas e criar uma nova)
router.route('/')
  .get(getTodos)
  .post(createTodo);

// Rotas para '/:id' (atualizar uma e deletar uma)
router.route('/:id')
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;