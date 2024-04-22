import React,  {useState} from 'react';
import Sidebar1 from '../components/sidebar1'
import Outlet from '../assets/images/outlet.png'
import Product from '../assets/images/product.png'
import User from '../assets/images/user.png'
import Calender from '../assets/images/calender.png'
import Calendar from '../components/calendar';
import ScheduleModal from '../components/modal/schedulemodal'
import Dashboard from '../components/dashboard';

const POSM = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isScheduleCreated, setIsScheduleCreated] = useState(false);

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


export default POSM;
