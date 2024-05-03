import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SchedulePopup from "./schedulepopup";
// import Map from "../map";

const ScheduleModal = ({ visitSchedules, link }) => {
  const [visited, setVisited] = useState(false); // State to track if store visit is completed for each schedule
  const [outletInfo, setOutletInfo] = useState(' ');
  const [showPopup, setShowPopup] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch outlet information from the API
    if (visitSchedules.length > 0) {
      setOutletInfo(visitSchedules[0]); // Set info to the first schedule by default
      // Save visit schedules data to sessionStorage
      sessionStorage.setItem('visitSchedules', JSON.stringify(visitSchedules));
    } else {
      setOutletInfo(null);
    }
  }, [visitSchedules]);

  useEffect(() => {
    // Check if any visit status is greater than 0
    if (visitSchedules.some(schedule => schedule.visit_status > 0)) {
      setVisited(true);
    } else {
      setVisited(false);
    }
  }, [visitSchedules]);

  const handleClick = async (schedule) => {
    try {
      // Save updated visited status to sessionStorage
      sessionStorage.setItem('visitSchedules', JSON.stringify(visitSchedules));

      // Extract and save schedule_id to sessionStorage
      const scheduleId = schedule.schedule_id;
      sessionStorage.setItem('schedule_id', JSON.stringify(scheduleId));

      // If visit status is greater than 0, show the popup, else navigate to storevisit
      if (schedule.visit_status > 0) {
        setShowPopup(true);
      } else {
        Navigate(link, { state: { schedule_id: scheduleId } });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };


  return (
    <div className="w-full bg-gray-100 p-6 rounded-t-3xl">
      <h1 className="text-2xl font-bold mb-4">Schedules</h1>
      {visitSchedules.map((visitSchedule, index) => (
        <div key={index} className="flex flex-col bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex justify-between">
            {outletInfo ? (
              <div className="flex flex-col">
                <div>
                  <h2 className="text-xl font-bold">{visitSchedule.outlet_name}</h2>
                  <p>{visitSchedule.outlet_address}</p>
                  <p>{visitSchedule.date}</p>
                  <p>{visitSchedule.time}</p>
                </div>
                {/* Display Google Map for each outlet */}
                {visitSchedule.gio_lat && visitSchedule.gio_long && (
                  <div style={{ width: '50%', height: '10px', marginLeft: '20px' }}>
                    {/* <Map latitude={visitSchedule.gio_lat} longitude={visitSchedule.gio_long} /> */}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {/* <h2 className="text-xl font-bold">Loading...</h2> */}
              </div>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              style={{
                width: '100%',
                maxWidth: '200px',
                padding: '10px 20px',
                backgroundColor: visitSchedule.visit_status > 0 ? 'green' : 'blue',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'block', 
                margin: 'auto',
              }}
              onClick={() => handleClick(visitSchedule)} // Pass the entire schedule object
             
            >
              {visitSchedule.visit_status > 0 ? 'Visited' : 'Visit Schedule'}
            </button>
          </div>
        </div>
      ))}
       <div className="flex items-center justify-center bg-black bg-opacity-50 z-557 absolute top-1/2 left text-center">
      {showPopup && <SchedulePopup
      visitSchedules={visitSchedules}
      scheduleId={(sessionStorage.getItem('schedule_id'))}
      closeModal={() => setShowPopup(false)}
      isVisible={showPopup}
      />}
      </div>
    </div>
  );
};

export default ScheduleModal;
