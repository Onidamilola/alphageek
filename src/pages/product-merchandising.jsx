import React from 'react';
import Sidebar1 from '../components/sidebar1'
import Dashboard from '../components/dashboard';


const ProductMerchandising = () => {



  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
      {/* Sidebar */}
      <div>
        <Sidebar1 />
      </div>

     <div>
      <Dashboard LINK={'/productmech'} />
     </div>

    </div>
  );
};


export default ProductMerchandising;
