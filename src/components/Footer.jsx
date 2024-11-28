import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#BCCDDF] py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
      <div>
          <h4 className="text-lg font-bold mb-4">Your Gateway to Success Start</h4>
          <p className="text-gray-700 mb-4">Here!</p>
          <p className="text-gray-700">hello@helloflow.com</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-facebook"></i> {/* Font Awesome for Facebook */}
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-twitter"></i> {/* Font Awesome for Twitter */}
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-instagram"></i> {/* Font Awesome for Instagram */}
            </a>
          </div>
        </div>

        {/* Column 2: Pages */}
        <div>
          <h4 className="text-lg font-bold mb-4">Pages</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-black">Demo Sites</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Shop</a></li>
          </ul>
        </div>

        {/* Column 3: Other */}
        <div>
          <h4 className="text-lg font-bold mb-4">Other</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-black">404</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Partnership</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Utility */}
        <div>
          <h4 className="text-lg font-bold mb-4">Utility</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-black">Style Guide</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Instructions</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">All Templates</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 border-t border-gray-300 mt-10 flex justify-between items-center text-sm text-gray-700">
        <p>© 2024 Developed by <a href="#" className="text-black font-semibold">Abdullah.</a></p>
      </div>
      
      {/* Column 1: Logo and Contact Info */}
      
       <img
         src="path-to-your-logo.png"  // Add your logo image path here
         alt="Your Logo"
         className="w-32 h-auto mb-1" // Adjust logo size accordingly
       />

    </footer>
  );
};

export default Footer;
