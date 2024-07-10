import React, { useState, useEffect } from 'react';
import './Hero.css';
import slide1 from "../../slide1.png";
import slide2 from "../../slide2.png";
import slide3 from "../../slide3.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h1>Tribal Development Initiatives</h1> 
      <p>Empowering Tribal Communities in Chhattisgarh</p>
      <div className="slideshow-container">
        <div className={`mySlides fade`} style={{ display: currentSlide === 0 ? 'block' : 'none' }}>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className={`mySlides fade`} style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div className={`mySlides fade`} style={{ display: currentSlide === 2 ? 'block' : 'none' }}>
          <img src={slide3} alt="Slide 3" />  
        </div>
      </div>
    </section>
  );
};

export default Hero;
