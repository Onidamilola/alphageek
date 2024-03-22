import React, { useState } from 'react';
import axiosInstance from '../../utils/AxiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { FORGOT_PASSWORD } from '../../utils/constant';

const Page1 = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(FORGOT_PASSWORD, { email });
      console.log(response.data);
      if (response.status === 200) {
        toast.success('Code sent Successfully!');
        Navigate('/page2');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to send code. Please try again.");
      }
    }
  };



  return (
    <div>
         <div className="bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col items-center justify-center px-4">
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        
        <div className="relative mb-5">
          <input
           type="email"
           placeholder="Email Address"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
            className="w-full py-2 px-10 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
          />
           <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#7563d0] text-xl" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Continue</button>
      </form>
      {message && <p>{message}</p>}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

    </div>
      
    </div>
  )
}

export default Page1
