import React from "react";
import { BackgroundBeams } from "../ui/background-beams/background-beams";


const Footer = () => {
  const footerStyle = {
    backgroundImage: "url('/assets/image/business1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
    padding: '2.5rem 0',
  };
  return (
    <div style={footerStyle}>
    <div className=" text-white py-10 ">
      {/* py-10 bg-bg2 bg-cover bg-center */}
      <div className="flex justify-center mt-10 space-x-4">
        <img
          src="assets/image/Dep_logo.png"
          alt="Department Logo"
          className=" h-20 w-20 rounded-full object-cover"
        />
        <img
          src="assets/image/sg_logo.png"
          alt="Support Group Logo"
          className="h-20 w-20 rounded-full object-cover"
        />

        <img
          src="assets/image/govc.png"
          alt="Government Logo"
          className="h-20 w-20 rounded-full object-cover"
        />
        <img
          src="assets/image/ministry.png"
          alt="Another Ministry Logo"
          className="h-20 w-20 rounded-full object-cover"
        />
      </div>

      <div className="flex space-x-8 items-center text-center place-content-center mt-10 mb-9">
        <a
          href="/accessibility-statement"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Accessibility Statement
        </a>
        <a
          href="/copyright-policy"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Copyright Policy
        </a>
        <a
          href="/disclaimer"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Disclaimer
        </a>
        <a
          href="/site-map"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Site Map
        </a>
        <a
          href="/feedback"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Feedback
        </a>
        <a
          href="/hypera-policy"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Hypera Policy
        </a>
        <a
          href="/privacy-policy"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-conditions"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Terms & Condition
        </a>
        <a
          href="/terms-of-use"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Terms of Use
        </a>
        <a
          href="/help"
          className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
        >
          Help
        </a>
      </div>

      <div className="flex flex-col place-content-center space-y-4 text-center">
        <div className="">
          © 2024 - All Rights Reserved - by IIT Bhilai's Innovation and
          Technology Foundation (IBITF) and Technology Innovation Hub (TIH) in
          collaboration with IIT Roorkee and JNU, New Delhi.
        </div>
        <div>
          Content managed by Department of CSE, IIT Roorkee. For any queries,
          contact: <a href="mailhref:sudip.roy@cs.iitr.ac.in">Email</a>
        </div>
        <div className="">
          <p className="text-sm mb-5">Last updated: 27-Jul-2024 7:30 pm</p>
        </div>
      </div>

      <div className="flex flex-col place-content-center">
        <div className=" text-xs text-center">
          Project: Adaptation of Indigenous and Local Knowledge Systems and
          Fintech Solutions for Comprehensive Tribal Development in Chhattisgarh
          (2024-2029)
        </div>

        <div className="text-xs text-center mt-1 mb-5">
          Sponsored by IIT Bhilai's Innovation and Technology Foundation (IBITF)
          and Technology Innovation Hub (TIH) in collaboration with IIT Roorkee
          and JNU, New Delhi.
        </div>
      </div>

      <BackgroundBeams />
    </div>
    </div>
  );
};

export default Footer;
