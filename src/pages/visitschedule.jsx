import React, { useState, useEffect } from 'react';
import Sidebar1 from '../components/sidebar1';
import Button1 from '../components/button1';
import Calender from '../assets/images/calender.png';
import Calendar from '../components/calendar';
import ScheduleModal from '../components/modal/ScheduleModal'
import axiosInstance from "../utils/AxiosInstance";
import { GET_SCHEDULES } from "../utils/constant";

const VisitSchedule = () => {
  const [activeTab, setActiveTab] = useState('Today');
  const [showCalendar, setShowCalendar] = useState(false);
  const [isScheduleCreated, setIsScheduleCreated] = useState(false); // State to track schedule creation
  const [visitSchedule, setVisitSchedule] = useState([]);
  const [buttonColor, setButtonColor] = useState('blue');
  const [buttonText, setButtonText] = useState('Click me');

  useEffect(() => {
    // Fetch all schedules created by the user
    axiosInstance.get(GET_SCHEDULES)
      .then(response => {
        const newData = response.data.data;
        // Check if the new data is different from the current visitSchedule state
        if (JSON.stringify(newData) !== JSON.stringify(visitSchedule)) {
          setVisitSchedule(newData);
        }
        console.log('Received schedules:', newData);
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
        setVisitSchedule([]);
      });
  }, [visitSchedule]); // Include visitSchedule in the dependency array
  
   // Empty dependency array to ensure the effect runs only once on component mount

   const updateButton = (color, text) => {
    setButtonColor(color);
    setButtonText(text);
  };
  
  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleScheduleCreation = () => {
    // Logic to create schedule
    // After schedule is successfully created, set isScheduleCreated to true
    setIsScheduleCreated(true);
  };

  console.log('Visit schedule:', visitSchedule.length);

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
        </button></div>

        <div id="Today" className="tabcontent" style={{ display: activeTab === 'Today' ? 'block' : 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none' }}>
  <div style={{ padding: '20px' }}>
    {visitSchedule.length > 0 ? (
     
        <ScheduleModal visitSchedules={visitSchedule} updateButton={updateButton} />

    ) : (
      <h2 style={{ textAlign: 'center', fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>
        You Have No Store Visits Scheduled
      </h2>
    )}
  </div>
</div>

      <div id="Calendar" className="tabcontent" style={{ display: activeTab === 'Calendar' ? 'block' : 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
            <h5 style={{ margin: '0' }}>Your Schedule</h5>
          </div>
          <div style={{ 
            marginLeft: 'auto', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            paddingRight: '20px' 
            }}>
            <img src={Calender} alt="calender" style={{ 
              width: '30px', 
              height: '30px', 
              margin: '0', 
              cursor: 'pointer' 
              }} 
              onClick={handleCalendarClick} />
          </div>
        </div>
        {showCalendar && (
          <div style={{ 
            position: 'absolute', 
            top: '80%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: '#fff', 
            padding: '20px', 
            borderRadius: '5px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
            zIndex: '999' 
            }}>
            <Calendar />
          </div>
        )}
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Button1 onClick={handleScheduleCreation} />
      </div>
    </div>
  );
};

export default VisitSchedule;