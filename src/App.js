import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Tictactoe from './Components/TicTacToe/Tictactoe';
import Home from './Components/Home/home'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/react-portfolio/"
            element={<Home />}
          />
          <Route
            path="/react-portfolio/tictactoe"
            element={<Tictactoe />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
