const express = require("express");

const router = express.Router();

var dataHora = new Date();
router.get("/", (req, res) => {
  res.status(200).send({
    status: "OK",
    message: "success " + dataHora.toLocaleDateString("pt-BR"),
    version: "Alpha",
  });
});

module.exports = router;