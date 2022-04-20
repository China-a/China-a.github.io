import React, {useState} from "react";
import Board from "./Board";
// import { useState } from "react";
import { calculateWinner } from "../CalculateWinner";

// This all you need to make the Tic Tac Toe game to work with out the time travel 
// let style = {
//     width: "200px",
//     margin:"20px auto"
// }

//  let Game = () => {
//     let [board, setBoard] = useState(Array(9).fill(null));
//     let [xIsNext, setXisNext] = useState(true);
//     let winner = calculateWinner(board)

//     let handleClicks = i => {
//         let instanceofboard = [...board];
//         //if user click unocupied square or if game is won, return 
//         if ( winner || instanceofboard[i]) return;
//         //Put an X or an O in the clicked square
//         instanceofboard[i] = xIsNext ? "X" : "O"; 
//         setBoard(instanceofboard);
//         setXisNext(!xIsNext);
//     }

//     let jumpTo = () => {

//     }

//     let renderMoves = () => {
//         return <button onClick={()=> setBoard(Array(9).fill(null))}>
//                     Start Game
//              </button>
//     }


//     return (
//         <div>
//         <Board  squares={board} onClick={handleClicks} />
//         <div style={style}> 
//         <p>{winner ? "Winner" + winner : "Next Player:" + (xIsNext ? "X" : "O")}</p>
//         {renderMoves()}
//         </div>
//         </div>
//     )
//  }

// This implements the time travel in Tic Tac Toe to allow the user to go back a move/moves
let style = {
    width: "200px",
    margin:"20px auto"
}
 let Game = () => {
    let [history, setHistory] = useState([Array(9).fill(null)]);
    let [stepNumber, setStepNumber] = useState(0);
    let [xIsNext, setXisNext] = useState(true);
    let winner = calculateWinner(history[stepNumber]);

    let handleClicks = i => {
        let timeInHistory = history.slice(0, stepNumber + 1);
        let current = timeInHistory[stepNumber];
        let squares = [...current];
        //if user click unocupied square or if game is won, return 
        if ( winner || squares[i]) return;
        //Put an X or an O in the clicked square
        squares[i] = xIsNext ? "X" : "O"; 
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length)
        setXisNext(!xIsNext);
    }

    let jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0 )
    }

    let renderMoves = () => (
        history.map((_step, move) => {
            let destination = move ? `Go to move ${move}` : `Start Game`;
        
            return ( 
                <li key={move} >

                <button onClick={() => jumpTo(move)}>
                   {destination}
                </button>
                </li>
        )
       }) 
    )


    return (
        <div>
        <Board  squares={history[stepNumber]} onClick={handleClicks} />
        <div style={style}> 
        <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
        {renderMoves()}
        </div>
        </div>
    )
 }


 export default Game