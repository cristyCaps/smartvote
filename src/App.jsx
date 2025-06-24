import React from "react";
import "./index.css";
import logo from "./assets/smartv.png";

const App = () => (
  <div className="app-container">
    {/* Navbar */}
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="SmartVote Logo" className="logo" />
      </div>
      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Elections</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Stats</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>

    {/* Hero */}
    <section className="p1">
      <div className="p1-text">
        <h1>Welcome to SmartVote</h1>
        <p>Vote smart. Vote safe. Vote fair.</p>
        <button>READ MORE</button>
      </div>
      
    </section>

    {/* Features */}
    <section className="features">
      <div className="feature">
        <div className="icon">🔐</div><h3>Secure Voting</h3><p>Ensuring safe and tamper‑proof elections.</p>
      </div>
      <div className="feature">
        <div className="icon">📊</div><h3>Real‑Time Monitoring</h3><p>Track vote counts instantly.</p>
      </div>
      <div className="feature">
        <div className="icon">🧑‍💻</div><h3>Face Recognition</h3><p>Smart ID checks for voters.</p>
      </div>
    </section>

    {/* Stats */}
    <section className="stats">
      <div className="stat"><h2>2000+</h2><p>Registered Students</p></div>
      <div className="stat"><h2>98%</h2><p>Participation Rate</p></div>
      <div className="stat"><h2>0</h2><p>Security Breaches</p></div>
    </section>
  </div>
);

export default App;
