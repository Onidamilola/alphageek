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
    text: 'Click me'
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
    // Check if there's any saved state for button color and text
    const storedState = localStorage.getItem('buttonState');
    if (storedState) {
      // Update the button state from localStorage (assuming it's a stringified object)
      setButtonState(JSON.parse(storedState));
    } else {
      // If no stored state, set default button state (blue and Click me)
      setButtonState({ color: 'blue', text: 'Click me' });
    }
  }, []);

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

    // Update button state (color and text)
    setButtonState({ color: 'green', text: 'Visited' });
    // Save button state to localStorage
    localStorage.setItem('buttonState', JSON.stringify({ color: 'green', text: 'Visited' }));

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
                backgroundColor: visited[visitSchedule.schedule_id] ? 'green' : buttonState.color, // Use button state color if not visited
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleClick(visitSchedule)} // Pass the entire schedule object
              disabled={visited[visitSchedule.schedule_id]}
            >
              {visited[visitSchedule.schedule_id] ? 'Visited' : buttonState.text} {/* Use button state text if not visited */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleModal;
