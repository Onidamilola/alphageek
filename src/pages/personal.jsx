import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_EDUCATIONS } from '../utils/constant';

const Personal = ({ nextStep }) => {
  const [educations, setEducations] = useState([])




  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional validation here if needed
    nextStep();
  };

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await axios.get( GET_EDUCATIONS );
        console.log("Educations Data:", response.data.data);
        setEducations(response.data.data);
      } catch (error) {
        console.error("Error fetching education:", error);
      }
    };

    fetchEducations();
  }, []);

  const handleEducationChange = (e) => {
    const educationId = e.target.value;
    
    
  };

  return (
    <div>
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
          <input type="text" id="firstname" name="firstname" placeholder="First Name" required style={{ marginBottom: '10px' }} />
          <input type="text" id="middlename" name="middlename" placeholder="Middle Name" style={{ marginBottom: '10px' }} />
          <input type="text" id="lastname" name="lastname" placeholder="Last Name" required style={{ marginBottom: '10px' }} />
          <input type="text" id="homeaddress" name="homeaddress" placeholder="Home Address" style={{ marginBottom: '10px' }} />
          <input type="text" id="phonenumber" name="phonenumber" placeholder="Phone Number" required style={{ marginBottom: '10px' }} />
          <select id="Gender" name="Gender" style={{ marginBottom: '10px' }} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select id="selectLocation" name="selectLocation" onChange={handleEducationChange} style={{ marginBottom: '10px' }} required>
            <option value="">Select Qualification</option>
            {educations.map((title) => (
              <option key={title.id} value={title.id}>
                {title.title}
              </option>
            ))}
          </select>

          <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#502ef1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>NEXT</button>
        </form>
      </div>

      {/* Additional styles */}
      <style>{`
        body { font-family: Arial, Helvetica, sans-serif; }
        * { box-sizing: border-box; }
        input[type=text], select, textarea {
          width: 100%;
          padding: 12px;
          border: none;
          border-bottom: 1px solid #ccc;
          border-radius: 4px;
          margin-top: 6px;
          margin-bottom: 16px;
          resize: vertical;
        }
        input[type=submit] {
          background-color: #04AA6D;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        input[type=submit]:hover {
          background-color: #45a049;
        }
        .container {
          border-radius: 5px;
          background-color: #f2f2f2;
          padding: 20px;
          width: 80%; /* Adjust width as needed */
          margin: auto; /* Center the container horizontally */
        }
      `}</style>
    </div>
  );
};

export default Personal;
