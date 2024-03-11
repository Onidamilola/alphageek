import React, { useState } from 'react';
import axios from 'axios';
import { UPDATE_PROFILE } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import "react-toastify/dist/ReactToastify.css";

const Capture = () => {
  const [image, setImage] = useState("");
  const [imageCaptured, setImageCaptured] = useState(null);
  const navigate = useNavigate()

  const guarantorData = JSON.parse(sessionStorage.getItem('guarantor'));
  const personalList = JSON.parse(sessionStorage.getItem('personalList'));
  const bankData = JSON.parse(sessionStorage.getItem('bankListInfo'));
  const dataToStore = JSON.parse(sessionStorage.getItem('selectedLocationData'));
  

  const handleCameraClick = () => {
    // Request access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageDataURL = canvas.toDataURL('image/png');
          setImage(imageDataURL);
          stream.getVideoTracks()[0].stop();
        };
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
        toast.error("Error accessing the camera");
      });
  };

  const handleSave = async () => {
    console.log('Image saved:', image);
    if (image) {
      setImageCaptured(image);
      toast.success("Image is saved");

      try {
        const response = await axios.post( UPDATE_PROFILE, {
          guarantor: guarantorData,
          personalList: personalList,
          bankListInfo: bankData,
          selectedLocationData: dataToStore,
          image: imageCaptured,
        });
        if (response.status === 200) {
          toast.success("KYC form submitted successfully");
          navigate("/homepage");
        }
          } catch (error) {
        console.error('Error submitting KYC form:', error);
        toast.error("Error submitting KYC form");
      }
    }
    setImage("");
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="mb-10">
        <label htmlFor="cameraInput">
          <FontAwesomeIcon icon={faCamera} onClick={handleCameraClick} className="text-8xl text-blue-500 cursor-pointer" />
        </label>
      </div>
      {imageCaptured && (
        <div className="text-center mb-4">
          <img src={imageCaptured} alt="Captured" className="max-w-full h-auto rounded-lg" />
        </div>
      )}
      {image && (
        <div className="text-center mb-4">
          <img src={image} alt="Preview" className="max-w-full h-auto rounded-lg" />
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
