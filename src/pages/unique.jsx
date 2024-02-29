import React, {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios';


const Unique = ({nextStep}) => {
  const [countries, setCountries] = useState([]);
  // const [states, setStates] = useState([]);
  // const [lgas, setLgas] = useState([]);

  useEffect(() => {
    // Fetch countries data
    axios.get('https://d-aggregate.com/Alphageekbackend/api/countries')
      .then(response => {
        console.log('Countries response:', response.data);
    setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });

    // Fetch states data
  //   axios.get('https://d-aggregate.com/Alphageekbackend/api/allstates')
  //     .then(response => {
  //       setStates(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching states:', error);
  //     });

  //   // Fetch LGAs data
  //   axios.post('https://d-aggregate.com/Alphageekbackend/api/lga')
  //     .then(response => {
  //       setLgas(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching LGAs:', error);
  //     });
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    nextStep()
  };
  return (
    <div>
       <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
        <select id="country" name="Select Country" style={{ marginBottom: '10px' }} required>
            <option value="">Select Country</option>
            {countries.length > 0 && countries.map(country => (
    <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
  ))}
          </select>
          <select id="state" name="state" style={{ marginBottom: '10px' }} required>
            <option value="">State</option>
            {/* {states.map(state => (
              <option key={state.id} value={state.name}>{state.name}</option>
            ))} */}
          </select>
          <select id="selectlga" name="select lga" style={{ marginBottom: '10px' }} required>
          <option value="">Select LGA</option>
          {/* {lgas.map(lga => (
              <option key={lga.id} value={lga.name}>{lga.name}</option>
            ))} */}
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
