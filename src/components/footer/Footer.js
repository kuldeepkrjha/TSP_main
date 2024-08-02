import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-Links">
          <a href="/accessibility-statement">Accessibility Statement</a>
          <a href="/copyright-policy">Copyright Policy</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/site-map">Site Map</a>
          <a href="/feedback">Feedback</a>
          <a href="/hypera-policy">Hypera Policy</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Condition</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/help">Help</a>
        </div>
        <p>
          © 2024 - All Rights Reserved - by IIT Bhilai's Innovation and
          Technology Foundation (IBITF) and Technology Innovation Hub (TIH) in
          collaboration with IIT Roorkee and JNU, New Delhi.
          <br />
          Content managed by Department of CSE, IIT Roorkee. For any queries,
          contact: <a href="mailhref:sudip.roy@cs.iitr.ac.in">Email</a>
        </p>
        <p>Last updated: 27-Jul-2024 7:30 pm</p>
        <div className="footer-logos">
          <img
            src="./deplogo.png"
            alt="Department Logo"
            className="footer-logo"
          />
          <img
            src="./sglogo.png"
            alt="Support Group Logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-certifications">
          <img
            src="w3c_css.png"
            alt="W3C CSS"
            className="footer-certification-logo"
          />
          <img
            src="wai_aa_wcag.png"
            alt="WAI-AA WCAG 2.0"
            className="footer-certification-logo"
          />
          <img
            src="achecker_wcag.png"
            alt="AChecker WCAG 1-A"
            className="footer-certification-logo"
          />
        </div>
        <p>
          Project: Adaptation of Indigenous and Local Knowledge Systems and
          Fintech Solutions for Comprehensive Tribal Development in Chhattisgarh
          (2024-2029)
          <br />
          Sponsored by IIT Bhilai's Innovation and Technology Foundation (IBITF)
          and Technology Innovation Hub (TIH) in collaboration with IIT Roorkee
          and JNU, New Delhi.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
