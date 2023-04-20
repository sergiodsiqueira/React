import {
  BrowserRouter,
  Route,
  Routes as RoutesDOM
} from "react-router-dom";

import Home from './pages/home/index';
import CadastroUsuario from "./pages/cadastro/index"
import RecuperarSenha from "./pages/recuperar/index";
import Quiz from './pages/quiz/index';
import BemVindo from "./pages/bemvindo/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDOM>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/recuperar" element={<RecuperarSenha />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/bemvindo" element={<BemVindo />} />
      </RoutesDOM>
    </BrowserRouter>
  )
}

export default Routes;