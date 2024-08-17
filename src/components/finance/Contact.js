import React from 'react'
import { PinContainer } from "../ui/3D-pin/3d-pin";
import { motion } from 'framer-motion';
import { BackgroundBeams } from '../ui/background-beams/background-beams';


const Contact = () => {
  return (
    <div className="h-[45rem] w-full rounded-md bg-neutral-950 relative flex  flex-col items-center justify-center antialiased">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "circIn",
        }} className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact And Support
        </h1>
        <br></br>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          This page is currently under development. We're working on some exciting content and features that will be available soon. 
          In the meantime, feel free to reach out to us by clicking the button below. We're here to help and would love to hear from you!
        </p>
        </motion.div>
       
      <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer
        title="sudip.roy@cs.iitr.ac.in"
        href="mailto:sudip.roy@cs.iitr.ac.in"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Contact and Support
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Click below to contact us <a href="mailto:sudip.roy@cs.iitr.ac.in">for any querries and suppports.
            </a>
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
    {/* </div> */}
    <BackgroundBeams />
    </div>
  )
}

export default Contact

       