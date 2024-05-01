import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/dashboard';


const OutletRecruitment = () => {
 

 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
      <div className='bg-blue-400'>
        <Sidebar/>
      </div>

      <div>
        <Dashboard LINK={'/storevisit'} />
      </div>
     
    </div>
  );
};


export default OutletRecruitment;
