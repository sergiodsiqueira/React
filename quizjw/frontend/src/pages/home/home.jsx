import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.css';
import { Divider, Form, Label, Input, Button } from 'semantic-ui-react'

function Home() {
  const navigate = useNavigate();

  function Jogar(e) {
    e.preventDefault();
    navigate('/quiz')
  }

  return (
    <div className='container' styles={styles}>
      <div className='content' styles={styles}>
        <img src="https://raw.githubusercontent.com/sergiodsiqueira/Flutter/main/quizjw/lib/assets/logotipo.png" width="200"></img><br /><br />
        <h2 className='titulo'>Bem-vindo ao Quiz JW</h2>

        <Form className='frmLogin' action="#" method="post">
          <Form.Field className='inpEmail'>
            <label className='lblEmail'>Email</label>
            <Input icon='mail outline' iconPosition='left'/>            
          </Form.Field>

          <Form.Field className='inpSenha'>
            <label className='lblSenha'>Senha</label>
            <Input icon='unlock' iconPosition='left'/>            
          </Form.Field>

          <Button className='btnEntrar' onClick={Jogar}>  ENTRAR </Button>
        </Form>
        <div>
          <br/>
          <p>No momento ainda não existe autenticação, pode clicar direto no botão ENTRAR.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;