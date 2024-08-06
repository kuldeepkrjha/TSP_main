import React from 'react';
import './Development.css';

import { ThreeDCardDevelopment } from '../ui/3D-card/ThreeDCardDemo';

const DevelopmentSections = () => {
  return (
    <section className="development-sections">
      <ThreeDCardDevelopment content={content} />
    </section>
  );
};

export default DevelopmentSections;

const content = [
  {
  title: "Child and Women Support",
  description: "Programs and schemes for the welfare of tribal children and women.",
  name: "Learn more",
  url: "https://wcd.nic.in/",
},
{
  title : "Business Updates",
  description  : "Latest news and updates on tribal business initiatives and opportunities.",
  name: "Learn more",
  url: "https://trifed.tribal.gov.in/trifed-programs",
},
{
  title : "Farming Data",
  description  : "Information and updates on tribal farming practices and data.",
  name: "Learn more",
  url: "https://trifed.tribal.gov.in/non/timber/msp-mfp",
},
{
  title : "Social Welfare Schemes",
  description  : "Details about various social welfare schemes for tribal communities.",
  name: "Learn More",
  url: "https://tribal.cg.gov.in/en/chhattisgarh-state-intermediate-co-operative-finance-and-development-corporation",
  
},     

]
        ws
