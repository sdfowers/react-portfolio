import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import tictactoe from './Components/TicTacToe/tictactoe';
import home from './Components/Home/home'

function App() {
  return (
    <div>
      <h1>hi</h1>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<home/>}
          />
          <Route
            path="/tictactoe"
            element={<tictactoe/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
