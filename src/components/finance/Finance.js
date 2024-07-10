import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Finance.css';
import image1 from './business1.jpg';
import image2 from './business2.jpg';
import image3 from './business3.png';
import image4 from './business4.png';

const images = [image1, image2, image3, image4];

const FinancialSolutions = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleChatSubmit = () => {
    alert(`Your message: ${chatMessage}`);
    setChatMessage('');
  };

  return (
    
      <div className="financial-page">
        <nav className="navbar">
          <Link to="/" className="home-button">Home</Link>
        </nav>

        <header className="header">
          <h1>Financial Solutions for Tribal Development</h1>
        </header>

        <div className="image-slider">
          <img src={images[currentImageIndex]} alt="Business" className="slider-image" />
        </div>

        <section className="section" id="success-stories">
          <h2>Tribal Business Success Stories</h2>
          <div className="success-content">
            <div className="success-text">
              <ul>
                <li>
                  Using goats to fight poverty in tribal Maharashtra, how a researcher's PhD transformed into a social enterprise
                  <Link to={{ pathname: "https://yourstory.com/2017/10/nilratan-shende-eagl" }} target="_blank">Read more</Link>
                </li>
                <li>
                  अपनी दुकान - Modernization of Haat Bazaar and Small Godowns under MSP for MFP scheme.
                  <Link to={{ pathname: "https://trifed.tribal.gov.in/node/969" }} target="_blank">Read more</Link>
                </li>
                <li>
                  3,000 women in rural Telangana generated a 15.5cr turnover last year. Here's how.
                  <Link to={{ pathname: "https://yourstory.com/2017/08/kodangal-telangana-farmer-producer-company" }} target="_blank">Read more</Link>
                </li>
                <li>
                  Our financial support and training programs helped him upgrade his equipment and expand his market reach internationally.
                  <Link to={{ pathname: "https://www.myscheme.gov.in/schemes/vtcta" }} target="_blank">Read more</Link>
                </li>
              </ul>
            </div>
            <div className="success-image">
              <img src="./business_stry.png" alt="Success Story" className="story-image" />
            </div>
          </div>
        </section>

        <section className="section" id="government-schemes">
          <h2>Government Central Sponsored Schemes</h2>
          <p>Lets Explore in Detail about various central level schemes for tribal development.</p> 
        </section>

        <section className="section" id="microloans">
          <h2>Microloans and Savings Accounts</h2>
          <p>Information on how to access microloans and open savings accounts.</p>
        </section>

        <section className="section" id="financial-literacy">
          <h2>Improve Financial Literacy</h2>
          <p>We offer educational resources, business development programs, and share success stories.</p>
        </section>

        <aside className="side-section" id="queries-faqs">
          <h2>Queries and FAQs</h2>
          <p>Answers to common questions and how to get further assistance.</p>
        </aside>

        <section className="section" id="contact-support">
          <h2>Contact and Support</h2>
          <p>Contact us at: support@tribalfinance.org</p>
          <p>E-Mail Address:ctd.cg@nic.in </p>
          <p> Secretary :
Tribal and Scheduled Caste Development Department
Room No S-4, Mahanadi Bhawan
New Raipur Chhattisgarh 492015</p>

<p>Commissioner :
Tribal and Scheduled Caste Development Department
Block D Ground Floor, Indrawati Bhawan New Raipur Chhattisgarh 492015</p>
          <p>Phone: +**********</p>
        </section>

        <button className="chat-button" onClick={handleChatToggle}>Chat</button>

        {isChatOpen && (
          <div className="chat-dialog">
            <textarea 
              value={chatMessage} 
              onChange={handleChatMessageChange} 
              placeholder="Type your message here..." 
            />
            <button onClick={handleChatSubmit}>Send</button>
          </div>
        )}

        <footer className="footer">
          <div className="footer-links">
            <Link to="/accessibility-statement">Accessibility Statement</Link>
            <Link to="/copyright-policy">Copyright Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/site-map">Site Map</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/hyperlink-policy">Hyperlink Policy</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Condition</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/help">Help</Link>
          </div>
          <p>
            Copyright &copy; 2024 - All Rights Reserved - Official Website of Department of Tribal and Scheduled Caste, Government of Chhattisgarh, India
            <br />
            Note: Content on this website is published and managed by Department of Tribal and Scheduled Caste, Government of Chhattisgarh,
            <br />
            For any query regarding this website, please contact by E-mail ID: ctd.cg@nic.in
          </p>
          <div className="footer-logos">
            <img src="./ministry.jpg" alt="Department Logo" className="footer-logo"/>
            <img src="support_group_logo.png" alt="Support Group Logo" className="footer-logo"/>
          </div>
          {/* <div className="footer-certifications">
            <img src="w3c_css.png" alt="W3C CSS" className="footer-certification-logo"/>
            <img src="wai_aa_wcag.png" alt="WAI-AA WCAG 2.0" className="footer-certification-logo"/>
            <img src="achecker_wcag.png" alt="AChecker WCAG 1-A" className="footer-certification-logo"/>
          </div> */}
        </footer>
      </div>
  );
};

export default FinancialSolutions;


