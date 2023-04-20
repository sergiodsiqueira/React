import React, { useEffect, useState, useRef } from 'react';
import { emailValidation } from '../../lib/library';
import auth from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Image, Alert, message } from 'antd';
import './home.css';

const URL_ASSETS = import.meta.env.VITE_URL_ASSETS;

export default function Home() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [erro, setErro] = useState('')
  const inputRefEmail = useRef('');
  const inputRefSenha = useRef('');

  useEffect(() => {
    auth('', '');
    setErro('');
  }, []);

  function onSubmit() {
    if (inputRefEmail.current.input.value == '') {
      setErro('Email em branco')
      return
    }
    if (!emailValidation(inputRefEmail.current.input.value)) {
      setErro('Email inválido')
      return
    }
    if (inputRefSenha.current.input.value == '') {
      setErro('Senha em branco')
      return
    }

    auth(inputRefEmail.current.input.value, inputRefSenha.current.input.value).
      then((res) => {
        if (res) {
          navigate('/quiz')
        } else {
          messageApi.open({
            type: 'error',
            content: 'Email ou senha incorreto',
          });
        }
      })
  }

  function onHandleClickCadastrar(e) {
    e.preventDefault();
    navigate('/cadastro');
  }

  function onHandleClickRecuperar(e) {
    e.preventDefault();
    navigate('/recuperar');
  }

  const handleCloseErro = () => {
    setErro('')
  };

  return (
    <div className='container'>
      {contextHolder}

      <div className='divHomeSuperior'>
        <Image className='imgHomeLogo' src={`${URL_ASSETS}/logotipo.png`} preview={false} />
        <p className='lblHomeQuizJW'>Quiz JW</p>
      </div>

      <div className='divHomeCentral'>
        <Form className='frmHomeLogin' name='basic' layout='vertical' autoComplete='off' onFinish={onSubmit}>

          <p className='lblHomeEmail'>Email</p>
          <Input className='inpHomeEmail' prefix={<MailOutlined />} status='' ref={inputRefEmail} onChange={handleCloseErro} />


          <p className='lblHomeSenha'>Senha</p>
          <Input.Password className='inpHomeSenha' prefix={<LockOutlined />} ref={inputRefSenha} onChange={handleCloseErro} />

          <div className='divHomeRecuperar'>
            <Button className='btnHomeRecuperar' type='link' onClick={onHandleClickRecuperar}>Recuperar Senha?</Button>
          </div>
          {erro != '' && (
            <Alert className='alert' message={erro} type='error' showIcon closable afterClose={handleCloseErro} />
          )}

          <Button className='btnHomeEntrar' htmlType='submit'> ENTRAR </Button>
          <Button className='btnHomeCadastrar' type='text' onClick={onHandleClickCadastrar}> CADASTRAR </Button>
        </Form>
      </div>

      <div className='divHomeInferior'>
        <p className='txtHomeExplicacao'>Você acredita que conhece bem a Bíblia
          então participe desse Quiz. <br />
          Aqui você vai analisar seu nível de conhecimento
          e compartilhar com seus amigos!</p>
      </div>

    </div>
  )
}