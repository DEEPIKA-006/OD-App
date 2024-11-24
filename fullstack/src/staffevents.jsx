import React, { useState } from 'react';
import './css/staffevent.css'; // Assuming you add styles in a separate CSS file

const EventForm = () => {
  const [permission, setPermission] = useState('grant');

  const handlePermissionChange = (e) => {
    setPermission(e.target.value);
  };

  return (
    <div className="form-container">
      <table className="event-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>DATE</th>
            <th>NAME</th>
            <th>INTER / EXTERNAL COLLEGE</th>
            <th>EVENTS NAME</th>
            <th>PERMISSION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>MM/DD/YYYY</td>
            <td>CHANTHURU</td>
            <td>
              <div className="college-options">
                <div>INTER COLLEGE</div>
                <ul>
                  <li>Nandha Engineering College</li>
                  <li>Department: <span>Computer Science</span></li>
                  
                </ul>

              
              </div>
            </td>
            <td>
              <ul>
              <li>Event 1: <span>Code Hackathon</span></li>
                <li>Event 2: <span>AI Workshop</span></li>
                <li>Event 3: <span>Robotics Expo</span></li>
              </ul>
            </td>
            <td>
          
            
           
              <div className="permission">
                <label>
                  <input 
                    type="radio" 
                    value="grant" 
                    checked={permission === 'grant'} 
                    onChange={handlePermissionChange} 
                  /> 
                  GRANT
                </label>
                <label>
                  <input 
                    type="radio" 
                    value="reject" 
                    checked={permission === 'reject'} 
                    onChange={handlePermissionChange} 
                  /> 
                  REJECT
                </label>
              </div>
            </td>
          
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventForm;
