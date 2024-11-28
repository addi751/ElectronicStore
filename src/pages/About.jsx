import React from 'react';
import Header1 from '../components/Header1'; // Reusing the same header component
import Slider from "react-slick";

const AboutPage = () => {
     // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      {/* Header */}
      <Header1 />

      {/* Banner Section */}
      <section className="bg-[#BCCDE0] py-2 text-center">
        <p className="text-lg font-bold text-black mb-1"> Are you university or school for an online partnership?</p>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full md:w-[40%] text-center ml-20 md:text-left px-18">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Open a Mobile Accessories Store Online</h1>
            <p className="text-2xl text-gray-600 mt-10 mb-8">Best Tips to Start an Online Business</p>
            <a href="#" className="text-xl bg-red-600 mt-20 text-white py-3 px-7 rounded-md hover:bg-red-700">Shop now</a>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/3 ">
            <img
              src="/images/head-removebg-preview.png" // Replace with your image path
              alt="Electronics"
              className="w-full h-auto ml-40 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#BCCDE0] py-16">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-red-500">870</h2>
              <p className="text-lg font-bold text-gray-600">Shops</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-500">20,000+</h2>
              <p className="text-lg font-bold text-gray-600">Users</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-500">260</h2>
              <p className="text-lg font-bold text-gray-600">Subscribers</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-500">73,990</h2>
              <p className="text-lg font-bold text-gray-600">Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold text-red-600 mb-8">Why Choose Us</h2>
          <h1 className="text-3xl font-bold text-black mb-20">Benifits of online buying <br />   
          service with us</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
            {/* Card 1 */}
            <div className="bg-gray-300 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Choose Tenacity</h3>
              <p className="text-gray-600"> simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-300 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">24/7 Available</h3>
              <p className="text-gray-600"> simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's</p>            </div>
            {/* Card 3 */}
            <div className="bg-gray-300 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Wholesale</h3>
              <p className="text-gray-600"> simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's</p>            </div>
            {/* Card 4 */}
            <div className="bg-gray-300 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Affordable Price</h3>
              <p className="text-gray-600"> simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's</p>            </div>
          </div>
        </div>
      </section>

       {/* New Customer-Oriented Services Section (Image on Left, Text on Right) */}
       <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side: Image */}
            <div>
              <img
                src="/images/OIP.png" // Replace with your image path
                alt="Our Services"
                 className="w-3/4 h-74 mx-auto"
              />
            </div>
            {/* Right Side: Text */}
            <div className="w-full md:w-[40%] md:ml-8 text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quality Service Tailored to Your Needs</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer a wide range of high-quality services that are tailored to meet the unique needs of each customer. 
                Our focus is on providing excellent customer support, fast shipping, and top-notch products.
              </p>
              <a href="#" className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Oriented Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side: Text */}
            <div className="w-full md:w-[40%] md:ml-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Personalized professional online buying on your schedule</h2>
              <p className="text-lg text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
                libero vitae urna congue sodales.
              </p>
              <a href="#" className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700">Get started</a>
            </div>
            {/* Right Side: Image */}
                        <div className="relative w-full h-auto">
            <img
                src="/images/411d0915997dbbeb6ee89d6797ef20ca.jpg" // Replace with your image path
                alt="First Image"
                className="w-80 h-auto absolute top-0 left-10"
            />
            <img
                src="/images/160510-headphones-review-skullcandy-grind-true-wireless-review-image11-5jqvmsryku.avif" // Replace with your image path
                alt="Second Image"
                className="w-80 h-auto absolute top-24 left-32"
            />
            </div>
                    </div>
        </div>
      </section>

     {/* Testimonials Section */}
     <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-3">Testimonials</h2>
          <h2 className="text-4xl font-bold text-black mb-12">What Our Users Say About Us</h2>
          <Slider {...settings}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/i.png" alt="John Doe" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-4">"Great experience shopping with them. Highly recommend!"</p>
              <p className="font-semibold text-gray-800">John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/R.png" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-4">"Amazing customer service and timely delivery."</p>
              <p className="font-semibold text-gray-800">Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/j.png" alt="Alex Johnson" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-4">"The best store for all my mobile accessory needs."</p>
              <p className="font-semibold text-gray-800">Alex Johnson</p>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
