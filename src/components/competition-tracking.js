import React, {useState}  from 'react';
import Sidebar1 from './sidebar1'
import Outlet from '../assets/images/outlet.png'
import Product from '../assets/images/product.png'
import User from '../assets/images/user.png'
import Calender from '../assets/images/calender.png'

const CompetitionTracking= () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar); // Toggle calendar pop-up visibility
  };

  const handleBurgerClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
      {/* Sidebar */}
      <div>
        <Sidebar1 />
      </div>

      {/* Grid containing 4 items */}
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '20px' }}>
        {/* Item 1 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Outlet Visit</h5>
            <p style={{ margin: '0' }}>Planned: 0</p>
            <p style={{ margin: '0' }}>Actual: 0</p>
            <p style={{ margin: '0' }}>Pending: 0</p>
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
            <p style={{ margin: '0' }}>Total: 887</p>
          </div>
        </div>
        {/* Item 4 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={User} alt="user" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Login</h5>
            <p style={{ margin: '0' }}>Total: 2</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',  marginLeft: '20px' }}>
    <h5 style={{ margin: '0' }}>Your Schedule</h5>
    <p style={{ margin: '0' }}>You have 0 store visit Today</p>
  </div>
  <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: '20px' }}>
    <img src={Calender} alt="calender" style={{ width: '30px', height: '30px', margin: '0' }}  onClick={handleCalendarClick} />
  </div>
</div>
 {/* Pop-up calendar component */}
 {showCalendar && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: '999' }}>
            {/* Your calendar component code goes here */}
            {/* Example: <YourCalendarComponent /> */}
            Pop-up Calendar
          </div>
        )}
    </div>
  );
};


export default CompetitionTracking;
