import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CoursePlayer from '../components/CoursePlayer';
import '../styles/LessonPage.css';

// Tipos
interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  transcript: string;
  moduleId: number;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

interface Course {
  id: number;
  title: string;
  modules: Module[];
}

const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string, lessonId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => {
      //dados de exemplo
      const mockCourse: Course = {
        id: parseInt(courseId || '1'),
        title: "Desenvolvimento Web Completo",
        modules: [
          {
            id: 1,
            title: "Introdução ao Desenvolvimento Web",
            lessons: [
              {
                id: 1,
                title: "O que é desenvolvimento web?",
                duration: "15 min",
                videoUrl: "/videos/lesson1.mp4",
                transcript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
                moduleId: 1
              },
              {
                id: 2,
                title: "Ferramentas necessárias",
                duration: "20 min",
                videoUrl: "/videos/lesson2.mp4",
                transcript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
                moduleId: 1
              },
            ]
          },
          {
            id: 2,
            title: "HTML5 Fundamental",
            lessons: [
              {
                id: 3,
                title: "Estrutura básica do HTML",
                duration: "25 min",
                videoUrl: "/videos/lesson3.mp4",
                transcript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
                moduleId: 2
              },
              {
                id: 4,
                title: "Tags principais e semântica",
                duration: "40 min",
                videoUrl: "/videos/lesson4.mp4",
                transcript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
                moduleId: 2
              },
            ]
          }
        ]
      };
      
      setCourse(mockCourse);
      
      const currentLessonId = parseInt(lessonId || '1');
      let foundLesson: Lesson | null = null;
      
      for (const module of mockCourse.modules) {
        const lesson = module.lessons.find(l => l.id === currentLessonId);
        if (lesson) {
          foundLesson = lesson;
          break;
        }
      }
      
      if (foundLesson) {
        setCurrentLesson(foundLesson);
      }
      
      setProgress([1, 2]); 
      
      setLoading(false);
    }, 800);
  }, [courseId, lessonId]);

  const handleMarkComplete = () => {
    if (currentLesson) {
      setProgress(prev => {
        if (!prev.includes(currentLesson.id)) {
          return [...prev, currentLesson.id];
        }
        return prev;
      });
      alert('Lição marcada como concluída!');
    }
  };

  const isLessonComplete = (lessonId: number) => {
    return progress.includes(lessonId);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando aula...</p>
      </div>
    );
  }

  if (!course || !currentLesson) {
    return (
      <div className="error-container">
        <h2>Aula não encontrada</h2>
        <p>A aula que você está procurando não existe ou foi removida.</p>
        <Link to="/dashboard" className="btn-back">Voltar para Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="lesson-page-container container">
      <div className="lesson-page-header">
        <div className="course-navigation">
          <Link to={`/course/${courseId}`} className="back-to-course">
            &lt; Voltar para {course.title}
          </Link>
        </div>
      </div>

      <div className="lesson-content">
        <div className="lesson-main">
          <CoursePlayer 
            videoUrl={currentLesson.videoUrl}
            lessonTitle={currentLesson.title}
            transcript={currentLesson.transcript}
            onComplete={handleMarkComplete}
          />
        </div>
        
        <div className="course-sidebar">
          <h2>Conteúdo do Curso</h2>
          
          <div className="modules-list">
            {course.modules.map(module => (
              <div className="sidebar-module" key={module.id}>
                <h3 className="module-title">{module.title}</h3>
                
                <ul className="sidebar-lessons">
                  {module.lessons.map(lesson => (
                    <li 
                      key={lesson.id} 
                      className={`sidebar-lesson ${lesson.id === currentLesson.id ? 'active' : ''} ${isLessonComplete(lesson.id) ? 'completed' : ''}`}
                    >
                      <Link to={`/learn/course/${courseId}/lesson/${lesson.id}`}>
                        <div className="lesson-info">
                          <span className="lesson-status">
                            {isLessonComplete(lesson.id) ? '✓' : lesson.id === currentLesson.id ? '►' : ''}
                          </span>
                          <span className="lesson-title">{lesson.title}</span>
                        </div>
                        <span className="lesson-duration">{lesson.duration}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage; 