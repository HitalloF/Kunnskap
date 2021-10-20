import React from 'react';
import styles from './styles/Game.module.css';

const Game = () => {
  return (
    <section className="container">
      <div className={styles.main}>
        <h1>Game</h1>
        <p>
          A primeira edição aconteceu virtualmente nos dias 06 a 09 de julho de
          2020 no canal do KUNNSKAP no YouTube, contando com a participação de
          14 universidades. A segunda edição ocorrou, nos dias 22 a 25 de
          fevereiro de 2021 com a expectativa de participação de 15
          universidades. Temos como nosso objetivo é transmitir conhecimento por
          meio de um game online entre as universidades, onde os times formados
          por estudantes de Engenharia de Minas deverão responder perguntas
          relacionadas à mineração e na grande final, as equipes finalistas
          deverão resolver um case. Em ambas edições contamos com o apoio e
          patrocínio da Vale Mineração, Orica, ABREMI e ANBEM, e mais uma vez
          queremos agradecer por confiar e apoiar o nosso projeto.
        </p>
      </div>
      <div className={styles.gamebox}>
        <h1>I Kunnskap GAME</h1>
        <p>Veja agora como se sairam!</p>
        <div className={styles.videos}>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=KwWuamuTTMo&ab_channel=Kunnskap"
            >
              DIA 1
            </a>
          </div>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=G0LL_IsGiKQ&ab_channel=Kunnskap"
            >
              DIA 2
            </a>
          </div>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=pr-CSCb4vYw&ab_channel=Kunnskap"
            >
              DIA 3
            </a>
          </div>
        </div>
        <div className={styles.videos}>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=IO7MXW2RfM0&ab_channel=Kunnskap"
            >
              FINAL
            </a>
          </div>
        </div>
      </div>
      <div className={styles.gamebox}>
        <h1>II Kunnskap GAME</h1>
        <p>Veja agora como se sairam!</p>

        <div className={styles.videos}>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=jIGYIGSGQc8&ab_channel=Kunnskap"
            >
              DIA 1
            </a>
          </div>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=WnHELF4HZ70&ab_channel=Kunnskap"
            >
              DIA 2
            </a>
          </div>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=kEj6Rk5bJy8&ab_channel=Kunnskap"
            >
              DIA 3
            </a>
          </div>
        </div>
        <div className={styles.videos}>
          <div className={styles.box}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=AE08k1JILGY&ab_channel=Kunnskap"
            >
              FINAL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
