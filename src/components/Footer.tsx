import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <Link to="/" className="brand-logo">
              CodeMind
            </Link>
            <p>Mais que uma plataforma, um ecossistema de mentes afiadas.</p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="github-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="linkedin-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section links-section">
            <h3>Links Rápidos</h3>
            <nav>
              <Link to="/">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
              <Link to="/sobre">
                <i className="fas fa-info-circle"></i>
                <span>Sobre</span>
              </Link>
              <Link to="/ajuda">
                <i className="fas fa-question-circle"></i>
                <span>Ajuda</span>
              </Link>
            </nav>
          </div>
          
          <div className="footer-section contact-section">
            <h3>Contato</h3>
            <div className="contact-info">
              <a href="mailto:contato@codemind.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>contato@codemind.com</span>
              </a>
              <a href="tel:0000000000" className="contact-item">
                <i className="fas fa-phone"></i>
                <span>(00) 00000-0000</span>
              </a>
              <div className="contact-item location">
                <i className="fas fa-map-marker-alt"></i>
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 