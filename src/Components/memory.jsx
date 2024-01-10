import React, { useState } from 'react';
import mem1 from '../Assests/memoryimage1.png';
import mem2 from '../Assests/memoryimage2.png';
import mem3 from '../Assests/memoryimage3.png';
import mem4 from '../Assests/memoryimage4.png';
import mem5 from '../Assests/memoryimage5.png';
import mem6 from '../Assests/memoryimage6.png';
import mem7 from '../Assests/memoryimage7.png';
import mem8 from '../Assests/memoryimage8.png';
import mem9 from '../Assests/memoryimage9.png';
import mem10 from '../Assests/memoryimage10.png';
import '../Styles/memorygame.css';

function Memory() {
  const [items, setItems] = useState([
    { id: 1, img: mem1, stat: 'normal' },
    { id: 1, img: mem1, stat: 'normal' },
    { id: 2, img: mem2, stat: 'normal' },
    { id: 2, img: mem2, stat: 'normal' },
    { id: 3, img: mem3, stat: 'normal' },
    { id: 3, img: mem3, stat: 'normal' },
    { id: 4, img: mem4, stat: 'normal' },
    { id: 4, img: mem4, stat: 'normal' },
    { id: 5, img: mem5, stat: 'normal' },
    { id: 5, img: mem5, stat: 'normal' },
    { id: 6, img: mem6, stat: 'normal' },
    { id: 6, img: mem6, stat: 'normal' },
    { id: 7, img: mem7, stat: 'normal' },
    { id: 7, img: mem7, stat: 'normal' },
    { id: 8, img: mem8, stat: 'normal' },
    { id: 8, img: mem8, stat: 'normal' },
    { id: 9, img: mem9, stat: 'normal' },
    { id: 9, img: mem9, stat: 'normal' },
    { id: 10, img: mem10, stat: 'normal' },
    { id: 10, img: mem10, stat: 'normal' },
  ].sort(() => Math.random() - 0.5));

  const [prev, setPrev] = useState(-1);
  const [cnt, setCnt] = useState(0);
  const [res, setRes] = useState('');

  const isGameOver = () => {
    return items.every(item => item.stat === 'matched');
  };

  const handleClick = (id, index) => {
    const newItems = [...items];

    if (newItems[index].stat === 'flipped' || newItems[index].stat === 'matched') {
      return;
    }

    newItems[index].stat = 'flipped';

    if (prev !== -1 && newItems[prev].id === id) {
      newItems[index].stat = 'matched';
      newItems[prev].stat = 'matched';
      setPrev(-1);
    } else if (prev !== -1) {
      setTimeout(() => {
        newItems[index].stat = 'normal';
        newItems[prev].stat = 'normal';
        setItems(newItems);
        setPrev(-1);
      }, 1000);
    } else {
      setPrev(index);
    }

    setItems(newItems);
    setCnt(cnt + 1);

    if (isGameOver()) {
      const result = `You have completed this game in ${parseInt(cnt / 2)} moves`;
      setRes(result);
    }
  };

  const renderSquare = (index) => (
    <div className={items[index].stat} onClick={() => handleClick(items[index].id, index)}>
      <img src={items[index].img} alt="" />
    </div>
  );

  const shuffleItems = () => {
    const updatedItems = items.map(item => ({ ...item, stat: 'normal' }));
    const shuffledItems = updatedItems.sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
    setCnt(0);
    setRes('');
  };

  return (
    <div className="main">
    <div className="title">Let's Play Memory Game</div>
    <div className="mainsqaure">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className="row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
      </div>
      <div className="row">
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
      </div>
      <div className="row">
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
        {renderSquare(15)}
      </div>
      <div className="row">
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
      </div>
    </div>
    <div className='res'>{res}</div>
    <button className="btn" onClick={shuffleItems}>
      Reset
    </button>
  </div>
);
}

export default Memory;