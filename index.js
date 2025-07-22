// 1. Importar os pacotes necessários
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Importar a nossa função de conexão
const todosRoutes = require('./routes/todos');

// Carregar as variáveis de ambiente do ficheiro .env
dotenv.config();

// Executar a função para conectar ao banco de dados
connectDB();

// 2. Inicializar a aplicação Express
const app = express();

app.use(express.json());

// 3. Definir a porta do servidor
const PORT = process.env.PORT || 3000; // Usar a porta do ambiente ou 3000

// 4. Criar uma rota
app.use('/api/todos', todosRoutes);

// 5. Iniciar o servidor para "escutar" os pedidos na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor a correr na porta ${PORT}`);
});