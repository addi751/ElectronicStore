import React from 'react';

const ShopProductBy = () => {
  return (
    <section className="py-24 flex flex-col items-center"> {/* Increased vertical padding */}
      {/* Heading Section */}
      <h2 className="text-3xl font-bold text-black mb-12 text-left w-4/5">Shop Product By</h2>
      
      {/* Content Section */}
      <div className="w-4/5 bg-[#BCCDDF] rounded-lg p-8 flex justify-between items-center relative" style={{ height: '400px' }}> {/* Increased section height */}
        {/* Image */}
        <div className="w-1/2 flex justify-start relative">
          <img
            src="images/1fbe8131b5-removebg-preview.png"
            alt="Product Image"
            className="absolute w-4/4 h-200 rounded-lg transform hover:scale-105 transition-transform duration-500" 
            style={{ marginLeft: '70px', top: '-220px' }} // Adjusted top position for the taller image
          />
        </div>
        
        {/* Content */}
        <div className="w-2/5 flex flex-col justify-center relative" style={{ marginRight: '100px' }}> 
          <h3 className="text-2xl font-semibold mb-4">A new style in your Ear</h3>
          <p className="text-gray-700 mb-6">Discover the latest headphones for high-quality sound and comfort.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopProductBy;
