import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    {/* Main Container with full background color */}
    
      {/* Header Section */}
      <header className="header1"> 
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

      {/* Contact Form Section */}
      <div className="flex items-center justify-center mt-10">

        <div className="bg-[#BCCDE0] shadow-lg rounded-lg p-8 max-w-7xl w-full flex flex-col md:flex-row items-center h-auto md:h-[650px] mb-10">
        
          {/* Left Side: Contact Info */}
          <div className="p-10 rounded-lg md:w-1/2 md:mr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact us</h2>
            <p className="text-gray-600 mb-4">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
            <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> kashifhurmat893@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhoneAlt} className="icon" /> +92 302 5058 413</p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              We'd love to hear from you! Let's get in touch
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-2 border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">User</label>
                  <input
                    type="text"
                    placeholder="User"
                    className="w-full border-2 border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-2 border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone number</label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border-2 border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-2 border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Type text</label>
                <textarea
                  placeholder="Type here"
                  className="w-full border-2 border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default ContactPage;
