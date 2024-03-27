import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import axiosInstance from '../utils/AxiosInstance'
import { CREATE_SCHEDULE } from '../utils/constant'
import { USER_OUTLETS } from '../utils/constant'

    const CreateSchedule = () => {
        const [outlet, setOutlet] = useState([])

       


        return(
            <div>
                 <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="outlet" style={{ color: 'blue' }}></label>
        <select id="outlet" name="Select outlet" style={{ marginBottom: '10px' }}>
          <option value="select outlet">Select Outlet</option>
          </select>

          <input style={{ marginBottom: '10px' }} type="date" id="start" name="trip-start" value="2024-02-12"
                min="1925-01-01" max="2030-12-31"/>
                 <input style={{ marginBottom: '10px' }} type="time" id="appt" name="appt"></input>

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