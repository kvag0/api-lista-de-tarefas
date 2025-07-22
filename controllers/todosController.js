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

exports.updateTodo = async (req, res, next) => {
  try {
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ success: false, error: 'Tarefa não encontrada' });
    }

    todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Retorna o documento modificado
      runValidators: true, // Roda as validações do schema
    });

    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Deletar uma tarefa específica
// @route   DELETE /api/todos/:id
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ success: false, error: 'Tarefa não encontrada' });
    }

    res.status(200).json({ success: true, data: {} }); // Retorna sucesso com dados vazios
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};