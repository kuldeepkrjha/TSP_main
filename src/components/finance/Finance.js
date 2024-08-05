import React from "react";
import HeroFinance from "./heroFinance"; // Ensure this is the correct import path
import Footer from "../footer/Footer";
import SuccessStories from "./SuccessStories";
import Schemes from "./Schemes";
import Faq from "./Faq";
import Microloans from "./Microloans";
import Contact from "./Contact";

const FinancialSolutions = () => {
  return (
    <>
      <HeroFinance /> 
      <SuccessStories />
      <Schemes />
      <Microloans />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default FinancialSolutions;
