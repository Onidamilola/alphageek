import React, { useState } from 'react';
import Sidebar1 from './sidebar1';
import ProductPopup from './modal/productpopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductMerc = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  
    return (
      <div>
        <div>
          <Sidebar1 />
        </div>
        <div className="flex justify-center mt-3">
          <button 
            className="bg-white text-black font-bold py-2 px-4 rounded w-full md:w-auto"
            onClick={togglePopup}
          >
            <FontAwesomeIcon icon={faPlus} style={{ color: "#63E6BE" }} className="mr-2" />
            Add Product
          </button>
        </div>
       
        {showPopup && <ProductPopup onClose={togglePopup} />} {/* Render the popup component if showPopup is true */}
        
     
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
          //boxShadow: '0 -2px 4px rgba(0,0,0,0.1)', 
          zIndex: 999, 
        }}
      >
        <button
          type="button"
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  );
}

export default ProductMerc;
