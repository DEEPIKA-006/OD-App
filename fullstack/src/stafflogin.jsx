import React from 'react';
import './css/Stafflogin.css';
import logo from './photo/nand.jpeg'; // Ensure this is the correct path

function Stafflog() {
  return (
    <div className="staff-login-container">
      <div className="staff-login-form">
        <h1 className="staff-login-title">log in</h1>
        <p className="staff-login-subtitle">
          for student’s <span className="staff-login-link">login</span>
        </p>
        <input
          type="text"
          className="staff-login-input"
          placeholder="user id or email"
        />
        <input
          type="password"
          className="staff-login-input"
          placeholder="password"
        />
        <button className="staff-login-button">Log in</button>
        <p className="staff-forgot-password">Forgot password?</p>
        <p className="staff-signup-text">
          Don’t have an account? <span className="staff-signup-link">sign up</span>
        </p>
      </div>
      <div className="staff-image-container">
        <img src={logo} alt="College" className="staff-college-image" />
      </div>
    </div>
  );
}

export default Stafflog;
