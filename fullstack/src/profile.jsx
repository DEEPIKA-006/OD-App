import React, { useState } from 'react';
import './css/profile.css'; // Import custom CSS for styling

const UserProfile = () => {
  // Predefined list of events
  const [events, setEvents] = useState([
    { id: 1, college: 'Inter College', event: 'Coding Competition', prize: '1st Prize' },
    { id: 2, college: 'External College', event: 'Math Olympiad', prize: '2nd Prize' },
    { id: 3, college: 'Inter College', event: 'Robotics Challenge', prize: '3rd Prize' },
  ]);

  // State to store student prize counts
  const [prizeCounts, setPrizeCounts] = useState({
    firstPrize: 0,
    secondPrize: 0,
    thirdPrize: 0,
    participation: 0,
  });

  // Populate student prize data on component mount
  const initializePrizeCounts = () => {
    const firstPrizeCount = events.filter(event => event.prize === '1st Prize').length;
    const secondPrizeCount = events.filter(event => event.prize === '2nd Prize').length;
    const thirdPrizeCount = events.filter(event => event.prize === '3rd Prize').length;

    setPrizeCounts({
      firstPrize: firstPrizeCount,
      secondPrize: secondPrizeCount,
      thirdPrize: thirdPrizeCount,
      participation: events.length, // Total events
    });
  };

  // Initialize prize counts when component mounts
  React.useEffect(() => {
    initializePrizeCounts();
  }, []);

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-box">
        <div className="profile-image">
          <img src="/path-to-profile-image.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          <p><strong>NAME:</strong> DEEPIKA R</p>
          <p><strong>DEPARTMENT:</strong> CSE</p>
          <p><strong>BATCH:</strong> 2022-24</p>
          <p><strong>1st PRIZE COUNT:</strong> {prizeCounts.firstPrize}</p>
          <p><strong>2nd PRIZE COUNT:</strong> {prizeCounts.secondPrize}</p>
          <p><strong>3rd PRIZE COUNT:</strong> {prizeCounts.thirdPrize}</p>
          <p><strong>PARTICIPATION COUNT:</strong> {prizeCounts.participation}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>INTER / EXTERNAL COLLEGE</th>
              <th>EVENTS NAME</th>
              <th>PRIZE</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.college}</td>
                <td>{event.event}</td>
                <td>{event.prize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
