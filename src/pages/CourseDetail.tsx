import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CourseDetail.css';
import { coursesData } from '../data/courses';
import { Course, BaseCourse } from '../types/Course';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const courseId = parseInt(id || '1');
        const foundCourse = coursesData.find((c: BaseCourse) => c.id === courseId);
        
        if (foundCourse) {
          const courseWithDetails: Course = {
            ...foundCourse,
            modules: [
              {
                id: 1,
                title: "Módulo 1 - Introdução",
                duration: "5 horas",
                lessons: [
                  { id: 1, title: "Introdução ao curso", duration: "15 min", isFree: true },
                  { id: 2, title: "Preparando o ambiente", duration: "20 min", isFree: true },
                  { id: 3, title: "Primeiros passos", duration: "30 min", isFree: false },
                ]
              },
              {
                id: 2,
                title: "Módulo 2 - Fundamentos",
                duration: "10 horas",
                lessons: [
                  { id: 4, title: "Conceitos básicos", duration: "45 min", isFree: false },
                  { id: 5, title: "Práticas essenciais", duration: "60 min", isFree: false },
                  { id: 6, title: "Exercícios práticos", duration: "90 min", isFree: false },
                ]
              }
            ],
            requirements: [
              "Conhecimento básico de informática",
              "Computador com acesso à internet",
              "Disposição para aprender"
            ],
            goals: [
              "Dominar os conceitos fundamentais",
              "Desenvolver projetos práticos",
              "Aplicar o conhecimento em casos reais"
            ]
          };
          
          setCourse(courseWithDetails);
        }
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar o curso:', error);
        setLoading(false);
      }
    };

    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando detalhes do curso...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="error-container">
        <h2>Curso não encontrado</h2>
        <p>O curso que você está procurando não existe ou foi removido.</p>
        <Link to="/courses" className="btn-back">Voltar para Cursos</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-container container">
      <div className="course-header">
        <div className="course-header-content">
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          <div className="course-meta-detail">
            <span className="instructor">Instrutor: {course.instructor}</span>
            <span className="level">Nível: {course.level}</span>
            <span className="duration">Duração: {course.duration}</span>
            <span className="rating">Avaliação: ★ {course.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="course-image-detail">
          <img src={course.image} alt={course.title} />
        </div>
      </div>

      <div className="course-action">
        <div className="price-box">
          <span className="price-amount">R$ {course.price.toFixed(2)}</span>
          <button className="btn-enroll">Matricular-se Agora</button>
          <button className="btn-cart">Adicionar ao Carrinho</button>
        </div>
      </div>

      <div className="course-content">
        <div className="content-section">
          <h2>Conteúdo do Curso</h2>
          <div className="modules-accordion">
            {course.modules.map(module => (
              <div className="module-item" key={module.id}>
                <div 
                  className={`module-header ${activeModule === module.id ? 'active' : ''}`}
                  onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                >
                  <h3>{module.title}</h3>
                  <div className="module-meta">
                    <span>{module.duration}</span>
                    <span>{module.lessons.length} aulas</span>
                    <span className="toggle-icon">{activeModule === module.id ? '−' : '+'}</span>
                  </div>
                </div>
                
                {activeModule === module.id && (
                  <div className="module-content">
                    <ul className="lessons-list">
                      {module.lessons.map(lesson => (
                        <li key={lesson.id} className="lesson-item">
                          <div className="lesson-info">
                            <span className="lesson-title">{lesson.title}</span>
                            <span className="lesson-duration">{lesson.duration}</span>
                          </div>
                          {lesson.isFree && <span className="free-badge">Grátis</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="about-course">
          <h2>Sobre Este Curso</h2>
          
          <div className="requirements">
            <h3>Pré-requisitos</h3>
            <ul>
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          <div className="goals">
            <h3>O Que Você Vai Aprender</h3>
            <ul>
              {course.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 