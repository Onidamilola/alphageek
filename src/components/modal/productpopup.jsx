import React, { useState, useEffect } from 'react'
import { BRANDS } from '../../utils/constant';
import axios from 'axios';

const ProductPopup = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
          try {
            const response = await axios.get( BRANDS );
            console.log("Brands Data:", response.data.data);
            setBrands(response.data.brand_name);
          } catch (error) {
            console.error("Error fetching banks:", error);
          }
        };
    
        fetchBrands();
      }, []);

  return (
    <div>
      <form>
      <label htmlFor="brand" style={{ color: 'blue' }}></label>
        <select id="brand" name="SelectBrand" onChange={(e) => {
          setBrands(e.target.value);
          console.log(e.target.value);
          }} style={{ marginBottom: '10px' }}>
          <option value="select brand">Select Brand</option>
          {brands.map((data) => (
              <option key={data.id} value={data.id}>
                {data.type_name}
                </option>
            ))}
        </select>
      </form>
    </div>
  )
}

export default ProductPopup;
