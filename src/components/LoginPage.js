import React, { useState } from 'react';
import logoImage from '../assets/images/alpha.png';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import User from '../assets/images/user.png'
import Lock from '../assets/images/lock.png'


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleShowPasswordToggle = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img src={logoImage} alt="Alpha" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '40px' }} />
      <h2>User Login</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px' }}>
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
           <img 
             src={User}
             alt="user"
             style={{
               position: 'absolute',
               top: '50%',
               left: '10px',
               transform: 'translateY(-50%)',
               width: '20px', // Adjust the width of the icon
               height: 'auto' // Maintain aspect ratio
             }}
          />
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
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
               width: '20px', // Adjust the width of the icon
               height: 'auto' // Maintain aspect ratio
             }}
          />
        
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
      </form>
      <div style={{  textAlign: 'center', marginBottom: '15px' }}>
        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Forgot Password?</a>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <span style={{ color: '#007bff', textDecoration: 'none' }}>Don't have an account? </span>
        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Sign Up</a>
      </div>
    </div>
  );
};

export default LoginPage;
