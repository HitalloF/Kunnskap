import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Header.module.css';
import logo from '../img/logo2.png';
import useMedia from '../Hooks/useMedia';
const Header = () => {
  const mobile = useMedia('(max-width:40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.boxnav}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}

        <nav
          className={`${mobile ? styles.navMobile : styles.block} ${
            mobileMenu && styles.navMobileActive
          } container `}
        >
          <NavLink to="/">HOME</NavLink>
          <NavLink
            activeStyle={{
              color: '#263ca8',
              textShadow: '2px 2px 8px #ff7134',
            }}
            to="game"
          >
            GAME
          </NavLink>
          <NavLink
            activeStyle={{
              color: '#263ca8',
              textShadow: '2px 2px 8px #ff7134',
            }}
            to="training"
          >
            TRAINING
          </NavLink>
          {/* <NavLink
            activeStyle={{
              color: '#263ca8',
              textShadow: '2px 2px 8px #ff7134',
            }}
            to="comissaoorganizadora"
          >
            COMISSÃO ORGANIZADORA
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
