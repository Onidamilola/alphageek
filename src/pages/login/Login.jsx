import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import logoImage from '../../assets/images/alpha.png';
import User from '../../assets/images/user.png';
import Lock from '../../assets/images/lock.png';
import Open from '../../assets/images/open.png';
import { LOGIN } from '../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

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
    const app_type = 1;
    e.preventDefault();
    axios.post(LOGIN, { email, password, app_type })
      .then(response => {
        // Handle successful login
        console.log(response.data);
        toast.success(response.data.message);
        navigate('/verify');
      })
      .catch(error => {
        // Handle login error
        console.error("Error saving changes:", error);
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 || status === 404 || status === 422) {
            // Bad Request (400)
            if (data && data.errors) {
              Object.values(data.errors).flat().forEach(errorMessage => {
                toast.error(`${errorMessage}`);
              });
            } else if (status && data && data.message) {
              toast.error(`${data.message}`);
            } else {
              toast.error('Bad Request. Please check your input.');
            }
          } else if (status === 500) {
            // Internal Server Error (500)
            toast.error('Internal Server Error. Please try again later.');
          } else {
            // Display an error toast with the API response message for other status codes
            toast.error(data.message || 'An unexpected error occurred.');
          }
        } else {
          // Handle other errors
          toast.error('An unexpected error occurred.');
        }
      });
  };

  return (
    <div style={{
      backgroundImage: `url(${Open})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', 
      position: 'relative',
      justifyContent: 'center', 
      alignContent: 'center',
      '@media only screen and (max-width: 600px)': {
        padding: '10px',
        marginTop: '50px'
    },
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img src={logoImage} alt="" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '10px' }} />
      <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>User Login</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px', justifyContent: 'center' }}>
        <div style={{ position: 'relative', marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ 
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundPosition: '10px 50%',
              backgroundSize: '20px 20px',
              paddingLeft: '40px'
             }}
          />
           
          <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#7563d0] text-xl" />
          <i className="fa fa-envelope" style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}></i>
        </div>
        <div style={{ position: 'relative', marginBottom: '15px' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ 
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundPosition: '10px 50%',
              backgroundSize: '20px 20px',
              paddingLeft: '40px'
             }}
          />
          
          <img 
             src={Lock}
             alt="Lock"
             style={{
               position: 'absolute',
               top: '50%',
               left: '10px',
               transform: 'translateY(-50%)',
               width: '20px', 
               height: 'auto' 
             }}
          />
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
        {/* <ButtonLogin /> */}
        <button type="submit" style={{ width: '100%', padding: '10px 20px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      {/* Display login error message */}

      {loginError && <div>{loginError}</div>}
      <div style={{  textAlign: 'center', marginTop: '15px' }}>
        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Forgot Password?</a>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <span style={{ textDecoration: 'none' }}>Don't have an account? </span>
        <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>
        Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
