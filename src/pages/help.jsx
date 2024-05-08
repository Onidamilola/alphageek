import React from 'react';
import Sidebar1 from '../components/sidebar1';
import PDF from '../assets/pdf/help.pdf';

const Help = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar1 />
      </div>

      
      {/* Content with custom scrollbar */}
      <div style={{ overflowY: 'scroll', flex: '1', padding: '0 20px' }}>

        {/* Display PDF */}
        <div style={{ width: '100%', textAlign: 'center' }}>
        <iframe src={PDF} style={{ width: '100%', height: '500px', border: 'none' }} title="Help PDF"></iframe>

        </div>
      </div>
    </div>
  );
};

export default Help;
