import React from 'react';
import Sidebar1 from './sidebar1';
import { FaBell } from "react-icons/fa";


const Inbox = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '100%' }}>
        <Sidebar1 />
      </div>

      {/* Two containers */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <div style={{ border: '2px solid #ccc',  borderRadius: '5px', padding: '5px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
            <FaBell style={{ color: 'green', fontSize: '24px' }} />
            </div>
            <div>
              <h4 style={{ margin: '0', fontWeight: 'bold' }}>Bold Text</h4>
              <p style={{ margin: '0', fontsize: '5px' }}>Not Bold Text</p>
            </div>
          </div>
        </div>

        {/* Second container */}
        <div style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '5px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
            <FaBell style={{ color: 'green', fontSize: '24px' }} />
            </div>
            <div>
              <h4 style={{ margin: '0', fontWeight: 'bold' }}>Bold Text</h4>
              <p style={{ margin: '0', fontsize: '5px' }}>Not Bold Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
