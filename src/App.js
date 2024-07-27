import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Articles from './components/article/Article';
import NewsUpdates from './components/news/News';
import DevelopmentSections from './components/development/Development';
import AuthModal from './components/authModal/AuthModal';
import FinancialSolutions from './components/finance/Finance';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Articles />
            <NewsUpdates />
            <DevelopmentSections />
          </>} />
          <Route path="/financial" element={<FinancialSolutions />} />
        </Routes>
        <AuthModal 
          showLogin={showLogin} 
          setShowLogin={setShowLogin} 
          showRegister={showRegister} 
          setShowRegister={setShowRegister} 
        />
      </div>
    </Router>
  );
};

export default App;
