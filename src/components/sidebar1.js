import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './sidebar.css';
import logoImage from '../assets/images/alpha.png';
import Dash from '../assets/images/dash.png';
import Inbox from '../assets/images/inbox.png';
import Help from '../assets/images/help.png';
import Sync from '../assets/images/sync.png';

const Sidebar1 = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={`sidebar ${isMenuClicked ? 'menu-open' : ''}`}>
      <nav>
        <div className="menu-header">
          <div className="burger-menu" onClick={handleBurgerClick}>
            <div className={`burger-bar ${isMenuClicked ? 'clicked' : ''}`}></div>
            <div className={`burger-bar ${isMenuClicked ? 'clicked' : ''}`}></div>
            <div className={`burger-bar ${isMenuClicked ? 'clicked' : ''}`}></div>
          </div>
          <div className="dashboard-text">Dashboard</div>
        </div>
      </nav>

      <div className={`menu ${isMenuClicked ? 'visible' : 'hidden'}`}>
        <div className="image-container">
          <img src={logoImage} alt="Alpha" />
        </div>
        <Link to="/homepage" className="menu-item">
          <img src={Dash} alt="Dash" style={{ width: '20px', marginRight: '10px' }} />
          Dashboard
        </Link>
        <Link to="/inbox" className="menu-item">
          <img src={Inbox} alt="inbox" style={{ width: '20px', marginRight: '10px' }} />
          Inbox
        </Link>
        <Link to="help" className="menu-item">
          <img src={Help} alt="help" style={{ width: '20px', marginRight: '10px' }} />
          Help
        </Link>
        <Link to="sync" className="menu-item">
          <img src={Sync} alt="sync" style={{ width: '20px', marginRight: '10px' }} />
          Sync
        </Link>
      </div>
    </div>
  );
};

export default Sidebar1;
