import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="game">GAME</NavLink>
        <NavLink to="training">TRAINING</NavLink>
        <NavLink to="comissaoorganizadora">COMISSÃO ORGANIZADORA</NavLink>
      </nav>
    </div>
  );
};

export default Header;
