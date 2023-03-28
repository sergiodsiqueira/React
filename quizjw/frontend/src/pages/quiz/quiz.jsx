import React, { useState, useEffect } from "react";
import { Button, Header, Icon, Modal, Radio, Loader, Segment, Dimmer, Image } from 'semantic-ui-react'
const urlApi = "https://apiquizjw.vercel.app/question";

function Quiz() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [opcaoCerta, setOpcaoCerta] = useState(null);
  const [resposta, setResposta] = useState(null);

  useEffect(() => {
    gerarPergunta()
  }, [])

  function gerarPergunta() {
    setIsLoaded(false);

    fetch(urlApi)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setOpcaoCerta(result.correct)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (resposta === opcaoCerta) {
      alert('Acertou')
      gerarPergunta()
    } else {
      alert('Errou')
      gerarPergunta()
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Carregando />;
  } else {
    return (
      <div className="container">
        <form className="content" onSubmit={handleSubmit}>
          <h2>{items.question}</h2><br />
          <div>
            <RadioInput label={items.A} value="A" checked={resposta} setter={setResposta} /><br />
            <RadioInput label={items.B} value="B" checked={resposta} setter={setResposta} /><br />
            <RadioInput label={items.C} value="C" checked={resposta} setter={setResposta} /><br />
          </div><br />
          <Button className="btnResponder" type="submit">Responder</Button>
        </form>
      </div>
    );
  }

}

const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <label>
      <Radio checked={checked == value}
        onChange={() => setter(value)} />
      <span>{label}</span>
    </label>
  );
};

function Carregando() {
  return (
    <div className="frmCarregando">
      <Image
        src='https://raw.githubusercontent.com/sergiodsiqueira/Flutter/main/quizjw/lib/assets/background.png'
        className="imgBackground"
        fluid
      />
      <Loader active size='large'>Gerando pergunta</Loader>
    </div>
  )
}

export default Quiz;