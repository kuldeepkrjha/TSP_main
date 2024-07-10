import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../logo.png"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Government of Chhattisgarh" />
      </div> 
      <h1 className="head">Government of Chhattisgarh</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/financial">Financial Solutions</Link></li>
          <li><Link to="https://tribal.cg.gov.in/services">Support Schemes</Link></li>
          <li><Link to="http://tsplearningprog.s3-website.ap-south-1.amazonaws.com/">Literacy Program</Link></li>
          <li><Link to="http://tspsuraj.s3-website.ap-south-1.amazonaws.com/">Carbon Credit</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link className='button'>Login</Link>
        <Link className='button'>Register</Link>
      </div>
    </header>
  );
};

export default Navbar;
