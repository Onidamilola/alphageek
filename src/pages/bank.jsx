import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_BANKS } from '../utils/constant';


const Bank = ({ nextStep }) => {
  const [banks, setBanks] = useState([]);

 
  const handleSubmit = async (event) => {
    event.preventDefault();

    nextStep();
  };

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get( GET_BANKS );
        console.log("Banks Data:", response.data.data);
        setBanks(response.data.data);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
  }, []);

  const handleBankChange = (e) => {
    const bankId = e.target.value;
    
    
  };

  return (
    <div>
       <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
       <form onSubmit={handleSubmit}>
       <select id="accounts" name="Select Bank" onChange={handleBankChange} style={{ marginBottom: '10px' }}>
            <option value="bank">Select Bank</option>
            {banks.map((bank) => (
              <option key={bank.id} value={bank.id}>
                {bank.bank_name}
              </option>
            ))}
          </select>
          <input type="text" id="accountname" name="accountname" placeholder="Account Name" style={{ marginBottom: '10px' }} />
         <input type="text" id="accountnumber" name="accountnumber" placeholder="Account Number" style={{ marginBottom: '10px' }} />
  
  
          <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#502ef1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleSubmit}>NEXT</button>
       </form>
        </div>
  
        <style>{`
          @media screen and (max-width: 768px) {
            .container {
              // Mobile styles
            }
          }
        `}</style>
  
        {/* Additional styles */}
        <style>{`
          body { font-family: Arial, Helvetica, sans-serif; }
          * { box-sizing: border-box; }
          input[type=text], select, textarea {
            width: 100%;
            padding: 12px;
            border: none;
            border-bottom: 1px solid #ccc;
            border-radius: 4px;
            margin-top: 6px;
            margin-bottom: 16px;
            resize: vertical;
          }
          input[type=submit] {
            background-color: #04AA6D;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          input[type=submit]:hover {
            background-color: #45a049;
          }
          .container {
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
            width: 80%; /* Adjust width as needed */
            margin: auto; /* Center the container horizontally */
          }
        `}</style>
  
    </div>
  )
}

export default Bank;
