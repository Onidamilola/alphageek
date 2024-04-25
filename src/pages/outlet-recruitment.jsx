import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import LoadingScreen from '../components/LoadingScreen';
import Dashboard from '../components/dashboard';

const OutletRecruitment = () => {
  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading((loading) => !loading);
  }, 2000);

  if (loading) {
    return <h3>
      <>
      <LoadingScreen />
      </>
    </h3>;
}

// If page is not in loading state, display page.
else {
 


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
      <div className='bg-blue-400'>
        <Sidebar/>
      </div>

      <div>
        <Dashboard />
      </div>
     
    </div>
  );
};
};

export default OutletRecruitment;
