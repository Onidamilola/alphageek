import React from 'react';
import Sidebar1 from '../components/sidebar1'
import Dashboard from '../components/dashboard';



const ProductOrdering = () => {
  
 

 
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
      {/* Sidebar */}
      <div>
        <Sidebar1 />
      </div>
        <div>
          <Dashboard />
        </div>
     
    </div>
  );
};


export default ProductOrdering;
