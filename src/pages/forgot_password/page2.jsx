import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Lock from '../../assets/images/lock.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { RESET_PASSWORD } from '../../utils/constant';

const Page2 = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const navigate = useNavigate();

    const isOtpComplete = otp.every((digit) => digit !== '');

  useEffect(() => {
    for (let i = 0; i < otp.length; i++) {
      if (!otp[i]) {
        document.getElementById(`otp-input-${i}`).focus();
        break;
      }
    }
  }, [otp]);

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };

      const handleOtpChange = (index, value) => {
        if (value >= 0 && value <= 9) {
          const newOtpDigits = [...otp];
          newOtpDigits[index] = value;
          setOtp(newOtpDigits);
    
          if (index < newOtpDigits.length - 1 && value !== '') {
            document.getElementById(`otp-input-${index + 1}`).focus();
          }
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(RESET_PASSWORD, {
            token: otp.join(''),
            password: password,
          });
      
          if (response.status === 200) {
            console.log('Password reset successful');
            navigate("/");
            // Add your logic for navigating to the next page or displaying a success message
          }
        } catch (error) {
          console.error('Error resetting password:', error.response.data);
          // Add your logic for displaying an error message
        }
      }
    
  return (
    <div>
       <div className="bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col items-center justify-center px-4">
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm">

      <div className="relative mb-5">
      <form onSubmit={handleSubmit} className=''>
              <p className='text-gray-700 text-lg mb-2'>Your 4-Digit Code</p>
              {otp.map((value, index) => (
                <input
                  key={index}
                  type='tel'
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  min='0'
                  max='9'
                  maxLength='1'
                  required
                  id={`otp-input-${index}`}
                  tabIndex={index + 1}
                  className='border md:bg-bg-green bg-white border-border-primary h-10 w-14 text-center m-2 rounded-lg p-4'
                />
              ))}
            </form>
      </div>
        
        <div className="relative mb-5">
          <input
           type={showPassword ? 'text' : 'password'}
           placeholder="New Password"
           value={password}
           onChange={handlePasswordChange}
           required
            className="w-full py-2 px-10 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
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
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Reset Password</button>
      </form>
     

    </div>
    </div>
  )
}

export default Page2
