import React, { useState, useEffect } from "react";
const url = "https://apiquizjw.vercel.app/question";

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
    fetch(url)
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
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="content">
          <h2>{items.question}</h2><br />
          <div>
            <RadioInput label={items.A} value="A" checked={resposta} setter={setResposta} /><br />
            <RadioInput label={items.B} value="B" checked={resposta} setter={setResposta} /><br />
            <RadioInput label={items.C} value="C" checked={resposta} setter={setResposta} /><br />
          </div><br />
          <button type="submit">Responder</button>
        </form>
      </div>
    );
  }

}

const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <label>
      <input type="radio" checked={checked == value}
        onChange={() => setter(value)} />
      <span>{label}</span>
    </label>
  );
};

export default Quiz;