import React, {useState} from 'react'
import './sidebar.css'
import logoImage from '../assets/images/alpha.png';
import Dash from '../assets/images/dash.png';
import frame2 from '../assets/images/Frame2.png';
import Visit from '../assets/images/visit.png';
import Inbox from '../assets/images/inbox.png';
import Help from '../assets/images/help.png';
import Sync from '../assets/images/sync.png';

  const Sidebar1 = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
      if(isMenuClicked) {
        setBurgerClass("burger-bar clicked x-icon")
        setMenuClass("menu visible")
      }
      else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
      }
    }

    const handleBurgerClick = () => {
      setIsMenuClicked(!isMenuClicked); // Toggle isMenuClicked state
      updateMenu(); // Update menu visibility based on the updated state
    };


    return (
      <div className="sidebar">
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
          <a href="/outlet-recruitment" className="menu-item">
          <img src={Dash} alt="Dash" style={{ width: '20px', marginRight: '10px' }} />
            Dashboard</a>
          <a href="#" className="menu-item">
          <img src={Inbox} alt="inbox" style={{ width: '20px', marginRight: '10px' }} />
            Inbox</a>
          <a href="#" className="menu-item">
          <img src={Help} alt="help" style={{ width: '20px', marginRight: '10px' }} />
            Help</a>
          <a href="#" className="menu-item">
          <img src={Sync} alt="sync" style={{ width: '20px', marginRight: '10px' }} />
            Sync</a>


        </div>
      </div>
    );
  };

 

export default Sidebar1;
