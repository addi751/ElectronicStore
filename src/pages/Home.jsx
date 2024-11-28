// src/pages/Home.js
import React from "react";
import Header from "../components/Header";
import FeatureHighlights from "../components/FeatureHighlights";
import CategorySection from "../components/CategorySection";
import TopRatedProducts from "../components/TopRatedProduct ";
import ShopProductBy from "../components/ShopProductBy";
import NewArrivalSection from "../components/NewArrival";
import ProductCategories from "../components/Categories";
import OfferBanner from "../components/OfferBanner";
import FeatureSection from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <FeatureHighlights />
      <CategorySection />
      <TopRatedProducts />
      <ShopProductBy />
      <NewArrivalSection />
      <ProductCategories />
      <OfferBanner />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Home;
