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
      
      <header className="header">
        <h1>Empowering Tribal Development Through Financial Solutions</h1>
        <p>Discover how fintech and indigenous knowledge are transforming tribal communities.</p>
      </header>

      <div className="image-slider">
        <img src={images[currentImageIndex]} alt="Business" className="slider-image" />
      </div>

      <section className="section" id="success-stories">
        <h2>Success Stories</h2>
        <div className="success-content">
          <div className="success-text">
            <ul>
              <li>
                Using goats to fight poverty in tribal Maharashtra, how a researcher's PhD transformed into a social enterprise
                <a href="https://yourstory.com/2017/10/nilratan-shende-eagl" target="_blank" rel="noopener noreferrer">Read more</a>
              </li>
              <li>
                अपनी दुकान - Modernization of Haat Bazaar and Small Godowns under MSP for MFP scheme.
                <a href="https://trifed.tribal.gov.in/node/969" target="_blank" rel="noopener noreferrer">Read more</a>
              </li>
              <li>
                3,000 women in rural Telangana generated a 15.5cr turnover last year. Here's how.
                <a href="https://yourstory.com/2017/08/kodangal-telangana-farmer-producer-company" target="_blank" rel="noopener noreferrer">Read more</a>
              </li>
              <li>
                Our financial support and training programs helped him upgrade his equipment and expand his market reach internationally.
                <a href="https://www.myscheme.gov.in/schemes/vtcta" target="_blank" rel="noopener noreferrer">Read more</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="government-schemes">
        <h2>Government Schemes</h2>
        <p>Learn about central and state-level schemes designed for tribal development.</p>
        <a href="https://tribal.nic.in/downloads/NSTFDC/NSTFDCscheme.pdf" target="_blank" rel="noopener noreferrer">Explore Schemes</a>
      </section>

      <section className="section" id="microloans">
        <h2>Microloans</h2>
        <p>Access microloans to start or expand your business. We guide you through the process.</p>
        <a href="https://nstfdc.tribal.gov.in/(S(03syurvcr5khhymdk3vrgusd))/frm_mcs.aspx#:~:text=This%20scheme%20is%20meant%20to,SHGs%20through%20State%20Channelizing%20Agencies." target="_blank" rel="noopener noreferrer">Apply for Loans</a>
      </section>

      <section className="section" id="financial-literacy">
        <h2 link='https://old.ncfe.org.in/program/fetp'>Financial Literacy</h2>
        <p>Improve your financial literacy with our resources and training programs.</p>
        <a href="https://forms.zohopublic.in/itprojects/form/Registrationformforschoolteacher/formperma/xCKpwUmLNUYLycXJnBbHqt3mIf5YLrE7GrphRdsdhz0" target="_blank" rel="noopener noreferrer">Get Started</a>
        <p>Contact us at: <a href="mailto:fe_programs@ncfe.org.in"> Financial help</a></p>
      </section>

      <aside className="side-section" id="queries-faqs">
        <h2>Queries and FAQs</h2>
        <p>Have questions? Find answers in our FAQ section or get in touch with us for more information.</p>
      </aside>

      <section className="section" id="contact-support">
        <h2>Contact and Support</h2>
        <p>Contact us at: <a href="mailto:sudip.roy@cs.iitr.ac.in">mail us for financial suppport</a></p>
        <p>Phone: +91-**********</p>
      </section>

      <button className="chat-button" onClick={handleChatToggle}>Chat with Us</button>

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

      
    </div>
  );
};

export default FinancialSolutions;
