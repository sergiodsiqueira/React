import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Image } from 'antd';
import './home.css';

export default function Home() {
  const navigate = useNavigate();

  function Jogar(e) {
    e.preventDefault();
    navigate('/quiz')
  }

  return (
    <div className='container'>

      <div className='divSuperior'>
        <Image className='imgLogo' src='../src/assets/logotipo.png' preview={false} width='100px' />
        <p className='lblBemVindo'>Bem-vindo,</p>
        <p className='lblQuizJW'>ao Quiz JW</p>
      </div>

      <div className='divCentral'>
        <Form className='frmLogin' name="basic" layout='vertical'>
          <p className='lblEmail'>Email</p>
          <Input className='inpEmail'prefix={<MailOutlined />}/>

          <p className='lblSenha'>Senha</p>
          <Input.Password className='inpSenha'prefix={<LockOutlined />}/>

          <div className='divRecuperar'>
          <Button className='btnRecuperar' type='link'>Recuperar senha?</Button>
          </div>

          <Button className='btnEntrar' onClick={Jogar}> ENTRAR </Button>
          <Button className='btnCadastrar' type='text' onClick={Jogar}> CADASTRAR </Button>
        </Form>
      </div>

      <div className='divInferior'>
        <p className='txtExplicacao'>Você acredita que conhece bem a Bíblia
          então participe desse Quiz. Aqui você vai analisar seu nível de conhecimento
          e compartilhar com seus amigos!</p>
      </div>

    </div>
  );
}