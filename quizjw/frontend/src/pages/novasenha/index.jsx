import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { Form, Input, Button, Alert, Modal } from 'antd';
import './novasenha.css';

export default function NovaSenha() {
    const navigate = useNavigate();

    const inputRefEmail = useRef('');

    function onSubmit() {
        let senha1 = inputRefSenha1.current.input.value;
        let senha2 = inputRefSenha1.current.input.value;

        if ((senha1 == '') || (senha2 == '')) {
            setErro('Senhas inválidas')
            return;
        }
    }

    const handleCloseErro = () => {
        setErro('')
    };

    return (
        <div className="container">
            <div className='divNewPassSuperior'>
                <p className='lblNewPassNewPassuperar'>Recuperar Senha</p>
                <p className='lblNewPassQuizJW'>Quiz JW</p>
            </div>

            <div className='divNewPassCentral'>
                <Form className='frmNewPassLogin' name='basic' layout='vertical' autoComplete='off' onFinish={onSubmit}>

                    <p className='lblNewPassEmail'>Email</p>
                    <Input className='inpNewPassEmail' prefix={<MailOutlined />} status='' ref={inputRefEmail} onChange={()=>{

                    }} />

                    <div className='divNewPassError'>
                        {erro != '' && (
                            <Alert className='alert' message={erro} type='error' closable afterClose={handleCloseErro} />
                        )}
                    </div>

                    <Button className='btnNewPassRecuperar' htmlType='submit'> ENVIAR </Button>
                </Form>
            </div>

            <div className='divNewPassInferior'>
                <p className='txtNewPassExplicacao'>Ao clicar em enviar se você estiver cadastrado no Quiz JW
                    será enviado um e-mail com as instruções para recuperação da sua senha.</p>
            </div>
        </div>
    )
}