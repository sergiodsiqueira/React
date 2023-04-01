const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

/*Conexão com a Base de Dados*/
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.on("connect", () => {
  console.log("Access successful");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};