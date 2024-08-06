import React from 'react'
import { motion } from 'framer-motion'
import { ExpandableCardDemo } from '../ui/outside-click-scheme/ExpandableCardDemo'

const Schemes = () => {
  return (
     <div className="bg-gradient-to-b from-gray-400 to-gray-900 text-center  flex flex-col ">
     <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }} className=' flex flex-col place-content-center text-center items-center'>
     <h1 className=" p-10 mb-0 flex font-black text-5xl text-white text-center">Government Schemes</h1>
     <p className="font-bold text-sm md:text-lg text-center text-slate-300 text-balance mt-1 mb-3">Recent government initiatives have significantly uplifted the tribal community, transforming lives through improved healthcare, quality education, and sustainable livelihood opportunities.</p>
     </motion.div>
      
      <div>
      <ExpandableCardDemo />
      </div>
      
    </div>
  )
}

export default Schemes


