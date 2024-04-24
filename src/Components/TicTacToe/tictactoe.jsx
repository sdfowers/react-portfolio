import React, { useRef, useState } from 'react'
import './Tictactoe.css'
import circle_icon from '../Assets/Tictactoe/circle.png'
import cross_icon from '../Assets/Tictactoe/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

const Tictactoe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [imgIcon, imgIconSet] = useState(null);
    let winnerRef = useRef(null);

    const toggle = (e, num) => {
        if (lock == true) {
            return 0;
        }
        if (count%2 === 0) {
            //e.target.innerHTML = `<img src='${cross_icon}'>`;
            imgIconSet(cross_icon);
            data[num] = "x";
            setCount(++count);
        } else {
            //e.target=innerHTML = `<img src='${circle_icon}'>`;
            imgIconSet(circle_icon);
            data[num] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        //horizontal check
        for(let i = 0; i < 7; i += 3) {
            if(data[0 + i] === data[1 + i] && data[1 + i] === data[2 + i] && data[2 + i] !== "") {
                won(data[2 + i]);
            }
        }
        //vertical check
        for(let i = 0; i < 3; i++) {
            if(data[0 + i] === data[3 + i] && data[3 + i] === data[6 + i] && data[6 + i] !== "") {
                won(data[6 + i]);
            }
        }
        //diagonal check
        if(data[0] === data[4] && data[4] == data[8] && data[8] !== "") {
            won(data[8]);
        }
        if(data[3] === data[4] && data[4] == data[8] && data[6] !== "") {
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner === "x") {
            //winnerRef.current.innerHTML = `Congratulations: <img src=${cross_icon}>`
        } else {
            //winnerRef.current.innerHTML = `Congratulations: <img src=${circle_icon}>`
        }
    }

  return (
    <div className='container'>
        <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e)=>{toggle(e, 0)}}><img src={imgIcon}/></div>
                <div className="boxes" onClick={(e)=>{toggle(e, 1)}}><img src={imgIcon}/></div>
                <div className="boxes" onClick={(e)=>{toggle(e, 2)}}><img src={imgIcon}/></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e, 3)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e, 4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e, 5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e, 6)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e, 7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e, 8)}}></div>
            </div>
        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default Tictactoe
