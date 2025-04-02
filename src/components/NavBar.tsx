import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          CodeMind
        </Link>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li style={{"--i": 1} as React.CSSProperties}>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li style={{"--i": 2} as React.CSSProperties}>
              <Link 
                to="/courses" 
                className={isActive('/courses') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
            </li>
            <li style={{"--i": 3} as React.CSSProperties}>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li style={{"--i": 4} as React.CSSProperties}>
              <Link 
                to="/dashboard" 
                className={isActive('/dashboard') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Minha Conta
              </Link>
            </li>
            <li style={{"--i": 5} as React.CSSProperties}>
              <Link 
                to="/help"
                className={isActive('/help') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Ajuda
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar; 