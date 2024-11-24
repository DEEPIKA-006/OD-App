import React, { useState } from 'react';
import './css/Singup.css'; // Ensure this is the correct path
import logo from './photo/nand.jpeg'; // Ensure this is the correct path

const SignupPage = () => {
  const [formData, setFormData] = useState({
    personalEmail: '',
    collegeEmailID: '',
    userName: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      try {
        console.log(formData)
        
        const response = await fetch('http://localhost:6600/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
        } else {
          alert(data.message || 'Error occurred');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to register user.');
      }
    }
  };

  return (
    <div className='singin'>
    <div className="signup-container">
      
      <div className="image-container">
        <img src={logo} alt="Signup Illustration" />
      </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="personalEmail">Personal Email</label>
            <input
              type="email"
              name="personalEmail"
              id="personalEmail"
              placeholder="Personal Email"
              value={formData.personalEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="collegeEmailID">College Email ID</label>
            <input
            className='iginput'
              type="email"
              name="collegeEmailID"
              id="collegeEmailID"
              placeholder="College Email ID"
              value={formData.collegeEmailID}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="userName">User Name</label>
            <input
            className='iginput'
              type="text"
              name="userName"
              id="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={passwordError ? 'error' : ''}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Re-enter Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={passwordError ? 'error' : ''}
              required
            />
          </div>
          <div className="terms">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label htmlFor="termsAccepted">I agree with the terms and conditions</label>
          </div>
          <button className='buttonsr' type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignupPage;
