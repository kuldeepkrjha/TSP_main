"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

import { motion } from "framer-motion";
import { LinkPreview } from "../linkPreview/link-preview";

import { ThreeDCardDemo } from "../3D-card/ThreeDCardDemo";

const content = [
  {
  
    description:
    <LinkPreview url="https://adiprasaran.tribal.gov.in/MediaCoverage/News/News_1607.pdf" className="hover:text-blue-500 hover:underline"> Budget Outlay of Ministry of Tribal Affairs Increased by 73 ִ 60 percent to about Rs 13000 Crore Compared to RE 2023 to 2024 ( PIB )</LinkPreview> ,
    content: (
      // <div
      //  className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">

      <ThreeDCardDemo 
       src="/assets/image/slide2.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
        

      // </div>
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        Union Budget 2024: FM Nirmala Sitharaman launches ‘Janjatiya Unnat Gram Abhiyan’ for tribal welfare ( Hindusthan Times )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        Union Budget 2024: In govt outreach to tribals, a new scheme for development of 63,000 villages ( The Indian Express )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },{
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
       Budget 2024: Centre to launch PM Janjatiya Unnat Gram Abhiyaan for tribal welfare ( The Hindu )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        Budget 2024_ Know how the Union Government positively impacting tribal lives through village based schemes ( Organizer )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        Union Budget: PMModi’s TribalOutreach Continues, PradhanMantriJanjatiyaUnnat Gram Abhiyan Announced ( The Indian Tribal )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        Development scheme for 63,000 tribal villages ( Times of India )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        Union Budget 2024_ Janjatiya Unnat Gram Abhiyan to improve socio-economic conditions of tribals ( The Economic Times )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        आदिवासियों की सामाजिक-आर्थिक स्थिति में सुधार के लिए बजट में जनजातीय उन्नत ग्राम अभियान की घोषणा ( IBC24 )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
        Ministry of Tribal Affairs holds a two-day Manthan Shivir to undertake Progress-Review of Schemes, and deliberate on Vision 2047 and 100 days Action Plan ( PIB )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
  {
    description:
    <a href="https://adiprasaran.tribal.gov.in/"
      className="hover:text-blue-500 hover:underline">
       Tribal Ministery Manthan Shivir: Review of different Schemes ( The Samikhsya )
      </a>
      ,
    content: (

      <ThreeDCardDemo 
       src="/assets/image/slide3.png" 
       alt= "slide2"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
      />
     
    ),
  },
 
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-4 mt-5">
      <StickyScroll content={content} />
    </div>
  );
}
