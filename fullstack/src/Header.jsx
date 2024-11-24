import React from 'react';
import './css/Header.css'; // CSS file for styles
import logo from './photo/images.png';

const Header = () => {
  return (
    <>
      <div className="header-top-border" />
      <div className="header-container">
      
<img src={logo} alt="Logo"  className="college-logo" />
        <div className="college-info">
          <h1>Nandha Engineering College</h1>
          <p className="autonomous">(AUTONOMOUS)</p>
          <p>Approved by AICTE, New Delhi.</p>
          <p>Affiliated to Anna University, Chennai.</p>
          <p>Accredited by NAAC (A+) Grade & NBA.</p>
        </div>
        <div className="header-buttons">
          <button className="header-button">STUDENT'S NAME</button>
          <button className="header-button">STUDENT'S LOGOUT</button>
        </div>
      </div>
      <div className="header-bottom-border" />
    </>
  );
};

export default Header;

