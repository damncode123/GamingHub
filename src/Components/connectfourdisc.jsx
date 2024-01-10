import React, { useState } from 'react';
import '../Styles/connectfourdots.css';
import red from '../Assests/reddisc.png';
import black from '../Assests/blackdisc.png';

const Connectfourdisc = () => {
  const initialBoard = Array.from({ length: 7 }, () => Array(7).fill(''));
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(initialBoard);
  const [curPlayer, setCurPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  const handleMove = (column) => {
    if (gameOver) return;

    const newBoard = board.map(row => [...row]);
    const row = findEmptyRow(newBoard, column);
    
    if (row !== -1) {
      newBoard[row][column] = curPlayer;
      setBoard(newBoard);
      checkWinner(newBoard, row, column);
      setCurPlayer(curPlayer === 'X' ? 'O' : 'X');
    }
  };

  const findEmptyRow = (board, column) => {
    for (let i = 6; i >= 0; i--) {
      if (board[i][column] === '') {
        return i;
      }
    }
    return -1;
  };

  const checkWinner = (board, row, column) => {
    const directions = [
      [0, 1],  // Horizontal
      [1, 0],  // Vertical
      [1, 1],  // Diagonal /
      [1, -1], // Diagonal \
    ];
  
    for (const [dr, dc] of directions) {
      let count = 1; // Count of consecutive discs
      count += countDirection(board, row, column, dr, dc); // Check in one direction
      count += countDirection(board, row, column, -dr, -dc); // Check in opposite direction
  
      if (count >= 4) {
        setGameOver(true);
        setWinner(curPlayer);
        // console.log(`Player ${curPlayer === 'X' ? 'RED' : 'BLACK'} wins!`);
        return;
      }
    }
  
    // Check if the board is full and declare a draw
    if (isBoardFull(board)) {
      setGameOver(true);
      console.log("It's a draw!");
    }
  };
  
  const countDirection = (board, row, column, dr, dc) => {
    const player = board[row][column];
    let count = 0;
    let r = row + dr;
    let c = column + dc;
  
    while (r >= 0 && r < 7 && c >= 0 && c < 7 && board[r][c] === player) {
      count++;
      r += dr;
      c += dc;
    }
  
    return count;
  };
  
  const isBoardFull = (board) => {
    return board.every(row => row.every(cell => cell !== ''));
  };
  const resetGame = () => {
    setWinner(null);
    setBoard(initialBoard);
    setCurPlayer('X');
    setGameOver(false);
  };
  return (
    // Inside your JSX
<div className='mainc'>
  <div className='title'>It's time for Connecting Four Disc</div>
  <div className='board'>
    {board.map((row, i) => (
      <div key={i} className='row1'>
        {row.map((ch, j) => (
          <div key={j} className='slot' onClick={() => handleMove(j)}>
            {ch && <img src={ch === 'X' ? red : black} alt={ch} className='img'/>}
          </div>
        ))}
      </div>
    ))}
  </div>
  {gameOver && (
    <div className='game-over-message'>
      {winner ? `Player ${winner === 'X' ? 'RED' : 'BLACK'} wins!` : "It's a draw!"}
    </div>
  )}
  <button className='btn2' onClick={resetGame}>
        Reset
  </button>
</div>

  );
};

export default Connectfourdisc ;
