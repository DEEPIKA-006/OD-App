import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/EventForm.css'; // Updated CSS for full width and floating button

const EventList = () => {
  const navigate = useNavigate();
  const goToPage = (page) => {
    navigate(`/${page}`);
  };

  // Sample data
  const [eventData, setEventData] = useState([
    {
      id: 1,
      date: '09/29/2024',
      college: 'Nandha Engineering College',
      events: ['paper', 'tech'],
      prize: '1st Prize',
      certificate: 'certificate1.pdf',
      upload: 'upload1.pdf',
    },
    {
      id: 2,
      date: '09/28/2024',
      college: 'ksr College',
      events: ['tech', 'paper'],
      prize: 'Participation',
      certificate: 'certificate2.pdf',
      upload: 'upload2.pdf',
    },
  ]);

  return (
    <>
      <div className="table-container">
        <table className="event-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DATE</th>
              <th>INTER / EXTERNAL COLLEGE</th>
              <th>EVENTS NAME</th>
              <th>PRIZE / PARTICIPATION</th>
              <th>CERTIFICATE</th>
              <th>UPLOAD</th>
            </tr>
          </thead>
          <tbody>
            {eventData.map((event, index) => (
              <tr key={event.id}>
                <td>{index + 1}</td>
                <td>{event.date}</td>
                <td>{event.college}</td>
                <td>{event.events.join(', ')}</td>
                <td>{event.prize}</td>
                <td>
                  <a href={`/${event.certificate}`} target="_blank" rel="noopener noreferrer">
                    {event.certificate}
                  </a>
                </td>
                <td>
                  <a href={`/${event.upload}`} target="_blank" rel="noopener noreferrer">
                    {event.upload}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Button */}
      <div className="floating-button" onClick={() => goToPage('idea')}>
        <span>+</span>
      </div>
    </>
  );
};

export default EventList;
