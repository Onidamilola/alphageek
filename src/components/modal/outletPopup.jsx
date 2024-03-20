import React from 'react';
import { useNavigate } from 'react-router-dom';


const OutletPopup = ({isVisible, closeModal}) => {
const navigate = useNavigate()
    const handleEditClose= async(event)=>{
        event.preventDefault()
        closeModal()
      }
      const handleEditTab = async(event)=>{
        event.preventDefault()
        navigate("/createoutlet")
      }

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center text-[#7563d0]">
      {isVisible && (
        <div className="bg-purple-100 py-8 rounded-lg px-6 z-557 absolute top-[40%] left">
            <div>
                <p className='text-start font-bold'>Update Outlet</p>
                <p>Are you sure to update your outlet?</p>
                <div className="flex justify-end font-bold mt-3">
                    <button className="mx-3" onClick={handleEditClose}>No</button>
                    <button className="mx-3" onClick={handleEditTab}>Yes</button>
                </div>
            </div>
            
        </div>
      )}
      </div>  )
}

export default OutletPopup