import React, { useState, useRef } from "react";
import { emailValidation } from '../../lib/library';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { Form, Input, Button, Alert, Modal } from 'antd';
import { sendResetRequest } from '../../services/user';
import './recuperar.css';

export default function RecuperarSenha() {
    const navigate = useNavigate();

    const inputRefEmail = useRef('');
    const [erro, setErro] = useState('');

    const handleCloseErro = () => {
        setErro('')
    };

    function onSubmit() {
        let email = inputRefEmail.current.input.value;

        if (!emailValidation(email)) {
            setErro('Email inválido ou em branco');
            return;
        }

        sendResetRequest(email).
            then((e) => {
                if (e) {
                    Modal.success({
                        title: 'Solicitação de recuperação enviada',
                        content: (
                            <div>
                                <p>Caso tenha um cadastro válido conosco</p>
                                <p>recebera no {pEmail}</p>
                                <p>as instruções para recuperação da senha.</p>
                            </div>
                        ),
                        onOk() { navigate('/') }
                    });
                }
            });
    }

    return (
        <div className="container">
            <div className='divRecSuperior'>
                <p className='lblRecRecuperar'>Recuperar Senha</p>
                <p className='lblRecQuizJW'>Quiz JW</p>
            </div>

            <div className='divRecCentral'>
                <Form className='frmRecLogin' name='basic' layout='vertical' autoComplete='off' onFinish={onSubmit}>

                    <p className='lblRecEmail'>Email</p>
                    <Input className='inpRecEmail' prefix={<MailOutlined />} status='' ref={inputRefEmail} onChange={handleCloseErro} />

                    <div className='divRecError'>
                        {erro != '' && (
                            <Alert className='alert' message={erro} type='error' closable afterClose={handleCloseErro} />
                        )}
                    </div>

                    <Button className='btnRecRecuperar' htmlType='submit'> ENVIAR </Button>
                </Form>
            </div>

            <div className='divRecInferior'>
                <p className='txtRecExplicacao'>Ao clicar em enviar se você estiver cadastrado no Quiz JW
                    será enviado um e-mail com as instruções para recuperação da sua senha.</p>
            </div>
        </div>
    )
}