const sqlite3 = require("sqlite3").verbose();

// Cria ou abre o banco de dados
const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

// Exemplo: Criar uma tabela se não existir
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

// Exporta a instância do banco de dados
module.exports = db;
