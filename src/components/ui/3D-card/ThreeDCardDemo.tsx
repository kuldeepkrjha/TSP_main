"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../3D-card/3d-card";

type ThreeDCardDemoProps = {
  src:string;
  alt?: string;
  width?:number;
  height?: number;
  className?: string;
};

type ThreeDCardDevelopmentProps = {
  content: {
    title: string;
  description: string;
  name: string;
  url: string;
  }[]
  
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

export const ThreeDCardDevelopment: React.FC<ThreeDCardDevelopmentProps> = ({
  content,
}) => {
  return (
    <div className=" flex flex-col  md:flex-row md:space-x-2 space-y-0 lg:space-x-4">
      {content.map((item, index) => (
        <CardContainer key={index} className="md:w-52 md:h-52 lg:w-64 lg:h-48">
          <CardBody className="bg-gray-50 relative rounded-xl p-6 border h-60 sm:h-64 ">
            <CardItem translateZ="100" className="w-full mt-4">
              <div>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="pt-4 pb-3">{item.description}</p>
                <a href={item.url} className="text-blue-500 hover:text-blue-700 hover:underline">
                  {item.name}
                </a>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};