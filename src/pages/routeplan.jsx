import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { GiCheckMark } from "react-icons/gi";

const RoutePlan = () => {
  const [activeTab, setActiveTab] = useState('SUN'); // Default active tab is 'SUN'

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  // Function to generate grid items
  const generateGridItems = () => {
    const areas = ['Agege',
     'Apapa',
      'Ikeja',
      'Ajeromi/Ifelodun',
      'Ifako/Ijaye',
      'Lagos Island',
      'Lagos mainland',
      'Mushin',
      'Oshodi/Isolo',
      'Shomolu',
      'Surulere',
      'Alimosho',
      'Amuwo Odofin',
      'Ojo',
      'Eti Osa',
      'Ikorodu',
      'Badagry',
      'Epe',
      'Ibeju Lekki',
       'Kosofe'];

    return areas.map((area, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <GiCheckMark  style={{ marginRight: '5px',  color: 'green', fontSize: '14px' }} /> {/* React icon */}
        {area}
      </div>
    ));
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>

      {/* Tab buttons */}
      <div style={{ overflow: 'hidden', border: '1px solid #ccc', backgroundColor: '#502ef1', display: 'flex', justifyContent: 'start' }}>
        <button
          className={`tablinks ${activeTab === 'SUN' ? 'active' : ''}`}
          style={{
            backgroundColor: 'inherit',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '10px',
            width: 'auto', // Adjust width to fit content
            transition: '0.3s',
            textDecoration: 'none', // Remove default underline
            textAlign: 'left', // Align text to the left
          }}
          onClick={() => openCity('SUN')}
        >
          SUN
        </button>
        {/* Add similar inline styles for other buttons */}
      </div>

      {/* Tab content */}
      <div
        id="City"
        className={`tabcontent ${activeTab === 'City' ? 'active' : ''}`}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', padding: '20px', justifyContent: 'center' }}
      >
        {/* Generate grid items */}
        {generateGridItems()}
      </div>
    </div>
  );
};

export default RoutePlan;
