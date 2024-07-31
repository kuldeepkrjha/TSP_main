import React from "react";
import "../ui/sticky-scroll-reveal-ui/StickyScrollRevealDemo";
import { StickyScrollRevealDemo } from "../ui/sticky-scroll-reveal-ui/StickyScrollRevealDemo";
import "../ui/hover-border-latest-news-heading/HoverBorderGradientDemo"



const heading = "Ongoing News Updates";
const NewsUpdates = () => {
  return (
    <section className=" bg-slate-300">
      
      <div className=" relative flex items-center place-content-center top-5">
      <div className=" h-9 w-72 text-center items-center sm:text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black ">{heading}</div>
      </div>
      
      <StickyScrollRevealDemo />
    </section>
  );
};

export default NewsUpdates;
