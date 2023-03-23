import {
  BrowserRouter,
  Route,
  Routes as RoutesDOM
} from "react-router-dom";

import Home from './pages/home/home'
import Quiz from './pages/quiz/quiz'

const Routes = function () {
  return (
      <BrowserRouter>
          <RoutesDOM>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
          </RoutesDOM>
      </BrowserRouter>
  )
}

export default Routes;