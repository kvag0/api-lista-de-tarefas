// 1. Importar os pacotes necessários
const express = require('express');

// 2. Inicializar a aplicação Express
const app = express();

// 3. Definir a porta do servidor
const PORT = 3000;

// 4. Criar uma rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API de Lista de Tarefas!' });
});

// 5. Iniciar o servidor para "escutar" os pedidos na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor a correr na porta ${PORT}`);
});
