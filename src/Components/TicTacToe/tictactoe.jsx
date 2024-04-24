import React from 'react'
import './tictactoe.css'
import circle_icon from '../Assets/Tictactoe/circle.png'
import cross_icon from '../Assets/Tictactoe/cross.png'

export const tictactoe = () => {
  return (
    <div className='container'>
        <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
        <div className="board">

        </div>
        <button className="reset">Reset</button>
    </div>
  )
}
