const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'O texto da tarefa é obrigatório.'],
    trim: true, // Remove espaços em branco no início e no fim
  },
  completed: {
    type: Boolean,
    default: false, // Por padrão, uma nova tarefa não está completa
  },
  createdAt: {
    type: Date,
    default: Date.now, // Guarda a data de criação automaticamente
  },
});

// Exporta o modelo para que possamos usá-lo em outros ficheiros
module.exports = mongoose.model('Todo', TodoSchema);
