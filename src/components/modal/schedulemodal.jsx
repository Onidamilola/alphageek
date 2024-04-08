import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";



const scheduleModal = () => {
   
  


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
            type="submit"
            style={{
              width: '100%', 
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Visit Schedule
          </button>
        </div>
      </div>
    </div>      
  );
};

export default scheduleModal;
