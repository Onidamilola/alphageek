import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/AxiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import OutletPopup from './outletPopup';
import { USER_OUTLETS } from '../../utils/constant'

const OutletListModal = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [outlets, setOutlets] = useState([]); // State to hold fetched outlets
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [editedOutlet, setEditedOutlet] = useState({}); // State to hold edited outlet data

  useEffect(() => {
    const fetchOutlets = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(USER_OUTLETS);
        setOutlets(response.data);
      } catch (error) {
        console.error('Error fetching outlets:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOutlets();
  }, []); // Run effect only once on component mount

  const handleEdit= (outlet) => {
    setOpenEdit(true);
    setEditedOutlet(outlet);
  };


  const handleUpdateOutlet = async (updatedOutlet) => {
    // Implement your logic to update the outlet here
    // ...
  };

  const Outlet = ({ outlet }) => {
    const formattedOutlet = { ...(editedOutlet || outlet) };
    return (
      <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">{formattedOutlet.name}</h2>
            <p>{formattedOutlet.address}</p>
            <p>{formattedOutlet.phone}</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPen}
              onClick={handleEdit}
              className="bg-blue-500 mx-2 p-2 text-white text-sm rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed bottom-12 left-0 w-full bg-gray-100 p-6 rounded-t-3xl overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Outlets</h1>
      {isLoading ? (
        <p>Loading outlets...</p>
      ) : (
        outlets.map((outlet, index) => (
          <Outlet key={index} name={outlet.name} address={outlet.address} phone={outlet.phone} />
        ))
      )}
      <div className="flex items-center justify-center bg-black bg-opacity-50 z-557 absolute top-1/2 left text-center">
        {openEdit && (
          <OutletPopup
            isVisible={openEdit}
            closeModal={setOpenEdit}
            initialValues={editedOutlet} // Pass initial values to the popup
            onSubmit={handleUpdateOutlet} // Handle form submission in the popup
          />
        )}
      </div>
    </div>
  );
};

export default OutletListModal;
