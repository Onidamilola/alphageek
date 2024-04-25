import React, {useState} from 'react';
import Sidebar1 from '../components/sidebar1'
import Dashboard from '../components/dashboard';
import LoadingScreen from '../components/LoadingScreen';


const PlanogramChecks = () => {
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
};

export default PlanogramChecks;
