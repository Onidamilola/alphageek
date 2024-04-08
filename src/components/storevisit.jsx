import React, { useState, useRef } from 'react';
import Sidebar1 from '../components/sidebar1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const StoreVisit = () =>{
  const [imageObject, setImageObject] = useState(null);
  const handleFileInput = useRef(null);
  
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (!selectedFile) return; // Exit if no file selected
  
    const reader = new FileReader();
  
    reader.onload = (e) => {
      setImageObject({
        imagePreview: e.target.result,
        imageFile: selectedFile,
      });
    };
    console.log(selectedFile);
  
    reader.readAsDataURL(selectedFile);
  };


  return (
    <div>
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <Sidebar1 />
      </div>
      
        <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <form>
        <div style={{ marginBottom: '30px' }}>
      <label style={{ color: 'blue' }}>Outlet Image</label>
      <input
        type="file"
        accept="image/*"
        ref={handleFileInput}
        onChange={handleImageChange}
      />
      {imageObject && <img src={imageObject.imagePreview} alt="Selected" />}
    </div>
          
    <div>
      <label style={{ color: 'blue' }}>Note</label>
      <textarea 
        id="note" 
        name="note" 
        placeholder="Write Something..." 
        style={{ height: '100px', marginBottom: '10px' }} 
      />
    </div>
        </form>
        <div className="flex justify-center gap-4">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
    COMPLETE VISIT
  </button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
    SHARE
  </button>
</div>

      
       
      </div>
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
    
    
  )
}

export default StoreVisit;
