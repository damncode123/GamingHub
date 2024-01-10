import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Home from './Components/Dashboard';
import Games from './Components/games';
import About from './Components/About';
import Tictactoe from './Components/tictactoe';
import Memory from './Components/memory';
import Guessgame from './Components/guessgame';
import Connectfourdisc from './Components/connectfourdisc';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/games/tictactoe" element={<Tictactoe />} />
          <Route path="/games/memory" element={<Memory />} />
          <Route path="/games/guessgame" element={<Guessgame />} />
          <Route path="/games/connectfourdisc" element={<Connectfourdisc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
