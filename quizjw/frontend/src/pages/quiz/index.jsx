import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Radio, Button, Spin, Typography, Modal, Result } from 'antd';
import { LoadingOutlined, CheckCircleOutlined, CloseCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './quiz.css';

const { Text } = Typography;

export default function Quiz() {
  const navigate = useNavigate();
  
  const respostaInicial = { exibir: false, icone: <QuestionCircleOutlined />, titulo: '' }
  const respostaCorreta = { exibir: true, icone: <CheckCircleOutlined />, titulo: 'Resposta Correta' }
  const respostaErrada = { exibir: true, icone: <CloseCircleOutlined />, titulo: 'Resposta Errada' }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [opcaoCerta, setOpcaoCerta] = useState(null);
  const [resposta, setResposta] = useState(null);
  const [status, setStatus] = useState(respostaInicial);
  const [pontuacao, setPontuacao] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem('@quizjw/user')) {
      navigate('/');
    } else {
      gerarPergunta()
    }
  }, [])

  function gerarPergunta() {
    setIsLoaded(false);
    fetch(import.meta.env.VITE_URL_API)
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

  const Responder = e => {
    e.preventDefault();
    if (resposta === opcaoCerta) {
      setStatus(respostaCorreta)
      setPontuacao(pontuacao + 1)

      setTimeout(() => {
        setStatus(respostaInicial)
        setResposta(null)
        gerarPergunta();
      }, 1500);
    } else {
      setStatus(respostaErrada)
      setTimeout(() => {
        setStatus(respostaInicial)
        setResposta(null)
        gerarPergunta();
      }, 1500);
    }
  };

  const onRadioChange = (e) => {
    setResposta(e.target.value);
  };

  if (error) {
    return <MensagemErro />;
  } else if (!isLoaded) {
    return <Carregando />;
  } else {
    return (
      <div className="container">
        <Mensagem exibir={status.exibir} icone={status.icone} titulo={status.titulo} msg={status.msg} />

        <Text className="lblPergunta" style={{ color: "white", fontSize: "1.2rem", maxWidth: "350px", marginTop: "10vh", marginBottom: "2vh", textAlign: "center"}}>
          {items.question}
        </Text>

        <Radio.Group onChange={onRadioChange} value={resposta}>
          <Radio value={"A"} style={{ color: "white", fontSize: "small" }}>{items.A}</Radio><br />
          <Radio value={"B"} style={{ color: "white", fontSize: "small" }}>{items.B}</Radio><br />
          <Radio value={"C"} style={{ color: "white", fontSize: "small" }}>{items.C}</Radio><br />
        </Radio.Group><br />

        <Button className="btnResponder" style={{ marginTop: "3vh" }} onClick={Responder}>RESPONDER</Button>

        <Text className="lblPontuacao" style={{ color: "white", marginTop: "5vh", fontSize: "1rem" }}>Pontos: {pontuacao}</Text>
      </div>
    );
  }

}

function Carregando() {
  const antIcon = (<LoadingOutlined className='spin' style={{ fontSize: 60, color: "white", marginTop: "40vh", marginBottom: "8px" }} spin />);
  return (
    <div className="container">
      <Spin size="large" indicator={antIcon} />
      <Text className='txtLoading' style={{ color: "white", fontSize: "1rem" }}>Gerando pergunta</Text>
    </div>
  )
}

function Mensagem({ exibir, icone, titulo }) {
  return (
    <Modal open={exibir} footer={null} closable="false">
      <Result
        icon={icone}
        title={titulo} />
    </Modal>
  )
}

function MensagemErro() {
  const navigate = useNavigate();

  const Voltar = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <Result
      status="500"
      title="Ops!"
      subTitle="Estamos enfrentando problemas com a Inteligência Artificial ou ela está muito ocupada.  Aguarde alguns segundos."
      extra={<Button type="primary" onClick={Voltar}>VOLTAR</Button>}
    />
  )
}