"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";

// Define the type for the component props
type HoverBorderGradientDemoProps = {
  topic: string;
};

export function HoverBorderGradientDemo({topic} : HoverBorderGradientDemoProps) {
  return (
    <div className="flex justify-center text-center items-center p-10">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" dark:text-white flex items-center h-[20opx] w-[600px] text-pretty text-center space-x-2 shadow-xl shadow-cyan-400 hover:shadow-pink-500 hover:shadow-lg"
      >
        
        <span className="relative justify-center flex pb-2 px-[110px] bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent text-center select-auto shadow-sm">{topic}</span>
      </HoverBorderGradient>
    </div>
  );
}


