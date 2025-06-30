// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="app-container">
      {/* Hero */}
      <section className="p1">
        <div className="overlay">
          <div className="p1-text">
            <h1>SmartVote, your online voting system</h1>
            <p>Vote smart. Vote safe. Vote fair.</p>
              <button>Read more</button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="p2">
        <h2>See How SmartVote Works:</h2>
        <p className="p2d">
          Follow these simple steps to experience secure and transparent campus elections with SmartVote.
        </p>
        <div className="steps">
          <div className="step"><span>1️⃣</span><h3>Register</h3><p>Sign up using your School ID and student details.</p></div>
          <div className="step"><span>2️⃣</span><h3>Get Verified</h3><p>Admins verify your identity using face or ID.</p></div>
          <div className="step"><span>3️⃣</span><h3>Cast Your Vote</h3><p>Login during the election period and vote securely.</p></div>
          <div className="step"><span>4️⃣</span><h3>See Results</h3><p>Watch votes update live and receive confirmation.</p></div>
        </div>
      </section>

      {/* Info Block */}
      <div className="p3">
        <div className="overlay">
          <div className="overlay-content">
            <p>
              SmartVote is designed to make campus elections easy, secure, and <br />
              transparent. With advanced features like real-time monitoring and face recognition, <br />
              we ensure every vote counts.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="features">
        <div className="feature"><div className="icon">🔐</div><h3>Secure Voting</h3><p>Ensuring safe and tamper‑proof elections.</p></div>
        <div className="feature"><div className="icon">📊</div><h3>Real‑Time Monitoring</h3><p>Track vote counts instantly.</p></div>
        <div className="feature"><div className="icon">🧑‍💻</div><h3>Face Recognition</h3><p>Smart ID checks for voters.</p></div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat"><h2>2000+</h2><p>Registered Students</p></div>
        <div className="stat"><h2>98%</h2><p>Participation Rate</p></div>
        <div className="stat"><h2>0</h2><p>Security Breaches</p></div>
      </section>
    </div>
  );
};

export default Home;
