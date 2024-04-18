import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from "../map";

const ScheduleModal = ({ visitSchedules, updateButton }) => {
  const [visited, setVisited] = useState([]); // State to track if store visit is completed for each schedule
  const [outletInfo, setOutletInfo] = useState(null); // State to store outlet information
  const [buttonState, setButtonState] = useState({
    color: 'blue',
    text: 'Visit Schedule'
  }); // State object for button color and text
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
    // Initialize visited array with the length of visitSchedules and set all values to false initially
    setVisited(new Array(visitSchedules.length).fill(false));
  }, [visitSchedules]);

  useEffect(() => {
    // Check if any visit status is greater than 0
    if (visitSchedules.some(schedule => schedule.visit_status > 0)) {
      setButtonState({ color: 'green', text: 'Visited' });
    } else {
      setButtonState({ color: 'blue', text: 'Visit Schedule' });
    }
  }, [visitSchedules]);

  const handleClick = (schedule) => {
    // Update visited status
    const updatedVisited = [...visited];
    updatedVisited[schedule.schedule_id] = true;
    setVisited(updatedVisited);

    // Save updated visited status to sessionStorage
    sessionStorage.setItem('visitSchedules', JSON.stringify(visitSchedules));

    // Extract and save schedule_id to sessionStorage
    const scheduleId = schedule.schedule_id;
    sessionStorage.setItem('schedule_id', JSON.stringify(scheduleId));

    // Call the external function to update the button color and text
    updateButton('green', 'Visited');

    // Navigate to storevisit with schedule_id
    Navigate("/storevisit", { state: { schedule_id: scheduleId } });
  };

  const handleVisitClick = () => {
    // Navigate to storevisit only if the schedule is visited
    if (visited.some((visit) => visit)) {
      Navigate("/storevisit");
    } else {
      toast.error("Please visit the store first.");
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
                  <p>{visitSchedule.schedule_date}</p>
                  <p>{visitSchedule.schedule_time}</p>
                </div>
                {/* Display Google Map for each outlet */}
                {visitSchedule.gio_lat && visitSchedule.gio_long && (
                  <div style={{ width: '50%', height: '10px', marginLeft: '20px' }}>
                    <Map latitude={visitSchedule.gio_lat} longitude={visitSchedule.gio_long} />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold">Loading...</h2>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              style={{
                width: '100%',
                padding: '10px 20px',
                backgroundColor: buttonState.color,
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleClick(visitSchedule)} // Pass the entire schedule object
              disabled={visited[visitSchedule.schedule_id]}
            >
              {buttonState.text}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleModal;
