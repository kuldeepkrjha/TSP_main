import React from "react";
import HeroFinance from "./heroFinance"; // Ensure this is the correct import path
import Footer from "../footer/Footer";
import SuccessStories from "./SuccessStories";

const FinancialSolutions = () => {
  return (
    <>
      <HeroFinance /> 
      <SuccessStories />
      <Footer />
    </>
  );
};

export default FinancialSolutions;
