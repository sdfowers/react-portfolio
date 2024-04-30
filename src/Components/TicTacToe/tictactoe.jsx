import React, { useRef, useState } from 'react'
import './Tictactoe.css'

const Tictactoe = () => {
  return (
    <div className='container'>
        <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
        <Board></Board>
    </div>
  )
}

//Each square of the tictactoe board
function Square({value, onClick}) {
    return (
        <button className='square' onClick={onClick}>
            {value}
        </button>
    )
}

//Tictactoe board and logic
function Board({}) {
    //array of X or O (Default null value)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

    //On square click check for winner (return if found)
    //set squares to current isX value and change isX value
    const handleClick = (i) => {
        if (CalculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = isX ? 'X' : 'O'
        setSquares(squares)
        setIsX(!isX)
    }

    const winner = CalculateWinner(squares)
    let status

    if(winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next player: ${isX ? 'X' : 'O'}`
    }

    //Reset board starting values
    const resetBoard = () => {
        setIsX(true)
        setSquares(Array(9).fill(null))
    }

    return (
        <div container>
            <div className="board">
                <div className="board-row">
                    <Square value={squares[0]} onClick={() => handleClick(0)}></Square>
                    <Square value={squares[1]} onClick={() => handleClick(1)}></Square>
                    <Square value={squares[2]} onClick={() => handleClick(2)}></Square>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onClick={() => handleClick(3)}></Square>
                    <Square value={squares[4]} onClick={() => handleClick(4)}></Square>
                    <Square value={squares[5]} onClick={() => handleClick(5)}></Square>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onClick={() => handleClick(6)}></Square>
                    <Square value={squares[7]} onClick={() => handleClick(7)}></Square>
                    <Square value={squares[8]} onClick={() => handleClick(8)}></Square>
                </div>
                
            </div>
            <div className="status">{status}</div>
            <button className="reset" onClick={(resetBoard)}>Reset Board</button>
        </div>
    )
}

//Calculate the winner by checking current board value against all possible winning outcomes
//If a winner is found return with winning value else return null
function CalculateWinner(squares) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i]

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null
}

export default Tictactoe