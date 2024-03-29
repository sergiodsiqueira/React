const express = require("express");
const cors = require("cors");

const app = express();

//Ativação dos Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

//Importação das Rotas:
const index = require("./routes/router.index");
const routesQuiz = require("./routes/router.question");

//Rotas
app.use(index);
app.use("", routesQuiz);

module.exports = app;