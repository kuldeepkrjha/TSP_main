// src/components/VideoBackground.tsx
import React from 'react';
import './VideoBackground.css'; 

type VideoBackgroundProp = {
  videos: {
  src: string;
  type: string; 
}[],
  
}

const VideoBackground: React.FC<VideoBackgroundProp> = ({
videos
}) => {
  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline className="video">
      {videos.map((video, index) => (
          <source key={index} src={video.src} type={video.type} />
        ))}
        
      </video>
    </div>
  );
};

export default VideoBackground;
