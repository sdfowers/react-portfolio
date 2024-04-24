import React from 'react'
import './tictactoe.css'
import circle_icon from '../Assets/Tictactoe/circle.png'
import cross_icon from '../Assets/Tictactoe/cross.png'

const tictactoe = () => {
  return (
    <div className='container'>
        <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row2">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row3">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default tictactoe
