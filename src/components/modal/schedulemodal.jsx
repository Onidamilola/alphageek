import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ScheduleModal = () => {
  const [visited, setVisited] = useState(false); // State to track if store visit is completed

  const handleClick = () => {
    // Here you can call the function or perform any action related to visiting the store
    // For example, making an API request to mark the visit as completed
    // Once the visit is successfully completed, setVisited(true) should be called
    // axiosInstance.post('/markVisitCompleted', { /* Any necessary data */ })
    //   .then(() => {
    //     setVisited(true);
    //   })
    //   .catch((error) => {
    //     console.error('Error marking visit as completed:', error);
    //   });
    // For demonstration purpose, I'm just setting the visited state to true immediately
    setVisited(true);
    toast.success("Recruitment visit Successfully Added");
  };

  const handleVisitClick = () => {
    // Navigate to the "storevisit" page when the button is clicked
    return <Navigate to="/storevisit" />;
  };

  return (
    <div className=" w-full bg-gray-100 p-6 rounded-t-3xl">
      <h1 className="text-2xl font-bold mb-4">Outlets</h1>
      <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">name</h2>
            <p>address</p>
            <p>phone</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}> 
          <button
            type="button"
            style={{
              width: '100%', 
              padding: '10px 20px',
              backgroundColor: visited ? 'green' : '#007bff', // Change background color based on visit status
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={visited ? handleVisitClick : handleClick}
            disabled={visited} // Disable button if visit is already completed
          >
            {visited ? 'Visited' : 'Visit Schedule'} {/* Change text based on visit status */}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>      
  );
};

export default ScheduleModal;