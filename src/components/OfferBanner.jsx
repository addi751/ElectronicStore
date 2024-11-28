import React from 'react';

const OfferBanner = () => {
  return (
    <section className="bg-[#BCCDDF] py-3 text-center min-h-[100px] flex items-center"> {/* Added min-height and flex centering */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        {/* Heading and Offer Text */}
        <h2 className="text-3xl font-bold text-black mb-4">10% off when paying with debit card</h2>
        <p className="text-lg text-gray-700 mb-6">Take advantage of our limited-time offer and save on your next purchase!</p>
      </div>
    </section>
  );
};

export default OfferBanner;
