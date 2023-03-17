const app = require("./src/app.js");

const port = process.env.PORT || 8080;

//Iniciando servidor
app.listen(port, () => console.log(`API Quiz JW funcionando na porta: ${port}`));