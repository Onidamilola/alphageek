import React,  {useState, useEffect} from 'react';
import Outlet from '../assets/images/outlet.png'
import Product from '../assets/images/product.png'
import User from '../assets/images/user.png'
import Calender from '../assets/images/calender.png'
import Calendar from '../components/calendar'
import ScheduleModal from './modal/schedulemodal';
import axiosInstance from "../utils/AxiosInstance";
import { GET_SCHEDULES, DOWN_SYNC } from "../utils/constant";
import LoadingScreen from './LoadingScreen';


const Dashboard = ({LINK}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [visitSchedule, setVisitSchedule] = useState([]);
  const [outlets, setOutles] = useState('');
  const [visited, setVisited] = useState('');
  const [loginCount, setLoginCount] = useState('');
  const [posm, setPosm] = useState('');
  const [products, setProducts] = useState('');
  const [actual, setActual] = useState('');
  const [pending, setPending] =useState('');
  const [planned, setPlanned] = useState('');
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    let schedulesFetched = false;
    let dataFetched = false;
  
    const checkLoading = () => {
      if (schedulesFetched && dataFetched) {
        setLoading(false);
      }
    };
  
    const fetchSchedules = async () => {
      try {
        const response = await axiosInstance.get(GET_SCHEDULES);
        const newData = response.data.data;
        if (JSON.stringify(newData) !== JSON.stringify(visitSchedule)) {
          setVisitSchedule(newData);
        }
        schedulesFetched = true;
        checkLoading();
        console.log('Received schedules:', newData);
      } catch (error) {
        console.error('Error fetching schedules:', error);
        schedulesFetched = true;
        checkLoading();
        setVisitSchedule([]);
      }
    };
  
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(DOWN_SYNC);
        const data = response.data.data;
        const Dashboard = data.dashboard;
        setOutles(Dashboard.outlets);
        setLoginCount(Dashboard.login_count);
        setVisited(Dashboard.visited);
        setPosm(Dashboard.posms_product.posm_product);
        setProducts(Dashboard.products);
        setActual(Dashboard.actual);
        setPending(Dashboard.pending);
        setPlanned(Dashboard.planned_visit);
        dataFetched = true;
        checkLoading();
      } catch (error) {
        console.error('Error fetching data from DOWN_SYNC:', error);
        dataFetched = true;
        checkLoading();
      }
    };
  
    fetchSchedules();
    fetchData();
  }, []);
  

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar); // Toggle calendar pop-up visibility
  };

  
  
  return (
    <div>
       {loading && <LoadingScreen />}
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '20px' }}>
        {/* Item 1 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px', fontWeight: 'bold' }}>Outlet Visit</h5>
                <p style={{ margin: '0' }}>Planned: {planned}</p>
                <p style={{ margin: '0' }}>Actual: {actual}</p>
                <p style={{ margin: '0' }}>Pending: {pending}</p>
          </div>
        </div>
        {/* Item 2 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Product} alt="product" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px', fontWeight: 'bold' }}>Product</h5>
            <p style={{ margin: '0' }}>Total: {products}</p>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>POSM Product</h5>
            <p style={{ margin: '0' }}>Total: {posm}</p>
          </div>
        </div>
        {/* Item 3 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px', fontWeight: 'bold' }}>Outlet</h5>
            <p style={{ margin: '0' }}>Total: {outlets}</p>
          </div>
        </div>
        {/* Item 4 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={User} alt="user" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px', fontWeight: 'bold' }}>Login</h5>
            <p style={{ margin: '0' }}>Total: {loginCount}</p>
          </div>
        </div>
      </div>

      {/* Your Schedule */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
        <h5 style={{ margin: '0' }}>Your Schedule</h5>
          <p style={{ margin: '0' }}>You have {actual} store visit Today</p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: '20px' }}>
          <img src={Calender} alt="calender" style={{ width: '30px', height: '30px', margin: '0' }} onClick={handleCalendarClick} />
        </div>
      </div>
      <div style={{ padding: '20px' }}>
    {visitSchedule.length > 0 ? (
     
        <ScheduleModal visitSchedules={visitSchedule} link={LINK} />

    ) : (
      <h2 style={{ textAlign: 'center', fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>
        You Have No Store Visits Scheduled
      </h2>
    )}
  </div>

      {/* Pop-up calendar component */}
      {showCalendar && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          backgroundColor: '#fff', 
          padding: '20px', 
          borderRadius: '5px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
          zIndex: '999' 
          }}
          >
          <Calendar />
        </div>
      )}
    </div>
  );
};


export default Dashboard;
