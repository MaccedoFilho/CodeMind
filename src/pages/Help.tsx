import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Help.css';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="help-container">
      <div className="container">
        <div className="help-header">
          <h1 className="animated-title">
            <span className="title-word">Suporte</span>
          </h1>
        </div>

        <div className="help-sections">
          <section className="support-section">
            <div className="support-options">
              <div className="support-card">
                <div className="support-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Chat ao Vivo</h3>
                <p>Fale com nossa equipe em tempo real</p>
                <span className="support-detail">Tempo médio de resposta: 5 min</span>
                <button className="btn-support" onClick={() => window.open('/chat', '_blank')}>
                  Iniciar Chat
                </button>
              </div>

              <div className="support-card">
                <div className="support-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>E-mail</h3>
                <p>Envie sua dúvida para nossa equipe</p>
                <span className="support-detail">Resposta em até 24h</span>
                <button className="btn-support" onClick={() => window.location.href = 'mailto:contato@codemind.com'}>
                  Enviar E-mail
                </button>
              </div>

              <div className="support-card">
                <div className="support-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Base de Conhecimento</h3>
                <p>Explore nossos artigos e tutoriais</p>
                <span className="support-detail">+100 artigos disponíveis</span>
                <button className="btn-support" onClick={() => window.location.href = '/artigos'}>
                  Ver Artigos
                </button>
              </div>
            </div>
          </section>

          <section className="quick-links-section">
            <h2>Links Rápidos</h2>
            <div className="quick-links-grid">
              <Link to="/guia-iniciante" className="quick-link-card">
                <div className="quick-link-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <span>Guia do Iniciante</span>
              </Link>

              <Link to="/certificados" className="quick-link-card">
                <div className="quick-link-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <span>Certificados</span>
              </Link>

              <Link to="/configuracoes" className="quick-link-card">
                <div className="quick-link-icon">
                  <i className="fas fa-cog"></i>
                </div>
                <span>Configurações da Conta</span>
              </Link>

              <Link to="/app-mobile" className="quick-link-card">
                <div className="quick-link-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <span>App Mobile</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Help; 