import { Box, Text, TextField, Image, Button, Icon } from '@skynexui/components';
import React, { useEffect, useState } from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['900']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const [username, setUsername] = useState('')
  const routers = useRouter()

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url(https://img.wallpapersafari.com/desktop/1920/1080/28/44/ZmGYfu.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '500px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: (appConfig.theme.colors.neutrals['999']/90),
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(props)=>{
              props.preventDefault();
              
              if (username == ''){
                alert('Login em branco!')
                props.preventDefault()
                return
              }

              const reqHttp = new Request(`https://api.github.com/users/${username}`)
              fetch(reqHttp)
                .then((res)=>{
                  if (res.status === 200){
                    routers.push(`/chat?username=${username}`);                 
                  }else{
                    alert('Usuário não encontrado')
                  }
                } )               
            }}

            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Image 
              src='https://raw.githubusercontent.com/sergiodsiqueira/React/main/aluracord/pages/img/MininalChatIcon.png'
              styleSheet={{width:{xs: '80%', sm:'40%'}, marginBottom: '10px'}}
            />
            
            <Titulo tag="h2">Minimal Talks</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[700] }}>
              Bem-vindo
            </Text>

            <TextField
              fullWidth
              value={username}
              onChange={(event)=>{const valor = event.target.value;
                                  setUsername(valor)}}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            
            <Button //Botão de Login
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals[900],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            /> 

            <Text variant="body4" styleSheet={{ marginTop: '10px', marginBottom: '32px', color: appConfig.theme.colors.neutrals[700] }}>
              Atenção! Para fazer o login no Minimal Talks você deve usar o mesmo username do seu Github.
            </Text>        
            
          </Box>
          {/* Formulário */}
        </Box>
      </Box>
    </>
  );
}