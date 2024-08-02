import React from 'react'
import VideoBackground from '../ui/Video/VideoBackground'
import { TypewriterEffect, TypewriterEffectSmooth } from '../ui/typewriterEffect/typewriter-effect';

const videoProps = [
  { src: '/assets/image/video3.mp4', type: 'video/mp4' }
];
// Empowering Tribal  Through Financial Solutions
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
    // className: " text-black ",
  },
  {
    text: "Financial",
  },
  {
    text: "Solutions"
  }
]

const heroFinance
 = () => {
  return (
    <section className='relative h-screen flex flex-col justify-center items-center overflow-hidden'>
      <VideoBackground videos={videoProps}/>
      <TypewriterEffectSmooth className=' text-yellow-950' words={words} />
      <p className=' text-2xl font-black  text-slate-100'>Discover how fintech and indigenous knowledge are transforming tribal communities.</p>
    </section>
  )
}

export default heroFinance
