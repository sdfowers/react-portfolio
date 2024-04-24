import React from 'react'
import { Link } from "react-router-dom"

export const home = () => {
  return (
    <div>
        <h1 className="title">Home Page</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/tictactoe">TicTacToe</Link>
            </li>
        </ul>
    </div>
  )
}
