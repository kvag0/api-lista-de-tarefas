// Importar o mongoose
const mongoose = require('mongoose');

// Criar a função de conexão
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1); // Sair do processo com falha
  }
};

// Exportar a função para que possa ser usada em outros lugares
module.exports = connectDB;
