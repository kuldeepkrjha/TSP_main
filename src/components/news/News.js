import React from "react";
// import "./News.css";
import "../ui/sticky-scroll-reveal-ui/StickyScrollRevealDemo";
import { StickyScrollRevealDemo } from "../ui/sticky-scroll-reveal-ui/StickyScrollRevealDemo";
import "../ui/hover-border-latest-news-heading/HoverBorderGradientDemo"
import { HoverBorderGradientDemo } from "../ui/hover-border-latest-news-heading/HoverBorderGradientDemo"; 

const heading = "Ongoing News Updates";
const NewsUpdates = () => {
  return (
    <section className="">
      <HoverBorderGradientDemo topic = {heading} 
        className=""
      />
      {/* <ul>
        <li><a href="#">New Government Support Scheme Launched for Tribal Youth</a></li>
        <li><a href="#">Successful Implementation of Literacy Program in Remote Tribal Villages</a></li>
      </ul> */}

      <StickyScrollRevealDemo />
    </section>
  );
};

export default NewsUpdates;
