import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.block} container `}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="game">GAME</NavLink>
        <NavLink to="training">TRAINING</NavLink>
        <NavLink to="comissaoorganizadora">COMISSÃO ORGANIZADORA</NavLink>
      </nav>
    </header>
  );
};

export default Header;
