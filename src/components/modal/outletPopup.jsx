import React, {useState, useEffect} from 'react'
import axiosInstance from '../../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { EDIT_OUTLET } from '../../utils/constant'



const OutletPopup = ({ outlets, isVisible, closeModal }) => {
  const navigate = useNavigate();
  

  const handleEditClose = (event) => {
    event.preventDefault();
    closeModal();
  };

  const handleEditTab = async (e) => {
    console.log('outlet list:', outlets);


    try {
      const response = await axiosInstance.get(`${EDIT_OUTLET}?outlet_id=${outlets[0].outlet_id}`);
      console.log(response.data.data);
      navigate(`/updateoutlet`);
      
      // Handle success
    } catch (error) {
      console.error('Error editing:', error);
      // Handle error
    }
  };
 

  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center text-[#7563d0]">
      {isVisible && (
        <div className="bg-purple-100 py-8 rounded-lg px-6 z-557 absolute top-[40%] left">
          <div>
            <p className="text-start font-bold">Update Outlet</p>
            <p>Are you sure you want to update this outlet?</p>
            <div className="flex justify-end font-bold mt-3">
            <button className="mx-3" onClick={(event) => handleEditClose(event, closeModal)}>No</button>
              <button className="mx-3" onClick={handleEditTab}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutletPopup;
