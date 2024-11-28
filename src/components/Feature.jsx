import React from 'react';

const FeatureSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="bg-white p-5 rounded-lg w-full md:w-2/4 mb-8 md:mb-1 md:mr-4"> {/* Decreased margin on the right */}
          <h3 className="text-4xl font-bold text-red-600 mb-4">Comment Level</h3>
          <p className="text-black font-bold text-6xl mb-8">A new style in your Ear.</p>
          
          {/* Feature Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Feature 1: User */}
            <div className="bg-[#BCCDDF] text-center p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-black font-semibold mb-2">User's</h3>
              <h2 className="text-5xl font-bold text-red-600">4M+</h2>
            </div>
            
            {/* Feature 2: Purchasers */}
            <div className="bg-[#BCCDDF] text-center p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-black font-semibold mb-2">Purchasers</h3>
              <h2 className="text-5xl font-bold text-red-600">153K</h2>
            </div>
            
            {/* Feature 3: Gallery */}
            <div className="bg-[#BCCDDF] text-center p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-black font-semibold mb-2">Gallery</h3>
              <h2 className="text-5xl font-bold text-red-600">53K</h2>
            </div>
            
            {/* Feature 4: Feedback */}
            <div className="bg-[#BCCDDF] text-center p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-black font-semibold mb-2">Feedback</h3>
              <h2 className="text-5xl font-bold text-red-600">2M+</h2>
            </div>
          </div>
        </div>
        
        {/* Right Side (Image) */}
        <div className="w-full md:w-3/5 flex justify-center mr-0"> {/* Added margin-right */}
          <img
            src="images/Marshall Headphones.png" // Replace with actual image path
            alt="Feature Image"
            className="w-4/5 h-3/4 object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
