import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailValidation } from '../../lib/library';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Alert, Modal } from 'antd';
import { createUser } from '../../services/user';
import './cadastro.css';

export default function CadastroUsuario() {
    const navigate = useNavigate();

    const inputRefNome = useRef('');
    const inputRefEmail = useRef('');
    const inputRefSenha = useRef('');
    const inputRefConfirmarSenha = useRef('');
    const [erro, setErro] = useState('');

    const handleCloseErro = () => {
        setErro('')
    };

    function feedback(pReturn) {
        if (pReturn) {
            Modal.success({
                title: 'Usuário criado com sucesso',
                content: (
                    <div>
                        <p>Foi enviando um email para {inputRefEmail.current.input.value}</p>
                        <p>para a confirmação do cadastro.</p>
                    </div>
                ),
                onOk() { navigate('/') }
            });
        } else {
            Modal.error({
                content: 'Ocorreu algum erro na criação do usuário, verifique seus dados',
            });
        }
    }

    function onSubmit() {
        let nome = inputRefNome.current.input.value;
        let email = inputRefEmail.current.input.value;
        let senha = inputRefSenha.current.input.value;

        if (nome == '') {
            setErro('Nome em branco')
            return
        }
        if (email == '') {
            setErro('Email em branco')
            return
        }
        if (!emailValidation(email)) {
            setErro('Email inválido')
            return
        }
        if (senha == '') {
            setErro('Senha em branco')
            return
        }
        if (inputRefConfirmarSenha.current.input.value == '') {
            setErro('Senha em branco')
            return
        }
        if (senha != inputRefConfirmarSenha.current.input.value) {
            setErro('Senhas não conferem')
            return
        }

        createUser(nome, email, senha).
            then((e) => feedback(e))
    }

    return (
        <div className='container'>
            <div className='divCadSuperior'>
                <p className='lblCadCadastro'>Cadastro</p>
                <p className='lblCadQuizJW'>Quiz JW</p>
            </div>

            <div className='divCadCentral'>
                <Form className='frmCadastro' name='basic' layout='vertical' autoComplete='off' onFinish={onSubmit}>

                    <p className='lblCadNome'>Nome Completo</p>
                    <Input className='inpCadNome' prefix={<UserOutlined />} status='' ref={inputRefNome} onChange={handleCloseErro} />

                    <p className='lblCadEmail'>Email</p>
                    <Input className='inpCadEmail' prefix={<MailOutlined />} status='' ref={inputRefEmail} onChange={handleCloseErro} />

                    <p className='lblCadSenha'>Senha</p>
                    <Input.Password className='inpCadSenha' prefix={<LockOutlined />} ref={inputRefSenha} onChange={handleCloseErro} />

                    <p className='lblCadConfirmarSenha'>Confirmar Senha</p>
                    <Input.Password className='inpCadConfirmarSenha' prefix={<LockOutlined />} ref={inputRefConfirmarSenha} onChange={handleCloseErro} />

                    <div className='divCadError'>
                        {erro != '' && (
                            <Alert className='alert' message={erro} type='error' showIcon closable afterClose={handleCloseErro} />
                        )}
                    </div>

                    <Button className='btnCadastrar' htmlType='submit'> CADASTRAR </Button>
                </Form>
            </div>
        </div>
    )
}