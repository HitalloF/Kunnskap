import React from 'react';
import styles from './styles/Training.module.css';
import ldn from '../img/training/logo-LDN.png';
import isp from '../img/training/logo-ISP.png';
import cpqp from '../img/training/logo-cpqp.png';
import mdp from '../img/training/logo-MDP.png';
const Training = () => {
  return (
    <section className="container">
      <div className={styles.training}>
        <div className={styles.trainingflex}>
          <div className={styles.box}>
            <h1>
              I Kunnskap Training <br />
              Lar do Nenem
            </h1>
            <img src={ldn} alt="" />
            <p>
              Inscrições: R$ 350,00
              <br />
              Doações Externas: R$ 184,19
              <br />
              Valor Arrecadado: R$ 534,19
            </p>
          </div>
          <div className={styles.box}>
            <h1>
              II Kunnskap Training <br />
              Instituto São Vicente de Paulo
            </h1>
            <img src={isp} alt="" />
            <p>
              Inscrições: R$ 450,00
              <br />
              Doações Externas: R$ 15,98
              <br />
              Valor Arrecadado: R$ 465,98
            </p>
          </div>
          <div className={styles.box}>
            <h1>
              III Kunnskap Training <br />
              Coberto Para Quem Precisa
            </h1>
            <img src={cpqp} alt="" />
            <p>
              Inscrições: R$ 640,00
              <br />
              Doações Externas: R$ 11,00
              <br />
              Valor Arrecadado: R$ 651,00
            </p>
          </div>
          <div className={styles.box}>
            <h1>
              IV Kunnskap Training <br />
              Movimento Mulheres de Peito
            </h1>
            <img src={mdp} alt="" />
            <p>
              Inscrições: R$ 270,00
              <br />
              Doações Externas: R$ 180,00
              <br />
              Valor Arrecadado: R$ 450,00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
