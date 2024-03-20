import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import { USER_OUTLETS } from '../utils/constant';
import Sidebar1 from '../components/sidebar1';
import Button from '../components/button';
import OutletListModal from '../components/modal/outletlistmodel';

const OutletList = () => {
  const [outlet, setOutlet] = useState(null);
  const [hasOutletCreated, setHasOutletCreated] = useState(false); // Track outlet creation

  useEffect(() => {
    // Fetch outlets only if no outlets have been created yet
    if (!hasOutletCreated) {
      const fetchOutletList = async () => {
        try {
          const response = await axiosInstance.get(USER_OUTLETS);
          setOutlet(response.data);
        } catch (error) {
          console.error('Error fetching outlet list:', error);
        }
      };

      fetchOutletList();
    }
  }, [hasOutletCreated]); // Re-run effect when create outlet occurs

  const handleCreateOutlet = () => {
    // Simulate creating an outlet (this should be replaced with your actual create outlet logic)
    setOutlet('Example Outlet');
    setHasOutletCreated(true); // Mark that an outlet has been created
  };

  return (
    <div>
      <Sidebar1 />
      <div style={{ padding: '20px' }}>
        {hasOutletCreated ? ( // Only render OutletListModal if an outlet has been created
          <div>
            <OutletListModal outlet={outlet} />
          </div>
        ) : (
          <h2 style={{ textAlign: 'center', fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>
            No Outlet Found
          </h2>
        )}
      </div>
      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Button onClick={handleCreateOutlet} label="Create Outlet" />
      </div>
    </div>
  );
};

export default OutletList;
