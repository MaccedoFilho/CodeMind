import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';

interface Course {
  id: number;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

const Courses: React.FC = () => {
  const [courses] = useState<Course[]>([
    {
      id: 1,
      title: "Java Básico",
      instructor: "Ana Rodrigues",
      level: "Iniciante",
      duration: "50 horas",
      description: "Aprenda os fundamentos da linguagem Java, incluindo sintaxe básica, tipos de dados, estruturas de controle, arrays e introdução à programação orientada a objetos.",
      image: "/images/curso-java-basico.jpg",
      price: 34.90,
      rating: 4.8
    },
    {
      id: 2,
      title: "Java POO",
      instructor: "Ana Rodrigues",
      level: "Intermediário",
      duration: "55 horas",
      description: "Domine a Programação Orientada a Objetos em Java: classes, objetos, herança, polimorfismo, encapsulamento, interfaces e tratamento de exceções.",
      image: "/images/curso-java-poo.jpg",
      price: 44.90,
      rating: 4.7
    },
    {
      id: 3,
      title: "Java com Spring",
      instructor: "Ana Rodrigues",
      level: "Avançado",
      duration: "65 horas",
      description: "Desenvolva aplicações profissionais com Spring Framework: Spring Boot, Spring MVC, Spring Data JPA, Spring Security e microsserviços.",
      image: "/images/curso-java-spring.jpg",
      price: 54.90,
      rating: 4.9
    },
    {
      id: 4,
      title: "C Básico",
      instructor: "Roberto Alves",
      level: "Iniciante",
      duration: "50 horas",
      description: "Aprenda os fundamentos da linguagem C: sintaxe, tipos de dados, estruturas de controle, arrays, ponteiros e introdução a funções.",
      image: "/images/curso-c-basico.jpg",
      price: 34.90,
      rating: 4.8
    },
    {
      id: 5,
      title: "C Avançado",
      instructor: "Roberto Alves",
      level: "Intermediário",
      duration: "55 horas",
      description: "Aprofunde-se em C com estruturas de dados, alocação dinâmica de memória, manipulação de arquivos, recursão e otimização de código.",
      image: "/images/curso-c-avancado.jpg",
      price: 44.90,
      rating: 4.7
    },
    {
      id: 6,
      title: "C para Sistemas",
      instructor: "Roberto Alves",
      level: "Avançado",
      duration: "65 horas",
      description: "Desenvolva aplicações de sistema com C: programação de baixo nível, desenvolvimento de drivers, otimização de performance e integração com SO.",
      image: "/images/curso-c-sistemas.jpg",
      price: 54.90,
      rating: 4.9
    },
    {
      id: 7,
      title: "Python Básico",
      instructor: "Carlos Mendes",
      level: "Iniciante",
      duration: "50 horas",
      description: "Aprenda os fundamentos do Python: sintaxe, tipos de dados, estruturas de controle, funções, módulos e programação básica.",
      image: "/images/curso-python-basico.jpg",
      price: 34.90,
      rating: 4.8
    },
    {
      id: 8,
      title: "Python Avançado",
      instructor: "Carlos Mendes",
      level: "Intermediário",
      duration: "55 horas",
      description: "Aprofunde-se em Python com programação orientada a objetos, decoradores, geradores, tratamento de exceções e bibliotecas avançadas.",
      image: "/images/curso-python-avancado.jpg",
      price: 44.90,
      rating: 4.7
    },
    {
      id: 9,
      title: "Python para Data Science",
      instructor: "Carlos Mendes",
      level: "Avançado",
      duration: "65 horas",
      description: "Domine análise de dados com Python: Pandas, NumPy, Matplotlib, Scikit-learn e projetos práticos de ciência de dados.",
      image: "/images/curso-python-data.jpg",
      price: 54.90,
      rating: 4.9
    },
    {
      id: 10,
      title: "JavaScript Essencial",
      instructor: "Maria Oliveira",
      level: "Iniciante",
      duration: "50 horas",
      description: "Domine os fundamentos do JavaScript: sintaxe moderna, ES6+, manipulação do DOM, eventos, promises, async/await e boas práticas.",
      image: "/images/curso-javascript.jpg",
      price: 34.90,
      rating: 4.8
    },
    {
      id: 11,
      title: "TypeScript Profissional",
      instructor: "Maria Oliveira",
      level: "Intermediário",
      duration: "55 horas",
      description: "Aprenda TypeScript e leve seu JavaScript ao próximo nível: tipos, interfaces, generics, decorators, e integração com ferramentas modernas.",
      image: "/images/curso-typescript.jpg",
      price: 44.90,
      rating: 4.7
    },
    {
      id: 12,
      title: "React Avançado",
      instructor: "Maria Oliveira",
      level: "Avançado",
      duration: "65 horas",
      description: "Desenvolva aplicações profissionais com React: Hooks, Context, Redux, TypeScript, testes, otimização de performance e deploy.",
      image: "/images/curso-react-avancado.jpg",
      price: 54.90,
      rating: 4.9
    },
    {
      id: 13,
      title: "Oracle Database Completo",
      instructor: "Ricardo Oliveira",
      level: "Iniciante a Avançado",
      duration: "65 horas",
      description: "Aprenda Oracle Database desde o básico até administração avançada, PL/SQL, otimização e segurança.",
      image: "/images/curso-oracle.jpg",
      price: 59.90,
      rating: 4.9
    },
    {
      id: 14,
      title: "PostgreSQL Profissional",
      instructor: "Amanda Silva",
      level: "Intermediário",
      duration: "55 horas",
      description: "Domine PostgreSQL, incluindo administração, backup, replicação, queries avançadas e otimização.",
      image: "/images/curso-postgresql.jpg",
      price: 44.90,
      rating: 4.8
    },
    {
      id: 15,
      title: "MySQL do Zero ao Avançado",
      instructor: "Lucas Mendes",
      level: "Iniciante a Avançado",
      duration: "60 horas",
      description: "Aprenda MySQL, modelagem de dados, queries complexas, stored procedures e otimização de performance.",
      image: "/images/curso-mysql.jpg",
      price: 49.90,
      rating: 4.7
    },
    {
      id: 16,
      title: "Lógica de Programação",
      instructor: "Pedro Santos",
      level: "Iniciante",
      duration: "50 horas",
      description: "Aprenda os fundamentos da lógica de programação: pensamento lógico, fluxogramas, pseudocódigo, variáveis, condicionais e loops.",
      image: "/images/curso-logica.jpg",
      price: 34.90,
      rating: 4.8
    },
    {
      id: 17,
      title: "Algoritmos Fundamentais",
      instructor: "Pedro Santos",
      level: "Intermediário",
      duration: "55 horas",
      description: "Domine os principais algoritmos e estruturas de dados: arrays, listas, pilhas, filas, árvores, ordenação e busca.",
      image: "/images/curso-algoritmos.jpg",
      price: 44.90,
      rating: 4.9
    },
    {
      id: 18,
      title: "HTML5 e CSS3 Completo",
      instructor: "Pedro Santos",
      level: "Iniciante a Intermediário",
      duration: "60 horas",
      description: "Desenvolva sites modernos e responsivos com HTML5 e CSS3: semântica, flexbox, grid, animações, e design responsivo.",
      image: "/images/curso-html-css.jpg",
      price: 44.90,
      rating: 4.8
    }
  ]);

  const [filter, setFilter] = useState('');

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(filter.toLowerCase()) ||
    course.instructor.toLowerCase().includes(filter.toLowerCase()) ||
    course.level.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="courses-container container">
      <h1 className="animated-title">
        {["Nossos", "Cursos"].map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            <span className="title-word">
              {word.split('').map((letter, letterIndex) => (
                <span 
                  key={letterIndex} 
                  className="title-letter"
                  style={{ animationDelay: `${(wordIndex * word.length + letterIndex) * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            {wordIndex === 0 && <span className="title-space">&nbsp;</span>}
          </React.Fragment>
        ))}
      </h1>
      
      <div className="filter-section">
        <input 
          type="text" 
          placeholder="Buscar cursos..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <div className="course-overlay">
                <div className="overlay-content">
                  <span className="course-level">
                    <i className="fas fa-signal-alt"></i>
                    {course.level}
                  </span>
                  <span className="course-duration">
                    <i className="fas fa-clock"></i>
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
            <div className="course-info">
              <h2>{course.title}</h2>
              <p className="instructor">
                <i className="fas fa-chalkboard-teacher"></i>
                {course.instructor}
              </p>
              <div className="course-meta">
                <span className="level">
                  <i className="fas fa-chart-line"></i>
                  {course.level}
                </span>
                <span className="duration">
                  <i className="fas fa-clock"></i>
                  {course.duration}
                </span>
              </div>
              <p className="description">{course.description}</p>
              <div className="course-footer">
                <span className="price">R$ {course.price.toFixed(2)}</span>
                <span className="rating">
                  <i className="fas fa-star"></i>
                  {course.rating.toFixed(1)}
                </span>
              </div>
              <Link to={`/course/${course.id}`} className="btn-details">
                <span>Ver Detalhes</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="no-courses">
          <div className="no-courses-content">
            <i className="fas fa-search-minus"></i>
            <h2>Ops! Nada encontrado</h2>
            <p>
              Não encontramos nenhum curso com "<span className="search-term">{filter}</span>"
            </p>
            <p className="suggestion">
              Tente buscar por:
              <ul>
                <li><i className="fas fa-graduation-cap"></i> Nome do curso</li>
                <li><i className="fas fa-chalkboard-teacher"></i> Nome do instrutor</li>
                <li><i className="fas fa-signal"></i> Nível do curso</li>
              </ul>
            </p>
            <button className="btn-clear-search" onClick={() => setFilter('')}>
              <i className="fas fa-redo"></i>
              Limpar busca
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses; 