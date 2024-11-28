// src/components/FeatureHighlights.js
import React, { useState } from "react";

const FeatureHighlights = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const styles = {
    section: {
      display: "grid", // Use grid layout for desktop
      gridTemplateColumns: "1fr 1fr", // Two equal columns for image and content
      alignItems: "center",
      padding: "20px 50px",
      backgroundColor: "#BCCDE0",
      transition: "all 0.4s ease", // Smooth transition on layout change
    },
    headingWrapper: {
      textAlign: "center",
      width: "100%",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "36px",
      backgroundColor: "#FFFFFF",
      padding: "12px 25px",
      borderRadius: "12px",
      marginTop: "100px",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    },
    leftSide: {
      position: "relative",
      textAlign: "left", // Align the image to the left
      transition: "all 0.4s ease",
    },
    imageWrapper: {
      borderRadius: "15px",
      boxShadow: isHovered
        ? "0 12px 24px rgba(0, 0, 0, 0.3)" // Deeper shadow on hover
        : "0 8px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow otherwise
      transition: "transform 0.5s ease, box-shadow 0.5s ease", // Smooth hover effect
      transform: isHovered ? "translateY(-10px)" : "none", // Lift effect on hover
    },
    image: {
      maxWidth: "100%",
      height: "auto", // Ensure image is responsive
      borderRadius: "12px", // Rounded corners
    },
    rightSide: {
      display: "flex",
      flexDirection: "column", // Column layout for text content
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "0 20px", // Padding for content
      transition: "all 0.4s ease",
    },
    textBlock: {
      marginBottom: "20px",
      fontSize: "20px",
      color: "#333",
      textAlign: "left", // Align text left
    },
    p: {
      fontSize: "18px",
      color: "#555",
      fontWeight: "600",
      lineHeight: "1.6",
    },
    // Media Queries for responsiveness
    "@media (max-width: 1024px)": {
      section: {
        gridTemplateColumns: "1fr", // Stack content vertically on smaller screens
        padding: "15px 30px",
      },
      leftSide: {
        flexBasis: "100%", // Image takes full width on small screens
        marginBottom: "20px", // Space below image
        textAlign: "center", // Center the image for smaller screens
      },
      rightSide: {
        flexDirection: "row", // Align text blocks horizontally
        justifyContent: "center", // Center-align text content
        flexBasis: "100%", // Full width for text content
        padding: "0 10px", // Adjust padding
      },
      textBlock: {
        flexBasis: "30%", // Maintain equal width for text blocks
        textAlign: "center", // Center-align text in blocks
      },
      heading: {
        fontSize: "30px", // Adjust heading size for smaller screens
        marginTop: "80px",
      },
    },
    "@media (max-width: 768px)": {
      section: {
        padding: "10px 20px",
        gridTemplateColumns: "1fr", // Stack content vertically
      },
      leftSide: {
        marginBottom: "30px", // Space below image on mobile
        textAlign: "center", // Center the image
      },
      rightSide: {
        flexDirection: "row", // Keep text blocks horizontally aligned
        justifyContent: "center",
      },
      textBlock: {
        flexBasis: "45%", // Allow text blocks to take more space on mobile
        textAlign: "center", // Center-align text in blocks
      },
      heading: {
        fontSize: "24px", // Smaller heading on mobile
        padding: "8px 15px",
      },
      p: {
        fontSize: "16px", // Smaller paragraph font on mobile
      },
    },
  };

  return (
    <>
      {/* Heading */}
      <div style={styles.headingWrapper}>
        <h1 style={styles.heading}>Amazing Features</h1>
      </div>

      <section style={styles.section}>
        {/* Left Side - Image */}
        <div style={styles.leftSide}>
          <div
            style={styles.imageWrapper}
            onMouseEnter={() => setIsHovered(true)} // Set hover state
            onMouseLeave={() => setIsHovered(false)} // Reset hover state
          >
            <img
              src="/images/Screenshot of Screenshots and Draw.jpg" // Replace with your actual image
              alt="Amazing Features"
              style={styles.image}
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div style={styles.rightSide}>
          <div style={styles.textBlock}>
            <h2>Touch Controls</h2>
            <p style={styles.p}>
              Some headphones have touch <br />
              sensitive surfaces for controlling <br />
              playback.
            </p>
          </div>
          <div style={styles.textBlock}>
            <h2>Sound Quality</h2>
            <p style={styles.p}>
              This includes considerations like <br />
              bass response, clarity, and overall <br />
              audio fidelity.
            </p>
          </div>
          <div style={styles.textBlock}>
            <h2>Microphone</h2>
            <p style={styles.p}>
              Built-in microphones enable <br />
              hands-free calling and voice <br />
              commands.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureHighlights;
