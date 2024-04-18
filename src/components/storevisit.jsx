import React, { useState, useRef, useEffect } from 'react';
import axiosInstance from "../utils/AxiosInstance";
import { VISIT_DATA, PROFILE } from '../utils/constant';
import Sidebar1 from '../components/sidebar1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const StoreVisit = () => {
  const [imageObject, setImageObject] = useState(null);
  const handleFileInput = useRef(null);
  const [countryId, setCountryId] = useState('');
  const [stateId, setStateId] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch country and state IDs from the same API endpoint
        const response = await axiosInstance.get( PROFILE );
        const data = response.data.data;
  const reg_info = data.reg_info;
  const employee = reg_info.employee;
  console.log(employee)
        setCountryId(employee.country_id);
        setStateId(employee.state_id);
        setAddress(employee.address)
              console.log(employee.country_id, employee.state_id, address);
      } catch (error) {
        console.error('Error fetching country and state IDs:', error);
      }
    };

    fetchData();
  }, []);
  
 

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Exit if no file selected

    const reader = new FileReader();

    reader.onload = (e) => {
      setImageObject({
        imagePreview: e.target.result,
        imageFile: selectedFile,
      });
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleNote = (e) => {
    const newNote = e.target.value;
    setNote(newNote)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Retrieve visit schedule data from sessionStorage
    const visitSchedules = JSON.parse(sessionStorage.getItem('visitSchedules'));
  
    // Retrieve schedule_id from sessionStorage
    const scheduleId = JSON.parse(sessionStorage.getItem('schedule_id'));
  
    // Find the selected schedule from visitSchedules based on schedule_id
    const selectedSchedule = visitSchedules.find(schedule => schedule.schedule_id === scheduleId);
  
    if (!selectedSchedule) {
      console.error('Schedule not found for schedule_id:', scheduleId);
      return;
    }
  
    // Prepare FormData object with image, notes, and other necessary data
    const formData = new FormData();
    if (imageObject) {
      formData.append('image', imageObject.imageFile);
    }
    
    formData.append('details_status', '1'); // Add details_status field with value 1
  
    // Include schedule_id separately
    formData.append('schedule_id', scheduleId);
  
    // Include other properties from selectedSchedule
    formData.append('outlet_id', selectedSchedule.outlet_id);
    formData.append('visit_date', selectedSchedule.schedule_date);
    formData.append('visit_time', selectedSchedule.schedule_time); 
    formData.append('country_id', countryId);
    formData.append('state_id', stateId);
    formData.append('region_id', selectedSchedule.region_id);
    formData.append('location_id', address);
    formData.append('notes', note);
  console.log(note);
    // Make a POST request using Axios
    try {
      const response = await axiosInstance.post(VISIT_DATA, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      // Handle success response
      // Navigate back to the schedule modal page
      navigate('/visit-schedule');
    } catch (error) {
      console.error('Error:', error);
      // Handle error response
    }
  };
  

  
  return (
    <div>
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar1 />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ color: 'blue' }}>Outlet Image</label>
            <input
              type="file"
              accept="image/*"
              ref={handleFileInput}
              onChange={handleImageChange}
            />
            {imageObject && <img src={imageObject.imagePreview} alt="Selected" />}
          </div>

          <div>
            <label style={{ color: 'blue' }}>Note</label>
            <textarea
              id="note"
              name="note"
              placeholder="Write Something..."
              onChange={handleNote}
              style={{ height: '100px', marginBottom: '10px' }}
            />
          </div>

          <div className="flex justify-center gap-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              COMPLETE VISIT
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
              SHARE
            </button>
          </div>
        </form>

        {/* Media queries */}
        <style jsx>{`
          @media screen and (max-width: 768px) {
            .container {
              // Mobile styles
            }
          }
        `}</style>

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
            background-color: #f7fafc;
            padding: 20px;
            width: 80%; /* Adjust width as needed */
            margin: auto; /* Center the container horizontally */
          }
        `}</style>
      </div>
    </div>
  );
}

export default StoreVisit;
