import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.css';

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
        <button onClick={Jogar}>  ENTRAR </button>
      </div>
    </div>
  );
}

export default Home;