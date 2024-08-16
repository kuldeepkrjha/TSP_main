import React from 'react';
// import './Development.css';

import { ThreeDCardDevelopment } from '../ui/3D-card/ThreeDCardDemo';

const DevelopmentSections = () => {
  return (
    <section className="flex justify-center">
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
  url: "https://trifed.tribal.gov.in/home",
},
{
  title : "Farming Data",
  description  : "Information and updates on tribal farming practices and data.",
  name: "Learn more",
  url: "https://www.ibef.org/states/chhattisgarh",
},
{
  title : "Social Welfare Schemes",
  description  : "Details about various social welfare schemes for tribal communities.",
  name: "Learn More",
  url: "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1575524"
},     

]
        