import React, { useState } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { UPDATE_PROFILE } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import "react-toastify/dist/ReactToastify.css";


const Capture = () => {
  const [imageFile, setImageFile] = useState(null); // State for selected file
  const [imageUrl, setImageUrl] = useState(null); // State for captured/selected image URL
  const [guarantorFile, setGuarantorFile] = useState(null);
  const navigate = useNavigate();

  const guarantorData = JSON.parse(sessionStorage.getItem('guarantor'));
  const personalListInfo = JSON.parse(sessionStorage.getItem('personalListInfo'));
  const bankData = JSON.parse(sessionStorage.getItem('bankListInfo'));
  const dataToStore = JSON.parse(sessionStorage.getItem('uniqueListInfo'));
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Check for valid image type
    if (!selectedFile.type.match('image/.*')) {
      toast.error("Please select a valid image file");
      return;
    }
    setGuarantorFile(selectedFile);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
      reader.onload = (e) => setGuarantorFile(e.target.result);
  }

 
  

  const handleImageSelection = (event) => {
    event.stopPropagation()
    const selectedFile = event.target.files[0];
    //Check for valid image type
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
  
    const formData = new FormData();
    formData.append('guarantor', JSON.stringify(guarantorData));
    formData.append('personalList', JSON.stringify(personalListInfo));
    formData.append('bankListInfo', JSON.stringify(bankData));
    formData.append('uniqueListInfo', JSON.stringify(dataToStore));
    formData.append('gurantor_id', guarantorFile);
    formData.append('image', imageFile);

  
    try {
      const response = await axiosInstance.post(UPDATE_PROFILE, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
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
  };
  console.log(guarantorData);

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
       <div className="flex items-center gap-2 bg-white ">
          <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faPaperclip} className="text-[#7563d0]"/>
            Upload Guarantor Document
          </label>
          <input id="file" type="file" className="hidden" onChange={handleFileChange} />
        </div>

        {/* Display the name of the uploaded file */}
        {/* {guarantor.guarantor_id && (
          <p>Uploaded Document: {guarantor.guarantor_id.name}</p>
        )} */}

      <div className="mb-10 flex justify-center items-center">
        <label htmlFor="imageInput">
          <input type="file" accept="image/*" id="imageInput" onChange={handleImageSelection} hidden />
          <FontAwesomeIcon icon={faCamera} className="text-4xl text-blue-500 cursor-pointer"  />
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
