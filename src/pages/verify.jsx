import React, { useState,useEffect } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router';
import { VERIFY_CODE } from '../utils/constant';
import LoadingScreen from '../components/LoadingScreen';

const Verify = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  

 

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const verified = new FormData();
    verified.append("code", code);

    axiosInstance.post(VERIFY_CODE, verified)
      .then(response => {
        if (response.status === 200) {
          toast.success('Login successful!');
          navigate('/homepage');
          setLoading(false);
        }
        
      })
      
      .catch(error => {
        console.log('Error:', error);
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Failed to verify code. Please try again.");
          setLoading(false); // Stop loading
        }
      })
      .finally(() => {
       
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
        <button type="submit" className="w-full py-2 px-4 bg-[#7563d0] text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          {loading ? "loading..." : "Verify"}
          </button>
      </form>
      {loading && <LoadingScreen />}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Verify;



