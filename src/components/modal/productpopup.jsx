import React, { useState, useEffect } from 'react'
import { BRANDS } from '../../utils/constant';
import axiosInstance from '../../utils/AxiosInstance';

const ProductPopup = () => {
    const [brands, setBrands] = useState([]);
    const [selectedbrand, setSelectedBrand] = useState('');

    useEffect(() => {
        const fetchBrand = async () => {
          try {
            const response = await axiosInstance.get( BRANDS );
            const data = response.data.data
            setBrands(data);
            console.log(data)
          } catch (error) {
            console.error('Error fetching brand list:', error);
            
          }
        };
    
        fetchBrand();
      }, []);

  return (
    <div className="container" >
      <form>
      <label htmlFor="brands" style={{ color: 'blue' }}></label>
        <select
         id="brands"
         name="Select brands"
         value={selectedbrand}
         onChange={(e) => setSelectedBrand(e.target.value)}
        style={{ marginBottom: '10px' }}>
        <option value="select brand">Select Brand</option>
        {brands.map(brand => (
          <option key={brand.brand_name} value={brand.brand_name}>
            {brand.brand_name}
          </option>
        ))}
          </select>
         
      </form>
      <div style={{ height: '100px' }}></div>

      <div className="button-container">
        <button
          type="button"
          style={{
            width: '100%',
            padding: '5px 100px',
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          SAVE
        </button>
      </div>
      <style jsx>{`
       .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }
      .button-container {
        margin-top: auto; /* Push the container to the bottom */
      }
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
          height: 50px;
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

export default ProductPopup;