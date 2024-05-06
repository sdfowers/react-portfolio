import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FoodDelivery } from './Components/FoodDelivery/FoodDelivery';
import Tictactoe from './Components/TicTacToe/Tictactoe';
import Home from './Components/Home/home'
import { Cart } from './Components/FoodDelivery/Pages/Cart/Cart'
import { PlaceOrder } from './Components/FoodDelivery/Pages/PlaceOrder/PlaceOrder'

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
				<Route
					path='/react-portfolio/fooddelivery/cart'
					element={<Cart />}
				/>
				<Route
					path='/react-portfolio/fooddelivery/placeorder'
					element={<PlaceOrder />}
				/>
				</Routes>
		</Router>
    </div>
  );
}

export default App;
