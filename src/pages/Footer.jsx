// src/pages/Footer.jsx
import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="footer-container">
        <p>&copy; 2025 SmartVote. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
