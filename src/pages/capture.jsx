import React, { useState } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import { UPDATE_PROFILE } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import "react-toastify/dist/ReactToastify.css";


const Capture = () => {
  const [imageFile, setImageFile] = useState(null); // State for selected file
  const [imageUrl, setImageUrl] = useState(null); // State for captured/selected image URL
  const navigate = useNavigate();

  const guarantorData = JSON.parse(sessionStorage.getItem('guarantor'));
  const personalList = JSON.parse(sessionStorage.getItem('personalList'));
  const bankData = JSON.parse(sessionStorage.getItem('bankListInfo'));
  const dataToStore = JSON.parse(sessionStorage.getItem('selectedLocationData'));

  const handleImageSelection = (event) => {
    const selectedFile = event.target.files[0];
    // Check for valid image type
    if (!selectedFile.type.match('image/.*')) {
      toast.error("Please select a valid image file");
      return;
    }
    setImageFile(selectedFile);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (e) => setImageUrl(e.target.result);
  }

  const handleSave = async () => {
    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }
    console.log('Image selected:', imageFile);

    const formData = new FormData();
    formData.append('guarantor', JSON.stringify(guarantorData));
    formData.append('personalList', JSON.stringify(personalList));
    formData.append('bankListInfo', JSON.stringify(bankData));
    formData.append('selectedLocationData', JSON.stringify(dataToStore));
    formData.append('image', imageFile);

    try {
      const response = await axiosInstance.post(UPDATE_PROFILE, formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Required for FormData
        }
      });
      if (response.status === 200) {
        toast.success("KYC form submitted successfully");
        navigate("/");
      }
    } catch (error) {
      console.error('Error submitting KYC form:', error);
      toast.error("Error submitting KYC form");
    }

    setImageFile(null);
    setImageUrl(null);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="mb-10 flex justify-center items-center">
        <label htmlFor="imageInput">
          <input type="file" accept="image/*" id="imageInput" onChange={handleImageSelection} hidden />
          <FontAwesomeIcon icon={faCamera} className="text-4xl text-blue-500 cursor-pointer" onClick={() => document.getElementById('imageInput').click()} />
        </label>
      </div>
      {imageUrl && (
        <div className="text-center mb-4">
          <img src={imageUrl} alt="Selected" className="max-w-full h-auto rounded-lg" />
        </div>
      )}
      <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20">
        Submit
      </button>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Capture;
