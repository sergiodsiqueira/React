import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useEffect } from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY1ODM2NywiZXhwIjoxOTU5MjM0MzY3fQ.RwTlqBhQdV2cO8lwNNXeYbua9Aj0ypIarDnHQbz0V-Y'
const SUPABASE_URL = 'https://vaalfgimmhggodowiisw.supabase.co'

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('')
    const [listaDeMensagens, setListaDeMensagens] = React.useState([])
    
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

    useEffect(() => {
      supabaseClient
        .from('mensagens')
        .select('*')
        .order('id', { ascending: false })
        .then(({ data }) => {
          console.log('Dados da consulta:', data);
          setListaDeMensagens(data);
        });
    }, []);

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            de: '',
            texto: novaMensagem,
        };

        supabaseClient
        .from('mensagens')
        .insert([
          // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
          mensagem
        ])
        .then(({ data }) => {
          console.log('Criando mensagem: ', data);
          setListaDeMensagens([
            data[0],
            ...listaDeMensagens,
          ]);
        });

        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundImage: `url(https://img.wallpapersafari.com/desktop/1920/1080/28/44/ZmGYfu.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['700']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700]/90,
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    <MessageList mensagens={listaDeMensagens} />
 
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {const valor = event.target.value
                                                  setMensagem(valor)}}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Mensagem..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Talks
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    const DataHora = new Date();
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                
                                {(DataHora.toLocaleDateString() +' '+ DataHora.toLocaleTimeString())}
                            </Text>
                        </Box>
                        {mensagem.texto}
                    </Text>
                );
            })}
        </Box>
    )
}