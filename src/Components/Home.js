import React from 'react';
import logo from '../img/logo2.png';
import styles from './styles/Home.module.css';
const Home = () => {
  React.useEffect(() => {
    document.title = 'Kunnskap';
  }, []);

  return (
    <section>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <div className={styles.hometxt}>
          <h1>O que é Kunnskap Project?</h1>
          <p>
            Kunnskap Project (norueguês : conhecimento) é uma iniciativa sem
            fins lucrativos de graduandos em Engenharia de Minas da Universidade
            Federal de Pernambuco (UFPE) e Universidade Federal de Campina
            Grande (UFCG), que busca compartilhar conhecimento de forma prática,
            interativa e gratuita a respeito de diversas áreas da Mineração,
            assim como contribuir para a formação e qualificação dos alunos e
            profissionais.
            <br /> <br />O projeto começou em meio a pandemia do COVID-19 e
            temos feitos Live's semanais, Kunnskap Web, com temas diversos, que
            são transmitidas no nosso canal do YouTube, e que recentemente
            tornou-se projeto de extensão da UFPE. Atualmente o nosso projeto
            também conta com outros canais como: Kunnskap Class - para
            realização de vídeo aulas curtas e didáticas. Kunnskap Training -
            para realização de minicursos a abaixo custo e o valor adquirido nas
            inscrições é revertido em doações. Kunnskap Game - para realização
            de jogos virtuais entre cursos de Engenharia de Minas de diferentes
            Universidades do Brasil.
            <br />
            <br /> Kunnskap Explains - resumos semanais no Instagram.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
