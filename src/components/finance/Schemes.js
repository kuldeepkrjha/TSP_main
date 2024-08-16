import React from 'react';
import { motion } from 'framer-motion';
import { ExpandableCardDemo } from '../ui/outside-click-scheme/ExpandableCardDemo';

const Schemes = () => {
  const footerStyle = {
    backgroundImage: "url('/assets/image/business1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
    padding: '2.5rem 0',
  };

  const textShadowStyle = {
    textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)',
  };

  return (
    <div style={footerStyle}>
      <div className="text-center flex flex-col">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='flex flex-col place-content-center text-center items-center'
          style={textShadowStyle} // Apply text shadow style here
        >
          <h1 className="p-10 mb-0 flex font-black text-5xl text-white text-center" style={textShadowStyle}>
            Government Schemes
          </h1>
          <p className="font-bold text-sm md:text-lg text-center text-slate-300 text-balance mt-1 mb-3" style={textShadowStyle}>
            Recent government initiatives have significantly uplifted the tribal community, transforming lives through improved healthcare, quality education, and sustainable livelihood opportunities.
          </p>
        </motion.div>

        <div>
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  );
}

export default Schemes;
