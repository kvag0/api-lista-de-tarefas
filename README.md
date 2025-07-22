# API de Lista de Tarefas (Projeto 1)

Este é o primeiro mini-projeto de uma série focada em aprender na prática sobre diferentes componentes de um tech stack. O objetivo deste projeto foi construir uma API RESTful completa para um serviço de "Lista de Tarefas" (To-Do List), servindo como o backend para uma futura aplicação cliente.

---

## 🛠️ Tech Stack

* **Ambiente de Execução:** Node.js
* **Framework do Servidor:** Express.js
* **Banco de Dados:** MongoDB (com o serviço cloud MongoDB Atlas)
* **ODM (Object Data Modeling):** Mongoose
* **Ferramentas de Desenvolvimento:**
    * `nodemon`: para reiniciar o servidor automaticamente durante o desenvolvimento.
    * `dotenv`: para gerenciar variáveis de ambiente de forma segura.

---

## 🏛️ Arquitetura do Projeto

A arquitetura segue um padrão comum de 3 camadas para serviços de backend:

`Cliente (ex: Postman)` **<-->** `API (Node.js + Express)` **<-->** `Banco de Dados (MongoDB)`

* **Cliente:** Envia pedidos HTTP para a API para manipular os dados.
* **API:** O cérebro da aplicação. Recebe os pedidos, aplica a lógica de negócio e comunica com o banco de dados para persistir os dados.
* **Banco de Dados:** A memória permanente da aplicação, onde todas as tarefas são armazenadas.

A estrutura de pastas foi organizada para separar as responsabilidades (Separation of Concerns):
* `config/`: Lógica de configuração (conexão com o banco de dados).
* `models/`: Definição dos Schemas de dados do Mongoose.
* `controllers/`: A lógica de negócio para cada rota (o que cada rota efetivamente faz).
* `routes/`: O mapeamento dos endpoints da API para as funções do controlador.

---

## 🚀 Funcionalidades (Endpoints da API)

A API implementa todas as operações de um CRUD (Create, Read, Update, Delete) para as tarefas.

| Funcionalidade          | Método HTTP | Endpoint           | Corpo (Body) da Requisição         | Resposta de Sucesso          |
| ----------------------- | ----------- | ------------------ | ---------------------------------- | ---------------------------- |
| **Listar todas as tarefas** | `GET`       | `/api/todos`       | *Nenhum* | `200 OK`                       |
| **Criar uma nova tarefa** | `POST`      | `/api/todos`       | `{ "text": "Minha nova tarefa" }`  | `201 Created`                  |
| **Atualizar uma tarefa** | `PUT`       | `/api/todos/:id`   | `{ "completed": true }`            | `200 OK`                       |
| **Deletar uma tarefa** | `DELETE`    | `/api/todos/:id`   | *Nenhum* | `200 OK`                       |

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto na sua máquina.

**Pré-requisitos:**
* Node.js
* Git

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/api-lista-de-tarefas.git](https://github.com/seu-usuario/api-lista-de-tarefas.git)
    cd api-lista-de-tarefas
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Crie e configure as variáveis de ambiente:**
    * Crie um ficheiro chamado `.env` na raiz do projeto.
    * Adicione a seguinte variável, substituindo pelo seu próprio URL de conexão do MongoDB Atlas:
    ```env
    # Exemplo de variável de ambiente
    MONGO_URI=mongodb+srv://usuario:senha@cluster.xxxxx.mongodb.net/nome-do-banco?retryWrites=true&w=majority
    PORT=3000
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
    O servidor estará a correr em `http://localhost:3000`. Você pode usar ferramentas como o [Postman](https://www.postman.com/) para testar os endpoints.