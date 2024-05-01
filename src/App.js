import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { FoodDelivery } from './Components/FoodDelivery/FoodDelivery';
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
          <Route
            path='/react-portfolio/fooddelivery'
            element={<FoodDelivery/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
