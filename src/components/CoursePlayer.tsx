import React, { useState } from 'react';
import '../styles/CoursePlayer.css';

interface CoursePlayerProps {
  videoUrl: string;
  lessonTitle: string;
  transcript?: string;
  onComplete?: () => void;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ 
  videoUrl, 
  lessonTitle, 
  transcript,
  onComplete 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [showTranscript, setShowTranscript] = useState(false);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const simulateProgress = () => {
    if (isPlaying && currentTime < duration) {
      setTimeout(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            if (onComplete) onComplete();
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  if (isPlaying) {
    simulateProgress();
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value);
    setCurrentTime(newTime);
  };

  const handleVideoLoad = () => {
    setDuration(600);
  };

  return (
    <div className="course-player">
      <div className="video-container">
        <div 
          className="video-placeholder" 
          onClick={handlePlayPause}
          style={{ backgroundImage: `url(/images/video-placeholder.jpg)` }}
        >
          {!isPlaying && (
            <button className="play-button">
              <span className="play-icon">▶</span>
            </button>
          )}
        </div>
        
        <div className="video-controls">
          <div className="controls-row">
            <button className="control-button" onClick={handlePlayPause}>
              {isPlaying ? '❚❚' : '▶'}
            </button>
            
            <div className="time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            
            <div className="volume-control">
              <span className="volume-icon">🔊</span>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
            
            <button 
              className="transcript-button"
              onClick={() => setShowTranscript(!showTranscript)}
            >
              {showTranscript ? 'Esconder Transcrição' : 'Mostrar Transcrição'}
            </button>
          </div>
          
          <div className="progress-row">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="progress-slider"
            />
          </div>
        </div>
      </div>
      
      <div className="lesson-info">
        <h2>{lessonTitle}</h2>
      </div>
      
      {showTranscript && transcript && (
        <div className="transcript">
          <h3>Transcrição da Aula</h3>
          <div className="transcript-content">
            {transcript}
          </div>
        </div>
      )}
      
      <div className="lesson-actions">
        <button className="btn-previous">Aula Anterior</button>
        <button className="btn-next">Próxima Aula</button>
        <button className="btn-mark-complete" onClick={onComplete}>Marcar como Concluída</button>
      </div>
    </div>
  );
};

export default CoursePlayer; 