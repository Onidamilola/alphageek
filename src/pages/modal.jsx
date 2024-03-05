import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, setIsOpen, handleEdit, handleLogout }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg w-80 p-6">
        <div className="flex justify-between items-center mb-4">
          <FontAwesomeIcon icon={faTimes} className="text-gray-500 cursor-pointer" onClick={handleCloseModal} />
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEdit} className="text-gray-500 cursor-pointer mr-2" onClick={handleEdit} />
            <h2 className="text-lg font-semibold">Title</h2>
          </div>
        </div>
        <div className="mb-4">
          <p>Damilola on</p>
        </div>
        <div className="text-center">
          <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
