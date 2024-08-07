import React from "react";
import HeroFinance from "./heroFinance"; // Ensure this is the correct import path
import Footer from "../footer/Footer";
import SuccessStories from "./SuccessStories";
import Schemes from "./Schemes";
import Faq from "./Faq";
import Microloans from "./Microloans";
import Contact from "./Contact";
import FinancialLiteracy from "./FinancialLiteracy";
import Chat from "./Chat";

const FinancialSolutions = () => {
  return (
    <>
      <HeroFinance /> 
      <SuccessStories />
      <Schemes />
      <Microloans />
      <FinancialLiteracy />
      <Faq />
      <Contact />
      <Footer />
      <Chat />
    </>
  );
};

export default FinancialSolutions;
