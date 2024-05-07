import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FoodDelivery } from './Components/FoodDelivery/FoodDelivery';
import Tictactoe from './Components/TicTacToe/Tictactoe';
import { Home } from './Components/FoodDelivery/Pages/Home/Home'
import { Cart } from './Components/FoodDelivery/Pages/Cart/Cart'
import { PlaceOrder } from './Components/FoodDelivery/Pages/PlaceOrder/PlaceOrder'
import { Navbar } from './Components/FoodDelivery/NavBar/Navbar';
import Footer from './Components/FoodDelivery/Footer/Footer';
import LoginPopup from './Components/FoodDelivery/LoginPopup/LoginPopup'
import { useState } from 'react';

function App() {
	const [showLogin, setShowLogin] = useState(false);
  	return (
		<>
		{showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
		<div className='app'>
			<Navbar setShowLogin={setShowLogin}></Navbar>
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
					path='/react-portfolio/cart'
					element={<Cart />}
				/>
				<Route
					path='/react-portfolio/placeorder'
					element={<PlaceOrder />}
				/>
			</Routes>
			<Footer></Footer>
		</div>
		</>
  	);
}

export default App;

/*
<Route
	path='/react-portfolio/fooddelivery'
	element={<FoodDelivery/>}
/>
*/