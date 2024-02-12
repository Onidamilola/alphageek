import React from 'react';
import Sidebar1 from './sidebar1';
import Button1 from './button1';
import Calender from '../assets/images/calender.png'

const VisitSchedule = () => {
  const openCity = (evt, cityName) => {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  return (
    <div>
      <div>
        <Sidebar1 />
      </div>
      <div style={{ overflow: 'hidden', display: 'flex', border: '1px solid #ccc', backgroundColor: '#502ef1' }} className="tab">
        <button className="tablinks" onClick={(evt) => openCity(evt, 'Today')} style={{ flex: 1, backgroundColor: 'inherit', border: 'none', outline: 'none', cursor: 'pointer', padding: '14px 16px', transition: '0.3s', fontSize: '17px', color: '#000' }}>TODAY</button>
        <button className="tablinks" onClick={(evt) => openCity(evt, 'Calender')} style={{ flex: 1, backgroundColor: 'inherit', border: 'none', outline: 'none', cursor: 'pointer', padding: '14px 16px', transition: '0.3s', fontSize: '17px', color: '#000' }}>CALENDAR</button>
      </div>

      <div id="Today" className="tabcontent" style={{ display: 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none' }}>
        <h5>you Have No Store Visit Today</h5>
      </div>

      <div id="Calender" className="tabcontent" style={{ display: 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',  marginLeft: '20px' }}>
    <h5 style={{ margin: '0' }}>Your Schedule</h5>
  </div>
  <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: '20px' }}>
    <img src={Calender} alt="calender" style={{ width: '30px', height: '30px', margin: '0' }} />
  </div>
</div>
      </div>
     

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Button1 />
      </div>
    </div>
  );
};

export default VisitSchedule;
