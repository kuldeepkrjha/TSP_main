"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3D-card/3d-card";
// import Link from "next/link";

type ThreeDCardDemoProps = {
  src:string;
  alt?: string;
  width?:number;
  height?: number;
  className?: string;
};

export const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({
  src,
  alt = 'Pic',
  width = 100,
  height = 125,
  className = '',
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

     
        
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={src}
            alt={alt}
            width= {1000}
            height= {1000}
            
            className=""
      
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20"> */}
          
        {/* </div> */}
      </CardBody>
    </CardContainer>
  );
}
