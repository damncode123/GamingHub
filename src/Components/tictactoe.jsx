import React from 'react'
import { useState } from 'react';
import "../Styles/tictactoe.css";
// import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || calculateWinner(newBoard)) {
      return;
    }
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => (
    <div className="smallsquare1" onClick={() => handleClick(index)}>
      {board[index]}
    </div>
  );

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return board.every(square => square !== null);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : isBoardFull()
      ? 'It\'s a Draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className='main1'>
      <div className='title1'>Let's Play Tic Tac Toe</div>
      <div className='mainsqaure1'>
        <div className='row1'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='row1'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='row1'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="status1">{status}</div>
      <button className='btn1' onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;


// function Tictactoe() {
//   const [board,setBoard]=useState(Array(9).fill(null));
//   const [chance,setchance]=useState(true);
//   const CalculateWinner = (squares) => {
//       const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//       ];
//       for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//           return squares[a];
//         }
//       }
//       return null;
//     }
//     const handleClick = (index) => {
//     const newBoard = [...board];
//     if (newBoard[index] || CalculateWinner(newBoard)) {
//       return;
//     }
//     if (chance) {
//       newBoard[index] = 'O';
//     } else {
//       newBoard[index] = 'X';
//     }
//     setchance(!chance);
//     setBoard(newBoard);
//   };
//   const renderSquare =(index)=>{
//     return (
//       <div className='smallsquare' onClick={() => handleClick(index)}>
//         {board[index]}
//       </div>
//     );
//   }
//   const winner = CalculateWinner(board);
//   const status = winner?`Winner : ${winner}`:`Next Chance is of ${chance?'X':'O'}`
//   return (
//     <div className='main'>
//     <div className='title'>Let's Play Tic Tac Toe</div>
//     <div className='mainsqaure'>
//       <div className='firstrow'>
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className='secondrow'>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className='thirdrow'>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//     <div className="status">{status}</div>
//     <button className='btn' onClick={() => setBoard(Array(9).fill(null))}>
//       Reset
//      </button>
//     </div>
//   )
// }

// export default Tictactoe;


