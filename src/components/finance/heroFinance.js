import React from 'react';
import VideoBackground from '../ui/Video/VideoBackground';
import { TypewriterEffect, TypewriterEffectSmooth } from '../ui/typewriterEffect/typewriter-effect';

const videoProps = [
  { src: '/assets/image/video3.mp4', type: 'video/mp4' }
];

const textShadowStyle = {
  textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)',
};

const words = [
  {
    text: "Empowering",
    
  },
  {
    text: "Tribal",
    
  },
  {
    text: "Development",
    
  },
  {
    text: "Through",
    
  },
  {
    text: "Financial",
    
  },
  {
    text: "Solutions",
    
  }
];

const heroFinance = () => {
  return (
    <section className='relative h-screen flex flex-col justify-center items-center overflow-hidden'>
      <VideoBackground videos={videoProps} />
      <div style={textShadowStyle}>
        <TypewriterEffectSmooth 
          className='text-white'
          words={words}
        />
      </div>
      <p
        className='text-xs text-center md:text-base lg:text-xl font-black text-slate-100'
        style={textShadowStyle}
      >
        Discover how fintech and indigenous knowledge are transforming tribal communities.
      </p>
    </section>
  );
}

export default heroFinance;
