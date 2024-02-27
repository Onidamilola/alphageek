import React from 'react'
import { useNavigate } from 'react-router';


const Capture = () => {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/')
  
    
  };
  return (
    <div>
       
      



       <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#502ef1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Capture;
