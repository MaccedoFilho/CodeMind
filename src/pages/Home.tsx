import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="welcome-text">
          <h1 className="animated-title">
            <span className="letter">B</span>
            <span className="letter">e</span>
            <span className="letter">m</span>
            <span className="letter">-</span>
            <span className="letter">v</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">d</span>
            <span className="letter">o</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">a</span>
            <span className="letter">o</span>
            <span className="letter">&nbsp;</span>
            <span className="letter special">C</span>
            <span className="letter special">o</span>
            <span className="letter special">d</span>
            <span className="letter special">e</span>
            <span className="letter special">M</span>
            <span className="letter special">i</span>
            <span className="letter special">n</span>
            <span className="letter special">d</span>
          </h1>
        </div>
        <div className="container">
          <p className="hero-subtitle">
            <span className="highlight">Transforme seu futuro</span>
            &nbsp;através da&nbsp;
            <span className="highlight">programação</span>
            &nbsp;com nossos&nbsp;
            <span className="highlight">cursos especializados</span>
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="primary-button">
              Explorar Cursos
            </Link>
            <Link to="/about" className="secondary-button">
              Sobre Nós
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="features-title">
            <span className="feature-letter">P</span>
            <span className="feature-letter">o</span>
            <span className="feature-letter">r</span>
            <span className="feature-letter">&nbsp;</span>
            <span className="feature-letter">q</span>
            <span className="feature-letter">u</span>
            <span className="feature-letter">e</span>
            <span className="feature-letter">&nbsp;</span>
            <span className="feature-letter">e</span>
            <span className="feature-letter">s</span>
            <span className="feature-letter">c</span>
            <span className="feature-letter">o</span>
            <span className="feature-letter">l</span>
            <span className="feature-letter">h</span>
            <span className="feature-letter">e</span>
            <span className="feature-letter">r</span>
            <span className="feature-letter">&nbsp;</span>
            <span className="feature-letter">a</span>
            <span className="feature-letter">&nbsp;</span>
            <span className="feature-letter special">C</span>
            <span className="feature-letter special">o</span>
            <span className="feature-letter special">d</span>
            <span className="feature-letter special">e</span>
            <span className="feature-letter special">M</span>
            <span className="feature-letter special">i</span>
            <span className="feature-letter special">n</span>
            <span className="feature-letter special">d</span>
            <span className="feature-letter">?</span>
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="feature-content">
                <h3>
                  <span className="feature-text">Cursos</span>
                  <span className="feature-text">Atualizados</span>
                </h3>
                <p>Conteúdo sempre atualizado com as últimas tecnologias do mercado</p>
                <div className="feature-shine"></div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="feature-content">
                <h3>
                  <span className="feature-text">Comunidade</span>
                  <span className="feature-text">Ativa</span>
                </h3>
                <p>Aprenda e compartilhe conhecimento com outros desenvolvedores</p>
                <div className="feature-shine"></div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="feature-content">
                <h3>
                  <span className="feature-text">Certificação</span>
                </h3>
                <p>Receba certificados reconhecidos pelo mercado ao concluir os cursos</p>
                <div className="feature-shine"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Comece sua jornada hoje</h2>
              <p>Junte-se a milhares de alunos que já estão transformando suas carreiras</p>
              
              <div className="cta-stats">
                <div className="stat-item">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Alunos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Cursos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Satisfação</span>
                </div>
              </div>

              <div className="cta-benefits">
                <div className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Acesso vitalício aos cursos</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Suporte personalizado</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Certificado reconhecido</span>
                </div>
              </div>

              <Link to="/courses" className="cta-button">
                <span>Começar Agora</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="cta-animation">
              <div className="floating-elements">
                <div className="element html">
                  <i className="fab fa-html5"></i>
                </div>
                <div className="element database">
                  <i className="fas fa-database"></i>
                </div>
                <div className="element react">
                  <i className="fab fa-react"></i>
                </div>
                <div className="element node">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="element git">
                  <i className="fab fa-git-alt"></i>
                </div>
                <div className="element python">
                  <i className="fab fa-python"></i>
                </div>
                <div className="element java">
                  <i className="fab fa-java"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 