import React, { useState } from 'react';
import Sidebar1 from './sidebar1';
import Button1 from './button1';
import Calender from '../assets/images/calender.png';
import Calendar from './calendar'

const VisitSchedule = () => {
  const [activeTab, setActiveTab] = useState('Today'); // Default active tab is 'Today'
  const [showCalendar, setShowCalendar] = useState(false); // State to manage calendar pop-up visibility

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar); // Toggle calendar pop-up visibility
  };

  return (
    <div>
      <div>
        <Sidebar1 />
      </div>
      <div style={{ overflow: 'hidden', display: 'flex', border: '1px solid #ccc', backgroundColor: '#502ef1' }} className="tab">
        <button
          className={`tablinks ${activeTab === 'Today' ? 'active' : ''}`}
          onClick={() => openCity('Today')}
          style={{ flex: 1, backgroundColor: 'inherit', border: 'none', outline: 'none', cursor: 'pointer', padding: '14px 16px', transition: '0.3s', fontSize: '17px', color: '#000' }}
        >
          TODAY
        </button>
        <button
          className={`tablinks ${activeTab === 'Calendar' ? 'active' : ''}`}
          onClick={() => openCity('Calendar')}
          style={{ flex: 1, backgroundColor: 'inherit', border: 'none', outline: 'none', cursor: 'pointer', padding: '14px 16px', transition: '0.3s', fontSize: '17px', color: '#000' }}
        >
          CALENDAR
        </button>
      </div>

      <div id="Today" className="tabcontent" style={{ display: activeTab === 'Today' ? 'block' : 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none' }}>
        <h5  style={{  textAlign: 'center',  fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>You Have No Store Visit Today</h5>
      </div>

      <div id="Calendar" className="tabcontent" style={{ display: activeTab === 'Calendar' ? 'block' : 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
            <h5 style={{ margin: '0' }}>Your Schedule</h5>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: '20px' }}>
            <img src={Calender} alt="calender" style={{ width: '30px', height: '30px', margin: '0', cursor: 'pointer' }} onClick={handleCalendarClick} />
          </div>
        </div>
        {/* Pop-up calendar component */}
        {showCalendar && (
          <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: '999' }}>
            {/* Your calendar component code goes here */}
            {/* Example: <YourCalendarComponent /> */}
            <Calendar />
          </div>
        )}
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Button1 />
      </div>
    </div>
  );
};

export default VisitSchedule;
