import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newArrivals = [
  { id: 1, name: 'John Lara', description: 'High quality headphones', price: 55, rating: 4.8, image: 'images/5b95b05d61d9d6c2e055f33b31c1d16d-removebg-preview.png' },
  { id: 2, name: 'James Smith', description: 'Wireless bluetooth earphones', price: 49, rating: 5.0, image: 'images/images__2_-removebg-preview.png' },
  { id: 3, name: 'Miss Zara', description: 'On-ear stylish headphones', price: 39, rating: 4.3, image: 'images/images__3_-removebg-preview.png' },
  // { id: 4, name: 'Lauren', description: 'Apple iPhone headphones', price: 69, rating: 4.5, image: 'images/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail-removebg-preview.png' },
  { id: 5, name: 'John Lara', description: 'High quality headphones', price: 55, rating: 4.8, image: 'images/5b95b05d61d9d6c2e055f33b31c1d16d-removebg-preview.png' },
  { id: 6, name: 'James Smith', description: 'Wireless bluetooth earphones', price: 49, rating: 5.0, image: 'images/images__2_-removebg-preview.png' },
  { id: 7, name: 'Miss Zara', description: 'On-ear stylish headphones', price: 39, rating: 4.3, image: 'images/images__3_-removebg-preview.png' },
  // { id: 8, name: 'Lauren', description: 'Apple iPhone headphones', price: 69, rating: 4.5, image: 'images/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail-removebg-preview.png' },
];

const NewArrivalSection = () => {
  const settings = {
    dots: true, // Enable dots for pagination
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 items at once
    slidesToScroll: 1, // Scroll one item at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay (3 seconds)
    arrows: false, // Remove left and right arrows
    responsive: [
      {
        breakpoint: 1024, // For tablet screen sizes
        settings: {
          slidesToShow: 3, // Show 3 items at once
        },
      },
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 2, // Show 2 items at once
        },
      },
      {
        breakpoint: 480, // For very small screens
        settings: {
          slidesToShow: 1, // Show 1 item at once
        },
      },
    ],
  };

  return (
    <section className="new-arrival-section bg-gray-100 py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">New Arrivals</h2>

      <Slider {...settings}>
        {newArrivals.map((product) => (
          <div key={product.id} className="w-full p-4 bg-white shadow-lg rounded-lg mx-2">
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transition-transform transform hover:scale-110"
                style={{ width: '100%', height: '450px', objectFit: 'fill' }} // Adjust width and height here
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-500 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
                <span className="ml-2 text-gray-500 text-xs">({product.rating})</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-red-600">${product.price}</span>
                <button className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dots Styling */}
      <style jsx>{`
        .slick-dots {
         top: 650px;
        }

        .slick-dots li button:before {
          color: red; /* Change the dots to red */
        }

        .slick-dots li.slick-active button:before {
          color: red; /* Keep active dot red */
        }
      `}</style>
      
    </section>
  );
};

export default NewArrivalSection;
