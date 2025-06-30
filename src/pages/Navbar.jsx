import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../assets/smartv.png";
import "../index.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="SmartVote Logo" className="logo" />
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!isMenuOpen)}
        role="button"
        aria-label="Toggle menu"
      >
        ☰
      </div>

      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          <Link to="#">Elections ▾</Link>
          <ul className="dropdown-menu">
            <li><Link to="#">Upcoming Elections</Link></li>
            <li><Link to="#">Past Elections</Link></li>
            <li><Link to="#">Candidates</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="#">Stats ▾</Link>
          <ul className="dropdown-menu">
            <li><Link to="#">Live Results</Link></li>
            <li><Link to="#">Participation Rate</Link></li>
          </ul>
        </li>

        <li><Link to="#">Features</Link></li>
        <li><Link to="#">About</Link></li>

        <li className="dropdown">
          <Link to="#">Account ▾</Link>
          <ul className="dropdown-menu">
            <li><Link to="/login">Sign In</Link></li> 
            <li><Link to="/register">Sign Up</Link></li> 
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
