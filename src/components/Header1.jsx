// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from "react-router-dom"; // Import NavLink
import './Header1.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <header className="header1"> {/* Header is separate from the hero section */}
        <div className="logo1">Your Logo</div>
        <nav className="nav">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/electronics" activeClassName="active">Electronics</NavLink></li>
            <li><NavLink to="/contacts" activeClassName="active">Contacts</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
