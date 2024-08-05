import React from 'react'
import { PinContainer } from "../ui/3D-pin/3d-pin";


const Contact = () => {
  return (
    <div>
    <div className='flex flex-col space-y-3'>
    <h1 className='font-black text-white text-6xl text-left mb-4 mt-10'>Contact and Support</h1>
      <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Contact and Support
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Contact us at: <a href="mailto:sudip.roy@cs.iitr.ac.in">mail us for financial suppport</a>
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
    </div>

    <div></div>
    </div>
  )
}

export default Contact


