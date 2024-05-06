import React, { useEffect, useState } from "react";
import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_STATES, GET_LGAs } from "../utils/constant";
import useLocalStorage from "../custom-hooks/useLocalStorage";

const Unique = ({ nextStep }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [lgas, setLgas] = useState([]);
  const [selectedLga, setSelectedLga] = useState("");
  const [uniqueList, setUniqueList] = useState({
    country_id: '',
    state_id: '',
    lga: ''
  });

  // Use custom hook to store country and state IDs in both localStorage and sessionStorage
  const [storedCountryId, setStoredCountryId] = useLocalStorage('selectedCountryId', null);
  const [storedStateId, setStoredStateId] = useLocalStorage('selectedStateId', null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(GET_ALL_COUNTRIES);
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) {
        setStates([]);
        return;
      }
      try {
        const response = await axios.post(
          GET_STATES,
          { country_id: selectedCountry.toString() }
        );
        setStates(response.data.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates()
  }, [selectedCountry]);

  useEffect(() => {
    const fetchLGA = async () => {
      if (!selectedState) {
        setLgas([]);
        return;
      }
      try {
        const response = await axios.post(
          GET_LGAs,
          { state_id: selectedState.toString() }
        );
        setLgas(response.data.data);
      } catch (error) {
        console.error("Error fetching LGAs:", error);
      }
    };
    fetchLGA()
  }, [selectedState]);

  const handleCountryChange = (e) => {
    const countryId = +e.target.value;
    setSelectedCountry(countryId);
    setSelectedState('');
    setUniqueList({ ...uniqueList, country_id: countryId });
    // Store selected country ID in both localStorage and sessionStorage
    setStoredCountryId(countryId);
    sessionStorage.setItem('selectedCountryId', countryId);
  };

  const handleStateChange = (e) => {
    const stateId = +e.target.value;
    setSelectedState(stateId);
    setUniqueList({ ...uniqueList, state_id: stateId });
    // Store selected state ID in both localStorage and sessionStorage
    setStoredStateId(stateId);
    sessionStorage.setItem('selectedStateId', stateId);
  };

  const handleLGAChange = (e) => {
    const LGA = +e.target.value;
    setSelectedLga(LGA);
    setUniqueList({ ...uniqueList, lga: LGA });
    sessionStorage.setItem('selectedLGA', LGA);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit logic
  };

  const handleUnique = async (event) => {
    event.preventDefault();
    // Handle unique logic
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
