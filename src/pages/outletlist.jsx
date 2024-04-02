import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import Sidebar1 from '../components/sidebar1';
import Button from '../components/button';
import OutletListModal from '../components/modal/outletlistmodel';
import { USER_OUTLETS } from '../utils/constant';

const OutletList = () => {
  const [outlets, setOutlets] = useState([]);
  const [showOutletModal, setShowOutletModal] = useState(false);

  // useEffect(() => {
  //   const fetchOutlets = async () => {
  //     try {
  //       const response = await axiosInstance.get(USER_OUTLETS);
  //       setOutlets(response.data); // Assuming the response contains an array of outlets
  //     } catch (error) {
  //       console.error('Error fetching outlets:', error);
  //     }
  //   };

  //   fetchOutlets();
  // }, []);

  useEffect(() => {
    axiosInstance
        .get(USER_OUTLETS
         )
        .then((response) => {
          const data = response.data.data
          setOutlets(data);
            console.log(data);
        })
        .catch((err) => console.log(err));
}, []);

console.log(outlets.length);

  const handleCreateOutlet = () => {
    // Handle creating outlet logic here
    // After creating outlet, you can set setShowOutletModal(true) to display the modal
  };

  return (
    <div>
      <Sidebar1 />
      <div style={{ padding: '20px' }}>
        {outlets.length > 0 ? (
          <OutletListModal outlets={outlets} show={showOutletModal} onClose={() => setShowOutletModal(false)} />
        ) : (
          <h2 style={{ textAlign: 'center', fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>
            No Outlets Found
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
