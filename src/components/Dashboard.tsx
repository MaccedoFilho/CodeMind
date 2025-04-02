import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

interface EnrolledCourse {
  id: number;
  title: string;
  instructor: string;
  image: string;
  progress: number;
  lastAccessed: string;
}

interface UserProgress {
  coursesCompleted: number;
  lessonsWatched: number;
  certificatesEarned: number;
  totalHoursLearned: number;
}

const Dashboard: React.FC = () => {
  const [enrolledCourses] = useState<EnrolledCourse[]>([
    {
      id: 1,
      title: "Desenvolvimento Web Completo",
      instructor: "João Silva",
      image: "/images/curso-web.jpg",
      progress: 35,
      lastAccessed: "Ontem"
    },
    {
      id: 2,
      title: "JavaScript Moderno",
      instructor: "Maria Oliveira",
      image: "/images/curso-js.jpg",
      progress: 62,
      lastAccessed: "2 dias atrás"
    },
    {
      id: 3,
      title: "React para Iniciantes",
      instructor: "Pedro Santos",
      image: "/images/curso-react.jpg",
      progress: 18,
      lastAccessed: "Hoje"
    }
  ]);

  const [userProgress] = useState<UserProgress>({
    coursesCompleted: 2,
    lessonsWatched: 48,
    certificatesEarned: 1,
    totalHoursLearned: 26
  });

  const [activeTab, setActiveTab] = useState<'courses' | 'certificates' | 'settings'>('courses');

  return (
    <div className="dashboard-container container">
      <div className="dashboard-header">
        <div className="user-welcome">
          <h1 className="animated-title">
            <span className="title-word">Minha</span>
            <span className="title-word">Conta</span>
          </h1>
          <p>Bem-vindo ao seu painel de aprendizado</p>
        </div>
        
        <div className="progress-overview">
          <div className="progress-card">
            <span className="progress-number">{userProgress.coursesCompleted}</span>
            <span className="progress-label">Cursos Concluídos</span>
          </div>
          <div className="progress-card">
            <span className="progress-number">{userProgress.lessonsWatched}</span>
            <span className="progress-label">Aulas Assistidas</span>
          </div>
          <div className="progress-card">
            <span className="progress-number">{userProgress.certificatesEarned}</span>
            <span className="progress-label">Certificados</span>
          </div>
          <div className="progress-card">
            <span className="progress-number">{userProgress.totalHoursLearned}</span>
            <span className="progress-label">Horas de Aprendizado</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          Meus Cursos
        </button>
        <button 
          className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificates')}
        >
          Certificados
        </button>
        <button 
          className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Configurações
        </button>
      </div>
      
      <div className="dashboard-content">
        {activeTab === 'courses' && (
          <div className="my-courses">
            <div className="section-header">
              <h2>Meus Cursos</h2>
              <Link to="/courses" className="btn-browse">Explorar Mais Cursos</Link>
            </div>
            
            <div className="enrolled-courses">
              {enrolledCourses.map(course => (
                <div className="enrolled-course-card" key={course.id}>
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p className="instructor">{course.instructor}</p>
                    <div className="progress-bar-container">
                      <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <div className="course-meta">
                      <span className="progress-percent">{course.progress}% completo</span>
                      <span className="last-accessed">Último acesso: {course.lastAccessed}</span>
                    </div>
                  </div>
                  <Link to={`/learn/course/${course.id}`} className="btn-continue">Continuar</Link>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'certificates' && (
          <div className="certificates">
            <h2>Meus Certificados</h2>
            {userProgress.certificatesEarned > 0 ? (
              <div className="certificates-list">
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <span className="icon">🏆</span>
                  </div>
                  <div className="certificate-info">
                    <h3>Desenvolvimento Web Básico</h3>
                    <p>Concluído em 12/03/2023</p>
                  </div>
                  <button className="btn-download">Baixar PDF</button>
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <p>Você ainda não possui certificados. Complete um curso para ganhar seu primeiro certificado!</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="settings">
            <h2>Configurações da Conta</h2>
            <form className="settings-form">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" placeholder="Seu nome" defaultValue="Usuário Exemplo" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Seu email" defaultValue="usuario@exemplo.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Nova Senha</label>
                <input type="password" id="password" placeholder="Nova senha" />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirm-password">Confirmar Nova Senha</label>
                <input type="password" id="confirm-password" placeholder="Confirmar nova senha" />
              </div>
              
              <button type="submit" className="btn-save">Salvar Alterações</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 