import React, { useState, useEffect } from "react";
import { TypewriterEffect } from "../ui/typewriterEffect/typewriter-effect";

// Array of image slides
const slides = [
  "/assets/image/slide1.png",
  "/assets/image/slide2.png",
  "/assets/image/slide3.png",
];

// Inline style for dark shadow glow effect
const textShadowStyle = {
  textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)',
};

// Words with shadow effect to be used in the typewriter effect
const words = [
  {
    text: "Empowering",
    style: textShadowStyle,
  },
  {
    text: "Tribal",
    style: textShadowStyle,
  },
  {
    text: "Communities",
    style: textShadowStyle,
  },
  {
    text: "In",
    style: textShadowStyle,
  },
  {
    text: "Chhattisgarh",
    style: textShadowStyle,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}

      <div className="relative z-10 text-center text-white p-4 bg-opacity-50 rounded-lg items-center justify-between">
        <h1
          className="font-black pt-32 text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
          style={textShadowStyle}
        >
          Tribal Development Initiatives
        </h1>
        <p
          className="pt-8 mb-8 font-bold text-slate-300 text-3xl"
          style={textShadowStyle}
        >
          <TypewriterEffect words={words.map(word => ({ ...word }))} />
        </p>
      </div>

      <div className="absolute inset-0 bg-black opacity-20"></div>
    </section>
  );
};

export default Hero;
