import React from 'react';
import Sidebar1 from './sidebar1';
import Button from './button';

const OutletList = () => {
  return (
    <div>
    <Sidebar1 />
    <div style={{ padding: '20px' }}>
    </div>
    <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      <Button />
    </div>
  </div>
  );
};


export default OutletList;
