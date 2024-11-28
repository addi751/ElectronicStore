import React from 'react';

const ProductCategories = () => {
  return (
    <section className="py-16 bg-gray-100 flex justify-center space-x-8">
      {/* First Product: Awesome Airpods */}
      <div className="bg-[#BCCDDF] rounded-3xl p-10 text-center shadow-lg w-2/5 flex ml-6" style={{ height: '350px' }}>
        {/* Image on the left */}
        <div className="w-1/2 flex justify-start">
          <img
            src="images/G03-200x200-removebg-preview.png"
            alt="Awesome Airpods"
            className="w-4/4 transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Content on the right */}
        <div className="w-1/2 text-black flex flex-col justify-center ml-6">
          <h3 className="text-xl font-semibold mb-4">Awesome Airpods</h3>
          <p className="text-gray-700 mb-4">Experience true wireless listening.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
            Shop now
          </button>
        </div>
      </div>

      {/* Second Product: Smart Watches */}
      <div className="bg-[#BCCDDF] rounded-3xl p-10 text-center shadow-lg w-3/5 flex" style={{ height: '350px', marginRight: '20px' }}>
        {/* Content on the left */}
        <div className="w-1/2 text-black flex flex-col justify-center mr-6">
          <h3 className="text-xl font-semibold mb-4">Smart Watches</h3>
          <p className="text-gray-700 mb-4">Stay connected, stay smart.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
            Shop now
          </button>
        </div>
        {/* Image on the right */}
        <div className="w-1/2 flex justify-end">
          <img
            src="images/2057b76af9ed627-removebg-preview.png"
            alt="Smart Watches"
            className="w-4/4 h-80 transform hover:scale-105 transition-transform duration-500 mb-8"
            
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
