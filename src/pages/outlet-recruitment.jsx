import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Outlet from '../assets/images/outlet.png';
import Product from '../assets/images/product.png';
import User from '../assets/images/user.png';
import Calender from '../assets/images/calender.png';
import Calendar from '../components/calendar';
import ScheduleModal from '../components/modal/schedulemodal';
import axiosInstance from "../utils/AxiosInstance";
import { GET_SCHEDULES, DOWN_SYNC } from "../utils/constant";

const OutletRecruitment = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isScheduleCreated, setIsScheduleCreated] = useState(false);
  const [visitSchedule, setVisitSchedule] = useState([]);
  const [downSyncData, setDownSyncData] = useState(null); // State to store data from DOWN_SYNC API
  const [outlets, setOutles] = useState('');
  const [visited, setVisited] = useState('');
  const [loginCount, setLoginCount] = useState('');

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

    // Fetch data for DOWN_SYNC API
    axiosInstance.get(DOWN_SYNC)
      .then(response => {
        const data = response.data.data;
        const Dashboard = data.dashboard;
        setOutles(Dashboard.outlets);
        setLoginCount(Dashboard.login_count);
        setVisited(Dashboard.visited)
      })
      .catch(error => {
        console.error('Error fetching data from DOWN_SYNC:', error);
      });
  }, []);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar); // Toggle calendar pop-up visibility
  };

  const handleBurgerClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const handleScheduleCreate = () => {
    // Logic to create schedule
    // Once the schedule is created, set isScheduleCreated to true
    setIsScheduleCreated(true);
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
      <div className='bg-blue-400'>
        <Sidebar/>
      </div>

      {/* Grid containing 4 items */}
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '20px' }}>
        {/* Item 1 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Outlet Visit</h5>
            {downSyncData && ( // Check if downSyncData is available
              <>
                <p style={{ margin: '0' }}>Planned: {}</p>
                <p style={{ margin: '0' }}>Actual: {}</p>
                <p style={{ margin: '0' }}>Pending: {downSyncData.pending}</p>
              </>
            )}
          </div>
        </div>
        {/* Item 2 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Product} alt="product" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Product</h5>
            <p style={{ margin: '0' }}>Total: 62</p>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>POSM Product</h5>
            <p style={{ margin: '0' }}>Total: 0</p>
          </div>
        </div>
        {/* Item 3 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Outlet</h5>
            <p style={{ margin: '0' }}>Total: {outlets}</p>
          </div>
        </div>
        {/* Item 4 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={User} alt="user" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Login</h5>
            <p style={{ margin: '0' }}>Total: {loginCount}</p>
          </div>
        </div>
      </div>

      {/* Your Schedule */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
        <h5 style={{ margin: '0' }}>Your Schedule</h5>
          <p style={{ margin: '0' }}>You have {visited} store visit Today</p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: '20px' }}>
          <img src={Calender} alt="calender" style={{ width: '30px', height: '30px', margin: '0' }} onClick={handleCalendarClick} />
        </div>
      </div>
      <div style={{ padding: '20px' }}>
    {visitSchedule.length > 0 ? (
     
        <ScheduleModal visitSchedules={visitSchedule} />

    ) : (
      <h2 style={{ textAlign: 'center', fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>
        You Have No Store Visits Scheduled
      </h2>
    )}
  </div>

      {/* Pop-up calendar component */}
      {showCalendar && (
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: '999' }}>
          {/* Your calendar component code goes here */}
          {/* Example: <YourCalendarComponent /> */}
          <Calendar />
        </div>
      )}
    </div>
  );
};

export default OutletRecruitment;
