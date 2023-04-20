const router = require("express-promise-router")();
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const question = "Crie uma pergunta com temática cristã aleatória e simples para um quiz "+ 
                 "com três opções sendo isso retornado em um JSON da seguinte forma a "+
                 "propriedade question para a pergunta e as opções nas propriedades A,B e C "+
                 "e por ultimo a propriedade correct com a opção correta. Retorne somente o JSON.";

router.get('/question', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: question}],
    });

    const reply = JSON.parse(`{${response.data.choices[0].message.content.match(/\{([^}]+)\}/)[1]}}`);

    res.json(reply);
  } catch (error) {
    console.error(error)
    res.status(500).send(`Error question not generate`)
  }
})

module.exports = router;