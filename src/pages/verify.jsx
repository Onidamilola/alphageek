import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router';
import { VERIFY_CODE } from '../utils/constant';
import LoadingScreen from '../components/LoadingScreen';


const Verify = () => {
  const [code, setCode] = useState('');
  const Navigate = useNavigate();
  const [hasRefreshed, setHasRefreshed] = useState(false); // Flag for one-time refresh
  const [loading, setLoading] = useState(true);

  

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
const verified = new FormData();
verified.append("code", code)

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post( VERIFY_CODE, verified )
      .then(response => {
        // Handle successful registration

        console.log(response.data);
        if (response.status === 200) {
          toast.success('Login successful!');
          Navigate('/homepage');
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

  setTimeout(() => {
    setLoading((loading) => !loading);
  }, 2000);

  if (loading) {
    return <h3>
      <>
      <LoadingScreen />
      </>
    </h3>;
}

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
