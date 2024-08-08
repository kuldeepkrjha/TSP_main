import React from 'react'
import { GlareCard } from '../ui/Glare-card/glare-card'
import { Boxes } from '../ui/bg-boxes/background-boxes'
import { cn } from '../../lib/utils'

const FinancialLiteracy = () => {
  return (
    // <div className='h-[40rem] flex space-x-60'>
    <div className="h-[40rem] relative w-full overflow-hidden bg-slate-900 flex items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      

    <div className=' sm:items-start flex flex-col text-center sm:mr-10 mr-2 ml-6 sm:ml-0'>
    <a href="https://forms.zohopublic.in/itprojects/form/Registrationformforschoolteacher/formperma/xCKpwUmLNUYLycXJnBbHqt3mIf5YLrE7GrphRdsdhz0" target="_blank" rel="noopener noreferrer" className=' cursor-pointer'>
    <h2 link='https://old.ncfe.org.in/program/fetp' className={cn("md:text-6xl sm:3xl text-base text-white relative font-black mb-5 z-20")}>Financial Literacy</h2> </a>
        <p className='text-center mt-2 text-neutral-300 relative z-20 text-sm md:text-base flex flex-col text-balance font-bold'>Improve your financial literacy with our resources and training programs.</p>
    </div>
    <div className=' z-20 items-center sm:items-start mt-28 '>
    <a href="mailto:fe_programs@ncfe.org.in" className=' cursor-pointer'>
       <GlareCard className="flex flex-col items-center justify-center  z-20">
     
        <a href="https://forms.zohopublic.in/itprojects/form/Registrationformforschoolteacher/formperma/xCKpwUmLNUYLycXJnBbHqt3mIf5YLrE7GrphRdsdhz0" target="_blank" rel="noopener noreferrer" className='text-white text-xl md:text-2xl font-black'>Get Started</a>
        <p className='text-white text-lg md:text-xl font-black'>Contact us at: <a href="mailto:fe_programs@ncfe.org.in" className=' cursor-pointer hover:underline'> Financial help</a></p>
      
    </GlareCard></a>
    </div>
    <Boxes />
    </div>
  )
}

export default FinancialLiteracy
