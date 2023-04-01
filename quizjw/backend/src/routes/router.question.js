const router = require("express-promise-router")();
const db = require("../config/database");
require('dotenv').config();

router.get('/question', async (req, res) => {
  const response = await db.query(
    "SELECT * FROM perguntas ORDER BY RANDOM()LIMIT 1"
  );

  if (response.rows[0]) {
    let {pergunta, opcao1, opcao2, opcao3, opcaocorreta} = response.rows[0];
    switch (opcaocorreta) {
      case 1:
        opcaocorreta = "A";
        break;
      case 2:
        opcaocorreta = "B";
        break;
      case 3:
        opcaocorreta = "C";
        break;
      default:
        opcaocorreta = "";
        break;
    }
    res.json({question:pergunta, A:opcao1, B:opcao2, C:opcao3, correct:opcaocorreta});
  } else {
    res.status(40).send(`Error question not generate`)
  }
})

module.exports = router;