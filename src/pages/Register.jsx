// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import "./register.css"; // Keep your custom styling
import Registr from "../assets/Reg.jpeg"; // Import your image

const Register = () => {
  const navigate = useNavigate(); // ✅ Added
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    gender: "",
    yearLevel: "",
    course: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
    alert("Registration submitted!");
  };

  return (
    <div className="register-page">
      {/* Left Illustration */}
      <div className="register-illustration"> 
        <img src={Registr} alt="register" />
        <div className="img-overlay"></div>
      </div>

      {/* Right Form Panel */}
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Student Registration</h2>

          {/* Full Name & Student ID */}
          <div className="form-row">
            <div className="input-wide">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-narrow">
              <input
                type="text"
                name="studentId"
                placeholder="School ID"
                required
                value={formData.studentId}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Gender & Year Level */}
          <div className="form-row">
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="LGBTQIA+">LGBTQIA+</option>
            </select>

            <select
              name="yearLevel"
              required
              value={formData.yearLevel}
              onChange={handleChange}
            >
              <option value="">Year Level</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          {/* Course & Email */}
          <div className="form-row">
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="BSIT">BSIT</option>
              <option value="BSED">BSED</option>
              <option value="BSBA">BSBA</option>
              <option value="BSCRIM">BSCRIM</option>
              <option value="BSHM">BSHM</option>
              <option value="BEED">BEED</option>
              <option value="BSN">BSN</option>
              <option value="BSA">BSA</option>
            </select>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          {/* Upload ID Image */}
          <div className="form-row">
            <input
              type="file"
              name="idImage"
              accept="image/*"
              required
              onChange={(e) =>
                setFormData({ ...formData, idImage: e.target.files[0] })
              }
            />
          </div>

          <button type="submit">Register</button>

          <p className="login-redirect">
            Already have an account?{" "}
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
