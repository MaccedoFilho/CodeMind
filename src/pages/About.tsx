import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="about-header">
          <div className="section-header">
            <i className="fas fa-bullseye"></i>
            <h1 className="animated-title">
              <span className="title-word">
                {Array.from("Nossa").map((letter, index) => (
                  <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                  </span>
                ))}
              </span>
              <span className="title-word">
                {Array.from("Missão").map((letter, index) => (
                  <span key={index} className="letter" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
          </div>
          <div className="header-decoration">
            <div className="line"></div>
            <i className="fas fa-code"></i>
            <div className="line"></div>
          </div>
        </div>

        <section className="about-section">
          <div className="section-header">
            <i className="fas fa-info-circle"></i>
            <h2>
              <span className="title-word">Sobre</span>
              <span className="title-word">Nós</span>
            </h2>
          </div>
          <div className="content-wrapper">
            <p className="animated-text">
              No CodeMind, acreditamos que o conhecimento é a chave para transformar vidas — e que aprender tecnologia não precisa ser complicado, entediante ou inacessível.
            </p>
            <p className="animated-text">
              Nossa missão é capacitar pessoas de todos os níveis a dominarem o mundo da programação e da tecnologia, oferecendo cursos que combinam conteúdo atualizado, metodologia prática e uma abordagem centrada em resultados reais.
            </p>
            <p className="animated-text">
              Queremos formar profissionais prontos para o mercado, que saibam aplicar o que aprendem, resolver problemas do mundo real e construir soluções com propósito.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <i className="fas fa-users"></i>
            <h2>Nossa Equipe</h2>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="member-overlay">
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
              <h3>Gustavo Braga</h3>
              <p className="member-role">Desenvolvedor Frontend</p>
              <p className="member-description">Especialista em React e TypeScript</p>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="member-overlay">
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
              <h3>Ricardo Macedo</h3>
              <p className="member-role">Desenvolvedor Backend</p>
              <p className="member-description">Especialista em Node.js e APIs</p>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="member-overlay">
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
              <h3>Pedro Santos</h3>
              <p className="member-role">Designer UX/UI</p>
              <p className="member-description">Especialista em Design de Interfaces</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <i className="fas fa-history"></i>
            <h2>Nossa História</h2>
          </div>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>O Início</h3>
                <p>O CodeMind surgiu com o propósito de tornar o ensino de tecnologia mais acessível, prático e de alta qualidade.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Nossa Evolução</h3>
                <p>Fundado por desenvolvedores com experiência prática, o CodeMind foi criado para formar profissionais completos.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Hoje</h3>
                <p>Mais do que uma plataforma de cursos, somos um ambiente de aprendizado contínuo, comprometido com o desenvolvimento de mentes preparadas para os desafios da tecnologia.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 