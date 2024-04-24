import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1 className="title">Home Page</h1>
        <ul>
            <li>
                <Link to="/react-portfolio/">Home</Link>
            </li>
            <li>
                <Link to="/react-portfolio/tictactoe">TicTacToe</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home
