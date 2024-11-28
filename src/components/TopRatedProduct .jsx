import React from "react";

const topRatedProducts = [
  {
    name: "Laptops",
    price: "$299",
    rating: 4.5,
    image: "/images/download__1_-removebg-preview.png",
  },
  {
    name: "Noise Cancelling Earbuds",
    price: "$199",
    rating: 4.8,
    image: "/images/download-removebg-preview.png",
  },
  {
    name: "TVs",
    price: "$149",
    rating: 4.7,
    image: "/images/SUHD_JS95000-removebg-preview.png",
  },
  {
    name: "Smartwatch",
    price: "$249",
    rating: 4.6,
    image: "/images/apple_mlch2ll_a_watch_sport_smartwatch_38mm_1187204-removebg-preview.png",
  },
  {
    name: "Wireless Headphones",
    price: "$299",
    rating: 4.5,
    image: "/images/head-removebg-preview.png",
  },
  {
    name: "Phones",
    price: "$199",
    rating: 4.8,
    image: "/images/png-transparent-smartphone-feature-phone-tablet-computer-telephone-mobile-phone-and-tablet-angle-gadget-electronics-thumbnail-removebg-preview.png",
  },
  {
    name: "Portable Speaker",
    price: "$149",
    rating: 4.7,
    image: "/images/91SUk3nvbYL-removebg-preview.png",
  },
  {
    name: "Accessories",
    price: "$249",
    rating: 4.6,
    image: "/images/images-removebg-preview.png",
  },
  // Add more products as needed
];

const TopRatedProducts = () => {
  const styles = {
    section: {
      padding: "40px 20px",
      backgroundColor: "#FFFFFF", // White background
      borderRadius: "10px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for the section
    },
    heading: {
      textAlign: "center",
      fontSize: "36px",
      color: "#000000", // Black color for the heading
      marginBottom: "30px",
      textTransform: "uppercase",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // 4 columns for desktop
      gap: "30px",
      justifyContent: "center", // Center the grid
    },
    productCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
    },
    topRatedWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    topRated: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#EC3D2F",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Text shadow for "Top Rated"
    },
    wishList: {
      fontSize: "14px",
      color: "#666",
      cursor: "pointer",
    },
    productImage: {
      width: "90%",
      height: "300px",
      objectFit: "fill",
      padding: "10px",
      transition: "transform 0.3s ease", // Zoom effect on hover
    },
    productImageHover: {
      transform: "scale(1.1)", // Zoom on hover
    },
    productTitle: {
      fontSize: "28px",
      fontWeight: "600",
      color: "#000000", // Black color for title
      textAlign: "center",
      margin: "10px 0",
    },
    productPrice: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#EC3D2F", // Red color for price
      textAlign: "left",
      marginLeft: "10px",
    },
    buyButton: {
      padding: "10px 20px",
      backgroundColor: "#EC3D2F", // Red button color
      color: "#FFFFFF",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      marginLeft: "100px",
      transition: "background-color 0.3s ease", // Hover effect for button
    },
    buyButtonHover: {
      backgroundColor: "#000000", // Black on hover
    },
    // Responsive design
    "@media (max-width: 1200px)": {
      productGrid: {
        gridTemplateColumns: "repeat(3, 1fr)", // 3 columns for tablet
      },
    },
    "@media (max-width: 768px)": {
      productGrid: {
        gridTemplateColumns: "repeat(2, 1fr)", // 2 columns for mobile
      },
    },
    "@media (max-width: 480px)": {
      productGrid: {
        gridTemplateColumns: "repeat(1, 1fr)", // 1 column for small mobile screens
      },
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Top Rated Products</h1>

      <div style={styles.productGrid}>
        {topRatedProducts.map((product, index) => (
          <div
            key={index}
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("img").style.transform = "scale(1.1)"; // Zoom effect on image hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("img").style.transform = "scale(1)"; // Reset zoom effect
            }}
          >
            <div style={styles.topRatedWrapper}>
              <span style={styles.topRated}>Top Rated</span>
              <span style={styles.wishList}>♥ Wishlist</span>
            </div>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productTitle}>{product.name}</h3>
            <p style={styles.productPrice}>{product.price}</p>

            <button
              style={styles.buyButton}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EC3D2F")}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProducts;
