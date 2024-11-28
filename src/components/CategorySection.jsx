import React from "react";

const categories = [
  { title: "Headphones", image: "/images/71v2kp6TwBL._AC_SX569_-removebg-preview.png" },
  { title: "Speakers", image: "/images/SUHD_JS95000-removebg-preview.png" },
  { title: "Microphones", image: "/images/download-removebg-preview.png" },
  { title: "Accessories", image: "/images/head-removebg-preview.png" },
  { title: "Cameras", image: "/images/camera.png" },
];

const CategorySection = () => {
  const styles = {
    section: {
      padding: "40px 20px",
      backgroundColor: "#F9F9F9", // Light grey background for contrast
      borderRadius: "10px", // Rounded corners for the section
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for the section
    },
    heading: {
      textAlign: "center",
      fontSize: "36px",
      color: "#EC3D2F", // Red color for the heading
      marginBottom: "10px",
      textTransform: "uppercase", // Uppercase for modern look
      letterSpacing: "2px", // Letter spacing for style
    },
    subheading: {
      textAlign: "center",
      fontSize: "18px",
      color: "#333333", // Dark grey color for the subheading
      marginBottom: "40px",
      fontStyle: "italic", // Italics for a stylish effect
    },
    categoryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", // Responsive grid layout for medium cards
      gap: "40px",
      justifyContent: "center", // Center the grid itself
      alignItems: "center", // Center items vertically
      marginBottom: "40px", // Space below medium cards
      padding: "0 20px", // Left and right padding for medium cards
    },
    categoryCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px", // Slightly more rounded corners for modernity
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      textAlign: "center",
      overflow: "hidden",
      width: "100%", // Full width for medium cards
      maxWidth: "220px", // Limit the width for medium cards
      padding: "0px 20px", // Inner padding for content spacing
      position: "relative", // For absolute positioning of hover effects
      transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
    },
    categoryImage: {
      width: "100%",
      height: "300px", // Fixed height for the image
      objectFit: "cover", // Maintain aspect ratio
      borderRadius: "10px 10px 0 0", // Round the top corners
      transition: "transform 0.3s ease", // Smooth image hover effect
    },
    categoryTitle: {
      padding: "10px 0",
      fontSize: "18px",
      fontWeight: "600",
      color: "#333",
    },
    // Styles for large cards
    largeCardContainer: {
      display: "flex", // Flex layout for large cards
      justifyContent: "center", // Center large cards
      flexWrap: "wrap", // Wrap cards when screen size decreases
      marginBottom: "20px", // Space below large cards
      padding: "0 40px", // Left and right padding for large cards
    },
    largeCard: {
      display: "flex",
      backgroundColor: "#FFFFFF",
      borderRadius: "12px", // Rounded corners
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      padding: "20px",
      cursor: "pointer",
      flex: "1", // Make cards take equal space
      margin: "10px", // Space between large cards
      alignItems: "center", // Center content vertically
      transition: "transform 0.3s ease", // Smooth transition
    },
    largeImage: {
      width: "40%", // Image takes up 40% of the large card
      borderRadius: "10px",
      marginRight: "20px", // Space between image and text
      transition: "transform 0.3s ease", // Smooth image hover effect for large cards
    },
   
    largeImage1: {
        width: "50%", // Image takes up 40% of the large card
        height: 'auto',
        borderRadius: "10px",
        marginRight: "20px", // Space between image and text
        transition: "transform 0.3s ease", // Smooth image hover effect for large cards
      },

    largeCardContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    largeCardTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#EC3D2F", // "25% off" bold in red
      marginBottom: "10px",
    },
    largeCardSubTitle: {
      fontSize: "25px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    shopNowButton: {
      padding: "15px",
      width: "100%",
      backgroundColor: "#EC3D2F", // Red button color
      color: "#FFFFFF",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "20px",
      transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transition for button hover
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Light shadow for button
    },
    priceButton: {
      padding: "15px",
      width: "100%",
      backgroundColor: "#FFFFFF", // White background for the price button
      color: "#EC3D2F", // Red text
      border: "2px solid #EC3D2F", // Red border
      borderRadius: "15px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "20px",
      transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for button hover
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Light shadow for button
    },
    // Media queries for responsiveness
    "@media (max-width: 1200px)": {
      largeCardContainer: {
        flexDirection: "column", // Stack large cards vertically on screens <= 1200px
        alignItems: "center", // Center large cards vertically
      },
      largeCard: {
        flexDirection: "column", // Stack image and content vertically within each large card
        textAlign: "center", // Center text on smaller screens
        padding: "15px",
      },
      largeImage: {
        width: "80%", // Full-width image on smaller screens
        marginBottom: "15px", // Space between image and text
      },
    },
    "@media (max-width: 768px)": {
      section: {
        padding: "20px 10px", // Less padding on smaller screens
      },
      heading: {
        fontSize: "28px", // Smaller heading on mobile
      },
      subheading: {
        fontSize: "16px", // Smaller subheading on mobile
      },
      categoryGrid: {
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // Adjust grid for smaller screens
        gap: "20px", // Less gap between cards on mobile
      },
      categoryCard: {
        maxWidth: "150px", // Smaller card width on mobile
      },
      largeCardContainer: {
        padding: "0 10px", // Less padding on mobile screens
      },
      largeImage: {
        width: "100%", // Full-width image on mobile screens
        marginBottom: "15px", // Space between image and text
      },
      largeCardTitle: {
        fontSize: "24px", // Smaller title font on mobile
      },
      largeCardSubTitle: {
        fontSize: "18px", // Smaller subtitle font on mobile
      },
      shopNowButton: {
        fontSize: "16px", // Smaller button text on mobile
        padding: "12px", // Smaller padding for button on mobile
      },
      priceButton: {
        fontSize: "16px", // Smaller button text on mobile
        padding: "12px", // Smaller padding for button on mobile
      },
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Category</h1>
      <h2 style={styles.subheading}>Can we help you pick a headphone?</h2>
      
      <div style={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div key={index} style={styles.categoryCard}>
            <img
              src={category.image}
              alt={category.title}
              style={styles.categoryImage}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)"; // Scale on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset scale
              }}
            />
            <h3 style={styles.categoryTitle}>{category.title}</h3>
          </div>
        ))}
      </div>

      {/* Large Cards */}
      <div style={styles.largeCardContainer}>
        {/* Large Card 1 with initial rotation and hover effect */}
        <div style={styles.largeCard}>
          <img
            src="/images/Realistic-digital-camera-vector-PNG-removebg-preview.png"
            alt="Cameras"
            style={{ ...styles.largeImage1 }} // Rotate initially
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(0deg) scale(1.1)"; // Rotate back and scale on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(20deg) scale(1)"; // Reset to original rotation and scale
            }}
          />
          <div style={styles.largeCardContent}>
            <h3 style={styles.largeCardTitle}>25% Off</h3>
            <p style={styles.largeCardSubTitle}>Catch hottest Deals in Cameras category</p>
            <button
              style={styles.shopNowButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000000"; // Change button color to black on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#EC3D2F"; // Reset button color
              }}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Large Card 2 */}
        <div style={styles.largeCard}>
          <img
            src="/images/png-transparent-smartphone-feature-phone-tablet-computer-telephone-mobile-phone-and-tablet-angle-gadget-electronics-thumbnail-removebg-preview.png"
            alt="Tablets"
            style={styles.largeImage}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)"; // Scale image on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; // Reset image scale
            }}
          />
          <div style={styles.largeCardContent}>
            <h3 style={styles.largeCardTitle}>25% Off</h3>
            <p style={styles.largeCardSubTitle}>Tablets, smartphone, and more</p>
            <button
              style={styles.priceButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFFFFF"; // Change button text color on hover
                e.currentTarget.style.backgroundColor = "#EC3D2F"; // Change button background to red
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#EC3D2F"; // Reset button text color
                e.currentTarget.style.backgroundColor = "#FFFFFF"; // Reset button background color
              }}
            >
              $799
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
