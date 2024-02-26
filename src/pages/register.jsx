import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import logoImage from '../assets/images/alpha.png';
import User from '../assets/images/user.png';
import Lock from '../assets/images/lock.png';
import Open from '../assets/images/open.png';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import { REGISTER } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const device_id = uuidv4(); // Generate random UUID
    axios.post(REGISTER, { name, email, password, device_id })
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
    <div className="bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col items-center justify-center px-2" style={{ backgroundImage: `url(${Open})` }}>
      <img src={logoImage} alt="" className="w-48 h-48 rounded-full mb-5" />
      <h2 className="font-bold text-3xl mb-5">User Registration</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            autoComplete="off"
            onChange={handleNameChange}
            required
            className="w-full py-2 px-10 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
          />
          <img src={User} alt="user" className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-auto" />
        </div>
        <div className="relative mb-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full py-2 px-10 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
          />
          <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#7563d0] text-xl" />
        </div>
        <div className="relative mb-5">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full py-2 px-10 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
          />
          <img src={Lock} alt="Lock" className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-auto" />
          {showPassword ? (
            <FontAwesomeIcon icon={faEye}
              onClick={handleTogglePassword}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-auto cursor-pointer text-[#7563d0]"
            />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash}
              onClick={handleTogglePassword}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-auto cursor-pointer text-[#7563d0]"
            />
          )}
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </form>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

      {registerError && <div>{registerError}</div>}
      <div className="text-center mt-6">
        <span className="">Already have an account? </span>
        <Link to="/" className="text-blue-500">Login</Link>
      </div>
    </div>
  );
};

export default Register;
