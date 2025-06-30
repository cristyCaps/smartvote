// src/pages/AuthPage.jsx
import React, { useState } from "react";
import "./auth.css";
import Register from "./Register";
import Login from "./Login";
import RegImage from "../assets/Reg.jpeg";
import LoginImage from "../assets/Login.jpeg";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="auth-page">
      {/* Left image panel */}
      <div
        className={`auth-illustration ${isLogin ? "slide-left" : ""}`}
      >
        <img
          src={isLogin ? LoginImage : RegImage}
          alt="Auth Illustration"
        />
        <div className="img-overlay"></div>
      </div>

      {/* Right form panel */}
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          {isLogin ? (
            <>
              <Login />
              <p className="switch-text">
                Don’t have an account?{" "}
                <span onClick={() => setIsLogin(false)}>Register here</span>
              </p>
            </>
          ) : (
            <>
              <Register />
              <p className="switch-text">
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login here</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
