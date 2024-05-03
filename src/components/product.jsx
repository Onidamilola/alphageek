import React, { useState, useRef, useEffect } from 'react';
import axiosInstance from "../utils/AxiosInstance";
import { VISIT_IMAGE, PROFILE } from '../utils/constant';
import Sidebar1 from '../components/sidebar1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CompleteVisitButton from './Completevisitbutton';
import LoadingScreen from './LoadingScreen';

const Product = () => {
    const [imageObjects, setImageObjects] = useState([]);
  const handleFileInput = useRef(null);
  const [loadingText, setLoadingText] = useState(false); // State for loading indicator
  const navigate = useNavigate(); // Hook for navigation
  const [loading, setLoading] = useState(true);



  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    // Map each selected file to an object containing image preview and file itself
    const newImageObjects = files.map(file => ({
      imagePreview: URL.createObjectURL(file),
      imageFile: file
    }));

    // Update state with the new array of image objects
    setImageObjects(prevState => [...prevState, ...newImageObjects]);
  };

  const removeImage = (index) => {
    const newImageObjects = [...imageObjects];
    newImageObjects.splice(index, 1);
    setImageObjects(newImageObjects);
  };

 

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if any image is selected
    if (imageObjects.length === 0) {
      // Show error message using toast
      toast.error('Please select at least one image.');
      return;
    }
  
    setLoading(true); // Set loading state to true
  
    // Retrieve schedule_id from sessionStorage
    const scheduleId = JSON.parse(sessionStorage.getItem('schedule_id'));
    console.log(scheduleId, 'schedule_id');
  
    // You can handle each image separately here
    // Iterate over imageObjects and perform necessary actions for each image
    for (const imageObject of imageObjects) {
      const formData = new FormData();
      formData.append('image', imageObject.imageFile);
      formData.append('schedule_id', scheduleId); // Include schedule_id for each image
  
      try {
        const response = await axiosInstance.post(VISIT_IMAGE, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Response:', response.data);
        // Handle success response
      } catch (error) {
        console.error('Error:', error);
        // Handle error response
      }
    }
  
    setLoading(false); // Set loading state back to false after request completes
  
    // Navigate back to the schedule modal page after all images are uploaded
    navigate('/Product-merchandising');
  };
 

  return (
    <div>
       <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar1 />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ color: 'blue' }}>Outlet Image</label>
            <input
              type="file"
              accept="image/*"
              ref={handleFileInput}
              onChange={handleImageChange}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {imageObjects.map((imageObject, index) => (
                <div key={index} style={{ position: 'relative', marginRight: '10px', marginBottom: '10px' }}>
                  <img src={imageObject.imagePreview} alt="Selected" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <button type="button" onClick={() => removeImage(index)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>X</button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4">
          <CompleteVisitButton loading={loading} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
              SHARE
            </button>
          </div>
        </form>

        {/* Media queries */}
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
            background-color: #f7fafc;
            padding: 20px;
            width: 80%; /* Adjust width as needed */
            margin: auto; /* Center the container horizontally */
          }
        `}</style>
      </div>
    </div>
  )
}

export default Product
