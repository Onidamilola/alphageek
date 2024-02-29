import React, { useEffect, useState } from "react";
import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_STATES } from "../utils/constant";



const Unique = ({nextStep}) => {
  const [countries, setCountries] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [states, setStates] = useState("")
  const [selectedStates, setSelectedState] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    nextStep()
  };

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    const fetchCountries = async () => {
      try {
        const response = await axios.get(GET_ALL_COUNTRIES);
        setCountries(response.data.data);
      } catch (error) {
      }
    };

    fetchCountries();
  }, []);
  const fetchStates = async (expectedCountryId, secondParameter) => {
    try {
      const response = await axios.post(
        GET_STATES`/${expectedCountryId}`
      );
      setStates(response.data.data);
      if (secondParameter !== "") {
        setSelectedState(secondParameter);
      }
    } catch (error) {
    }
  };
  const handleCountryChange = async (event) => {
    const selectedCountryId = event.target.value;

    // Find the selected country object
    const selectedCountryObject = countries.find(
      (country) => country.id === selectedCountryId
    );

    // Update selectedCountry state with the entire country object
    setSelectedCountry(selectedCountryObject.id);

    // Fetch states based on the selected country
    fetchStates(selectedCountryObject.id, "");
  };
  return (
    <div>
       <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
        <select
                  className=" mb-[10px]"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
       
          <select id="state" name="state" style={{ marginBottom: '10px' }} required>
            <option value="">State</option>
            <option value="state">lagos</option>
          </select>
          <select id="selectlga" name="select lga" style={{ marginBottom: '10px' }} required>
            <option value="">Select LGA</option>
            <option value="state">Agege</option>
          </select>
  
  
          <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#502ef1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>NEXT</button>

        </form>
             </div>
  
        <style jsx>{`
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

export default Unique;
