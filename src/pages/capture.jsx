import React, { useState } from 'react';
import axios from 'axios';
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { UPDATE_KYC } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCamera } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import "react-toastify/dist/ReactToastify.css";


const Capture = () => {
  const [imageFile, setImageFile] = useState(null); // State for selected file
  const [imageUrl, setImageUrl] = useState(null); // State for captured/selected image URL
  const [guarantorFile, setGuarantorFile] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [imagename, setImageName] = useState(null);
  const [loading, setLoading] = useState(false);

  const guarantorData = JSON.parse(sessionStorage.getItem('guarantor'));
  const personalListInfo = JSON.parse(sessionStorage.getItem('personalListInfo'));
  const bankData = JSON.parse(sessionStorage.getItem('bankListInfo'));
  const dataToStore = JSON.parse(sessionStorage.getItem('uniqueList'));
  const id = JSON.parse(sessionStorage.getItem('id'));
  const email = JSON.parse(sessionStorage.getItem('email'));
  
  const handleFileChange = (event) => {
    console.log('Event:', event); // Log the event object
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile); // Log the selected file
    // Check for valid image type
    if (!selectedFile.type.match('image/.*')) {
      toast.error("Please select a valid image file");
      return;
    }
    setGuarantorFile(selectedFile);
    setImageName(selectedFile.name)
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (e) => console.log(e.target.result);
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
    setLoading(true)
    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }
  
    const formData = new FormData();
    formData.append('guarantor_name', JSON.stringify(guarantorData.guarantor_name));
    formData.append('guarantor_phone', JSON.stringify(guarantorData.guarantor_phone));
    formData.append('guarantor_email', JSON.stringify(guarantorData.guarantor_email));
    formData.append('guarantor_id_type', JSON.stringify(guarantorData.guarantor_id_type));
    formData.append('firstname', JSON.stringify(personalListInfo.firstname));
    formData.append('middlename', JSON.stringify(personalListInfo.middlename));
    formData.append('lastname', JSON.stringify(personalListInfo.lastname));
    formData.append('address', JSON.stringify(personalListInfo.address));
    formData.append('phone', JSON.stringify(personalListInfo.phone));
    formData.append('gender', JSON.stringify(personalListInfo.gender));
    formData.append('education', JSON.stringify(personalListInfo.education));
    formData.append('bank_id', JSON.stringify(bankData.bankId));
    formData.append('account_name', JSON.stringify(bankData.account_name));
    formData.append('account_number', JSON.stringify(bankData.account_number));
    formData.append('guarantor_id', guarantorFile);
    formData.append('id', JSON.stringify(id));
    formData.append('image', imageFile);
    formData.append('email', email);
    console.log('formData', formData);

    console.log('id', id);
    try {
      const response = await axios.post(UPDATE_KYC, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        toast.success("KYC form submitted successfully");
        navigate("/");
      }
      setLoading(false)
    } catch (error) {
      console.error('Error submitting KYC form:', error);
      console.log('error.response.data:', error);
      toast.error("Error submitting KYC form");
      setLoading(false)
    }
  
    setImageFile(null);
    setImageUrl(null);
  };
  console.log(guarantorData);
  console.log('guarantorFile:', guarantorFile);
console.log('guarantorData:', guarantorData);
console.log('personalListInfo:', personalListInfo);
console.log('bankData:', bankData);
console.log('id:', id);


  return (

    <div className="flex flex-col items-center justify-center h-screen relative">
      {
        step == 1 &&
        <div className="flex flex-col items-center bg-white ">
          <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faPaperclip} className="text-[#7563d0]"/>
            Upload Guarantor Document
          </label>
          <div>{imagename} file uploaded</div>
          <input id="file" type="file" className="hidden" onChange={handleFileChange} />
          <button onClick={() => {
              if(imagename) {
                setStep(2);
              }else {
                toast.error('Kindly upload document')
              }
           }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20">
            Next
          </button>
        </div>
      }
       

      {
        step == 2 &&
        <>
        <div className="mb-10 flex justify-center items-center">
             <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => setStep(1)}
        className="absolute top-20 left-5 text-3xl cursor-pointer"
      />
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
        {loading ? "loading..." : "submit"}
      </button>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
        </>
      }   
    </div>
  );
};

export default Capture;
