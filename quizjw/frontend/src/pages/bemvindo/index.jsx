import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Image } from 'antd';
import './bemvindo.css';

const URL_ASSETS = import.meta.env.VITE_URL_ASSETS;

export default function BemVindo() {
    const navigate = useNavigate();

    function onSubmit() {
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='BVContainer'>
                <div className='imgBVLogo'>
                    <Image className='imgBVLogo' src={`${URL_ASSETS}/logotipo.png`} preview={false} />
                </div>

                <div className='divBemVindo'>
                    <p className='lblBVBemVindo'>Bem-vindo ao</p>
                    <p className='lblBVQuizJW'>Quiz JW</p>
                    <p className='txtBoasVindas'>Você está prestes a experimentar um
                        dos quizzes mais divertidos e desafiadores disponíveis.
                        Com a utilização da Inteligência Artificial, nosso aplicativo
                        gera perguntas personalizadas e complexas, tornando a sua
                        experiência única e empolgante. Divirta-se!</p>
                    <div className='divBVButton'>
                        <Button className='btnBVJogar' onClick={onSubmit}> JOGAR </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}