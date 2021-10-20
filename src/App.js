import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './Components/Game';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
