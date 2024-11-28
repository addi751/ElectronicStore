// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from "react-router-dom"; // Import NavLink
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <header className="header"> {/* Header is separate from the hero section */}
        <div className="logo">Your Logo</div>
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
      <div className="content">
      <section className="hero"> {/* Hero section should be separate */}
        <div className="hero-content">
          <div className="image-content">
            <img src="/images/71v2kp6TwBL._AC_SX569_-removebg-preview.png" alt="Headphones" />
          </div>
        </div>
      </section>
      <div className="text-content  ">
            <h2>In the spotlight</h2>
            <h1>Your sound best <br />for your life.</h1>
            <p>These have large ear cups that encompass <br /> the ears, providing good sound isolation <br />and often better sound quality.</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          </div>
    </>
  );
};

export default Header;
