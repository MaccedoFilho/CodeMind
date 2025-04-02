import React from 'react';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="animated-title">
            <span className="title-word">Minha</span>
            <span className="title-word">Conta</span>
          </h1>
          <p className="user-welcome">Bem-vindo ao seu painel de controle</p>
        </div>

        <div className="dashboard-content">
          <div className="progress-overview">
            <div className="progress-card">
              <i className="fas fa-book-open"></i>
              <h3>Cursos em Andamento</h3>
              <p>2 cursos</p>
            </div>
            <div className="progress-card">
              <i className="fas fa-certificate"></i>
              <h3>Certificados</h3>
              <p>1 certificado</p>
            </div>
            <div className="progress-card">
              <i className="fas fa-clock"></i>
              <h3>Horas Estudadas</h3>
              <p>24 horas</p>
            </div>
          </div>

          <div className="current-courses">
            <h2>Meus Cursos</h2>
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-progress">75%</div>
                <h3>JavaScript Avançado</h3>
                <p>12 de 16 aulas completadas</p>
                <button className="btn-continue">Continuar</button>
              </div>
              <div className="course-card">
                <div className="course-progress">30%</div>
                <h3>React do Zero</h3>
                <p>6 de 20 aulas completadas</p>
                <button className="btn-continue">Continuar</button>
              </div>
            </div>
          </div>

          <div className="achievements">
            <h2>Conquistas</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <i className="fas fa-star"></i>
                <h3>Primeira Aula</h3>
                <p>Completou sua primeira aula</p>
              </div>
              <div className="achievement-card">
                <i className="fas fa-trophy"></i>
                <h3>Primeiro Curso</h3>
                <p>Completou um curso inteiro</p>
              </div>
              <div className="achievement-card locked">
                <i className="fas fa-lock"></i>
                <h3>Expert</h3>
                <p>Complete 5 cursos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 