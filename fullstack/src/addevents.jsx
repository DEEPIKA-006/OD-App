import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Addevents.css';  // Import custom CSS

const CollegeEventForm = () => {
  const [regNo, setRegNo] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [collegeType, setCollegeType] = useState({
    inter: false,
    external: false,
  });
  const [prizes, setPrizes] = useState({
    prize: false,
    first: false,
    second: false,
    third: false,
    participation: false,
  });
  const [eventName, setEventName] = useState(['', '', '']);
  const [uploadedCertificate, setUploadedCertificate] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (e, index) => {
    const newEventNames = [...eventName];
    newEventNames[index] = e.target.value;
    setEventName(newEventNames);
  };

  const handleFileUpload = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      regNo,
      selectedDate,
      collegeType,
      prizes,
      eventName,
      uploadedCertificate,
      uploadedFile,
    };
    console.log(formData);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">College Event Participation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Left Side Form */}
            <div className="col-md-6">
              {/* Registration Number */}
              <div className="form-group mb-3">
                <label className="form-label">Registration No</label>
                <input
                  type="text"
                  className="form-control"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  placeholder="Enter your Reg No"
                />
              </div>

              {/* Date Picker */}
              <div className="form-group mb-3">
                <label className="form-label">Select Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="form-control"
                  placeholderText="mm / dd / yyyy"
                />
              </div>

              {/* Inter/External College */}
              <div className="form-group mb-3">
                <label className="form-label">College Type</label>
                <div>
                  <input
                    type="checkbox"
                    checked={collegeType.inter}
                    onChange={() => setCollegeType({ ...collegeType, inter: !collegeType.inter })}
                  />{' '}
                  Inter College
                  {collegeType.inter && (
                    <div className="ml-3 mt-2">
                      <input type="checkbox" /> Nandha Engineering College <br />
                      <input type="checkbox" /> Nandha Technology <br />
                      <input type="checkbox" /> Nandha Arts and Science College <br />
                      <input type="checkbox" /> Nandha Polytechnic College <br />
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    checked={collegeType.external}
                    onChange={() => setCollegeType({ ...collegeType, external: !collegeType.external })}
                  />{' '}
                  External College
                  {collegeType.external && (
                    <div className="ml-3 mt-2">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="College Name"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Department"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Events Name */}
              <div className="form-group mb-3">
                <label className="form-label">Events Name</label>
                {eventName.map((event, index) => (
                  <input
                    key={index}
                    type="text"
                    className="form-control mb-2"
                    value={event}
                    placeholder={`Event ${index + 1}`}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-md-6">
              {/* Prize / Participation */}
              <div className="form-group mb-3">
                <label className="form-label">Prize / Participation</label>
                <div>
                  <input
                    type="checkbox"
                    checked={prizes.prize}
                    onChange={() => setPrizes({ ...prizes, prize: !prizes.prize })}
                  />{' '}
                  Prize
                </div>
                {prizes.prize && (
                  <div className="ml-3 mt-2">
                    <input
                      type="checkbox"
                      checked={prizes.first}
                      onChange={() => setPrizes({ ...prizes, first: !prizes.first })}
                    />{' '}
                    1st Prize <br />
                    <input
                      type="checkbox"
                      checked={prizes.second}
                      onChange={() => setPrizes({ ...prizes, second: !prizes.second })}
                    />{' '}
                    2nd Prize <br />
                    <input
                      type="checkbox"
                      checked={prizes.third}
                      onChange={() => setPrizes({ ...prizes, third: !prizes.third })}
                    />{' '}
                    3rd Prize <br />
                  </div>
                )}
                <div className="mt-2">
                  <input
                    type="checkbox"
                    checked={prizes.participation}
                    onChange={() => setPrizes({ ...prizes, participation: !prizes.participation })}
                  />{' '}
                  Participation
                </div>
              </div>

              {/* Certificate Upload */}
              <div className="form-group mb-3">
                <label className="form-label">Certificate Upload</label>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleFileUpload(e, setUploadedCertificate)}
                  />
                </div>
              </div>

              {/* Additional File Upload */}
              <div className="form-group mb-3">
                <label className="form-label">Additional Upload</label>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleFileUpload(e, setUploadedFile)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollegeEventForm;
