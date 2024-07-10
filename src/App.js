import React from 'react';
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
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Articles />
            <NewsUpdates />
            <DevelopmentSections />
          </>} />
          <Route path="/financial" element={<FinancialSolutions />} />
        </Routes>
        <AuthModal />
      </div>
    </Router>
  );
};

export default App;
