import React from 'react';
import { useNavigate } from 'react-router-dom';


const EditPopup = ({isVisible, closeModal}) => {
const navigate = useNavigate()
    const handleEditClose= async(event)=>{
        event.preventDefault()
        closeModal()
      }
      const handleEditTab = async(event)=>{
        event.preventDefault()
        navigate("/tabs")
      }

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center text-[#7563d0]">
      {isVisible && (
        <div className="bg-purple-100 py-8 rounded-lg px-6 z-557 absolute top-[40%] left">
            <div>
                <p className='text-start font-bold'>Update Profile</p>
                <p>Are you sure to update your profile?</p>
                <div className="flex justify-end font-bold mt-3">
                    <button className="mx-3" onClick={handleEditClose}>No</button>
                    <button className="mx-3" onClick={handleEditTab}>Yes</button>
                </div>
            </div>
            
        </div>
      )}
      </div>  )
}

export default EditPopup