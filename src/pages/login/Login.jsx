import React, { useState } from 'react';
import axios from 'axios';
import logoImage from '../../assets/images/alpha.png';
import User from '../../assets/images/user.png';
import Lock from '../../assets/images/lock.png';
import Open from '../../assets/images/open.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    e.preventDefault();
    axios.post('https://d-aggregate.com/Alphageekbackend/api/login', { email, password })
      .then(response => {
        // Handle successful login
        console.log(response.data);
      })
      .catch(error => {
        // Handle login error
        console.log('Error:', error);
        setLoginError('Failed to login. Please check your credentials.');
      });
  };

  return (
    <div style={{
      backgroundImage: `url(${Open})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', 
      justifyContent: 'center', 
      alignContent: 'center',
      '@media only screen and (max-width: 600px)': {
        padding: '10px',
        marginTop: '50px'
    },
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img src={logoImage} alt="" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '10px' }} />
      <h2>User Login</h2>
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
           <img 
             src={User}
             alt="user"
             style={{
               position: 'absolute',
               top: '50%',
               left: '10px',
               transform: 'translateY(-50%)',
               width: '20px', 
               height: 'auto'
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
        
        </div>
        {/* <ButtonLogin /> */}
        <button type="submit" style={{ width: '100%', padding: '10px 20px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
      </form>
      {loginError && <div>{loginError}</div>}
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

export default Login;
