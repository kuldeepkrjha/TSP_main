import React from 'react'
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight/hero-highlight";


const Microloans = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-300 '>
      <HeroHighlight>
      <h2 className=' text-white font-black md:text-8xl text-5xl items-center text-center '>Microloans</h2>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-5 "
      >
        Access microloans to start or expand your business. We guide you through the process.{" "}<br></br>
        <Highlight className=" dark:text-white mt-12 top-10 hover:underline hover:animate-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500">
        <a href="https://nstfdc.tribal.gov.in/(S(03syurvcr5khhymdk3vrgusd))/frm_mcs.aspx#:~:text=This%20scheme%20is%20meant%20to,SHGs%20through%20State%20Channelizing%20Agencies." target="_blank" rel="noopener noreferrer">Apply for Loans</a>
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    </div>
  )
}

export default Microloans

// "use client";



