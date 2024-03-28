import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import axiosInstance from '../utils/AxiosInstance'
import { CREATE_SCHEDULE } from '../utils/constant'
import { USER_OUTLETS } from '../utils/constant'

    const CreateSchedule = () => {
        const [outlets, setOutlets] = useState([])
        const [selectedOutlet, setSelectedOutlet] = useState('');
        const [scheduleDate, setScheduleDate] = useState('');
        const [scheduleTime, setScheduleTime] = useState('');
      
        useEffect(() => {
          const fetchOutletList = async () => {
            try {
              const response = await axiosInstance.get(USER_OUTLETS);
              setOutlets(response.data.data);
            } catch (error) {
              console.error('Error fetching outlet list:', error);
            }
          };
      
          fetchOutletList();
        }, []);
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          try {
            // Retrieve country and state IDs from sessionStorage
            const countryId = sessionStorage.getItem('countryId');
            const stateId = sessionStorage.getItem('stateId');
      
            // Construct FormData object
            const formData = new FormData();
            formData.append('outlet_id', selectedOutlet);
            formData.append('schedule_date', scheduleDate);
            formData.append('schedule_time', scheduleTime);
            formData.append('country_id', countryId);
            formData.append('state_id', stateId);
            formData.append('region_id', '1');
            formData.append('location_id', '1');
      
            // Send FormData to the server
            const response = await axiosInstance.post(CREATE_SCHEDULE, formData);
            console.log('Schedule created:', response.data);
      
            // Handle success, e.g., redirect to another page
          } catch (error) {
            console.error('Error creating schedule:', error);
            // Handle error, e.g., show error message
          }
        };


        return(
            <div>
                 <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="outlet" style={{ color: 'blue' }}></label>
        <select
         id="outlet"
         name="Select outlet"
         value={selectedOutlet}
         onChange={(e) => setSelectedOutlet(e.target.value)}
        style={{ marginBottom: '10px' }}>
        <option value="select outlet">Select Outlet</option>
        {outlets.map(outlet => (
          <option key={outlet.id} value={outlet.id}>
            {outlet.name}
          </option>
        ))}
          </select>

          <label htmlFor="scheduleDate" style={{ color: 'blue' }}>Schedule Date</label>
          <input
            type="date"
            id="scheduleDate"
            name="scheduleDate"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            style={{ marginBottom: '10px' }}
          />

                 
        <label htmlFor="scheduleTime" style={{ color: 'blue' }}>Schedule Time</label>
          <input
            type="time"
            id="scheduleTime"
            name="scheduleTime"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            style={{ marginBottom: '10px' }}
          />

          <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#502ef1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SAVE</button>
      </div>

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
          background-color: #f2f2f2;
          padding: 20px;
          width: 80%; /* Adjust width as needed */
          margin: auto; /* Center the container horizontally */
        }
      `}</style>

            </div>

        )
    }

    export default CreateSchedule;