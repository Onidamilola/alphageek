import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div style={{ 
      width: '100%', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}>
      <Link to="/createschedule">
        <button style={buttonStyle}>CREATE SCHEDULE</button>
      </Link>
    </div>
  );
};

const buttonStyle = {
  width: '200px',
  height: '50px',
  backgroundColor: '#502ef1',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '18px',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 0.3s ease',
};

// Media query for mobile responsiveness
if (window.matchMedia("(max-width: 768px)").matches) {
  buttonStyle.width = '200px';
  buttonStyle.height = '40px';
  buttonStyle.fontSize = '16px';
}

export default Button;
