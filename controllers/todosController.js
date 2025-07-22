const Todo = require('../models/Todo');

// @desc    Criar uma nova tarefa
// @route   POST /api/todos
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Obter todas as tarefas
// @route   GET /api/todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ success: true, count: todos.length, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
