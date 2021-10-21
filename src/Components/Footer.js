import React from 'react';
import styles from './styles/Footer.module.css';
import ufpe from '../img/logo-ufpe.png';
import ufcg from '../img/logo-ufcg.png';

const Footer = () => {
  return (
    <section className={styles.footerb}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.contao}>
            <h1>CONTATO</h1>
            <p>
              contato@kunnskap.com.br
              <br />
              (81)99942-8731
            </p>
          </div>
          <div className={styles.rede}>
            <h1>REALIZAÇÃO</h1>
            <div className={styles.realizacao}>
              <img src={ufpe} alt="" /> <img src={ufcg} alt="" />
            </div>
          </div>
          <div>
            <h1>REDES SOCIAIS</h1>
            <ul className={styles.redes}>
              <a href="https://www.instagram.com/_kunnskap/" target="_blank">
                <li>Instagram</li>
              </a>
              <a
                href="https://www.youtube.com/channel/UC4L2HOL-xBSn8D6XpWyROVA"
                target="_blank"
              >
                <li>Youtube</li>
              </a>
              <a
                href="https://br.linkedin.com/company/kunnskap-project"
                target="_blank"
              >
                <li>Linkedin</li>
              </a>
              <a
                href="https://chat.whatsapp.com/JjXB1STN9HQ9yPnrr8gAiw"
                target="_blank"
              >
                {' '}
                <li>Whatsapp</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
