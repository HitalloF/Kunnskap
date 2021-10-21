import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Game from './Components/Game';
import Header from './Components/Header';
import Home from './Components/Home';
import Training from './Components/Training';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="training" element={<Training />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
