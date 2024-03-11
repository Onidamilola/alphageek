import React, { useEffect, useState } from "react";
import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_STATES, GET_LGAs } from "../utils/constant";

const Unique = ({ nextStep }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null); // Initialize as null
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedState] = useState("");
  const [lgas, setLgas] = useState([])
  const [uniqueList, setUniqueList] = useState({
    country: '',
    state: '',
    localG: ''
  });

  

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(GET_ALL_COUNTRIES);
        console.log("Countries Data:", response.data.data);
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(()=>{
    const fetchStates = async () => {
      if (!selectedCountry) {
        setStates([]);
        return;
      }
      try {
        const response = await axios.post(
          GET_STATES,
          { country_id: selectedCountry.toString() } // Convert to string
        );
        console.log("States Data:", response.data);
      
        setStates(response.data.data);
              
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates()
  }, [selectedCountry])

  
  useEffect(()=>{
    const fetchLGA = async () => {
      if (!selectedStates) {
        setLgas([]);
        return;
      }
      try {
        const response = await axios.post(
          GET_LGAs,
          { state_id: selectedStates.toString() } // Convert to string
        );
        console.log("lgas Data:", response.data);
      
        setLgas(response.data.data);
              
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchLGA()
  }, [selectedStates])

  
  const handleCountryChange = (e) => {
    const countryId = +e.target.value;
    setSelectedCountry(countryId);
    setSelectedState('');
    setUniqueList({...uniqueList, country: countryId})
  };

  const handleStateChange = (e) => {
    const stateId = +e.target.value;
    setSelectedState(stateId);
    setUniqueList({...uniqueList, state: stateId})
  };
  const handleLGAChange = (e) => {
    const LGA = +e.target.value;
    setUniqueList({...uniqueList, localG: LGA})

  };
  const handleSubmit = async (event) => {
    event.preventDefault(); 
  };

  const handleUnique = async (event) => {
    event.preventDefault();
    const selectedCountryObject = countries.find((countr) => countr.id === uniqueList.country);
    const selectedStateObject = states.find((statee) => statee.id === uniqueList.state);
    const selectedLGAObject = countries.find((local) => local.id === uniqueList.localG);
    sessionStorage.setItem("uniqueListInfo", JSON.stringify({...uniqueList, country: selectedCountryObject.id, state: selectedStateObject.id}))
    console.log("hello,:", uniqueList)

    nextStep();
  };

  return (
    <div>
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
          <select
            className="mb-[10px]"
            onChange={handleCountryChange}
            required
            value={uniqueList.country}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.country_name}
              </option>
            ))}
          </select>

          <select id="state" name="state" style={{ marginBottom: '10px' }} required onChange={handleStateChange} value={uniqueList.state}>
            <option value="">State</option>
            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.state_name}
              </option>
            ))}
          </select>

          <select id="selectlga" name="select lga" style={{ marginBottom: '10px' }} required onChange={handleLGAChange} value={uniqueList.localG}>
          <option value="">Select LGA</option>
            {lgas.map((lga) => (
              <option key={lga.id} value={lga.id}>
                {lga.location_name}
              </option>
            ))}
          </select>

          <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#502ef1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleUnique}>NEXT</button>

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
  );
}

export default Unique;
