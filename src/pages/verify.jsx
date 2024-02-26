import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import logoImage from '../assets/images/alpha.png';
import Open from '../assets/images/open.png';
import { useNavigate } from 'react-router';
import { VERIFY_CODE } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const Verify = () => {
  const [code, setCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();


  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post( VERIFY_CODE, { code })
      .then(response => {
        // Handle successful registration
        console.log(response.data);
        if (response.status === 201) {
          toast.success('Registration successful!');
          Navigate('/login');
        }
      })
      .catch(error => {
        // Handle registration error
        console.log('Error:', error);
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Failed to register. Please try again.");
        }
      });
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col items-center justify-center px-4">
      <h2 className="font-bold text-3xl mb-5">Verify Client</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Code"
            value={code}
            onChange={handleCodeChange}
            required
            className="w-full py-2 px-10 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-[#7563d0] text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Verify</button>
      </form>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

    </div>
  );
};

export default Verify;
