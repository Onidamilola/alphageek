import React, { useState } from 'react';

const Tab1 = ({ onNext }) => (
  <div className="w-full">
    <h2 className="text-lg font-bold">Personal Information</h2>
    <input type="text" placeholder="Input 1" className="w-full py-2 px-4 rounded border border-gray-300 my-2" />
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onNext}>Next</button>
  </div>
);

const Tab2 = ({ onNext }) => (
  <div className="w-full">
    <h2 className="text-lg font-bold">Unique Identification</h2>
    <input type="text" placeholder="Input 2" className="w-full py-2 px-4 rounded border border-gray-300 my-2" />
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onNext}>Next</button>
  </div>
);

const Tab3 = ({ onNext }) => (
  <div className="w-full">
    <h2 className="text-lg font-bold">Bank Account</h2>
    <input type="text" placeholder="Input 3" className="w-full py-2 px-4 rounded border border-gray-300 my-2" />
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onNext}>Next</button>
  </div>
);

const Tab4 = ({ onNext }) => (
  <div className="w-full">
    <h2 className="text-lg font-bold">Guarantor Information</h2>
    <input type="text" placeholder="Input 4" className="w-full py-2 px-4 rounded border border-gray-300 my-2" />
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onNext}>Next</button>
  </div>
);

const LastPage = () => (
  <div className="w-full">
    <h2 className="text-lg font-bold">Capture Image</h2>
    <input type="file" accept="image/*" capture="camera" className="w-full py-2 px-4 rounded border border-gray-300 my-2" />
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => console.log('Submit clicked')}>Submit</button>
  </div>
);

const TabComponent = ({ tab, onNext }) => {
  switch (tab) {
    case 1:
      return <Tab1 onNext={onNext} />;
    case 2:
      return <Tab2 onNext={onNext} />;
    case 3:
      return <Tab3 onNext={onNext} />;
    case 4:
      return <Tab4 onNext={onNext} />;
    default:
      return null;
  }
};

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleNext = () => {
    setCurrentTab(currentTab + 1);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Tab {currentTab}</h1>
      <div className="flex gap-4 mb-4">
        {currentTab === 4 ? (
          <LastPage />
        ) : (
          <TabComponent tab={currentTab} onNext={handleNext} />
        )}
      </div>
      {currentTab !== 4 && (
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default Tabs;
