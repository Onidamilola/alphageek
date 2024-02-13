import React, { useState } from 'react';
import Sidebar1 from './sidebar1';
import Button from './button';

const OutletList = () => {
  const [outlet, setOutlet] = useState(null);

  const handleCreateOutlet = () => {
    // Simulate creating an outlet
    const createdOutlet = 'Example Outlet';
    setOutlet(createdOutlet);
  };

  return (
    <div>
      <Sidebar1 />
      <div style={{ padding: '20px' }}>
        {outlet ? (
          <div>
            <h2>Outlet Created:</h2>
            <p>{outlet}</p>
          </div>
        ) : (
          <h2 style={{  textAlign: 'center',  fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>No Outlet Found</h2>
        )}
      </div>
      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Button onClick={handleCreateOutlet} label="Create Outlet" />
      </div>
    </div>
  );
};

export default OutletList;

