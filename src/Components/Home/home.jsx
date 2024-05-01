import React from 'react'
import { Link } from "react-router-dom"
import './home.css'

const Home = () => {
  	return (
    	<div className='container'>
			<h1 className="title">Sean Fowers <span>React Portfolio</span></h1>
			<div className="link-list">
					<Link className="link" to="/react-portfolio/">Home</Link>
					<Link className="link" to="/react-portfolio/tictactoe">TicTacToe</Link>
					<Link className="link" to="/react-portfolio/fooddelivery">Food Delivery</Link>
			</div>
    	</div>
  )
}

export default Home
