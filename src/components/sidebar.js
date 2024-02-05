import React, {useState} from 'react'
// import Sidebardata from './sidebardata'
import './sidebar.css'
import { Icon } from '@mui/material';

  const Sidebar = () => {

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
          {/* Add menu items here */}
          <a href="#" className="menu-item">Dashboard</a>
          <a href="#" className="menu-item">Route Plan</a>
          <a href="#" className="menu-item">Outlet List</a>
          {/* Add more menu items as needed */}
        </div>
      </div>
    );
  };

  //   return (
  //     <div style={{width: '100%', height: '17vh',}}>
  //         <nav>
  //           <div className='burger-menu'onClick={handleBurgerClick}>
  //               <div className={burger_class}></div>
  //               <div className={burger_class}></div>
  //               <div className={burger_class}></div>
  //           </div>
  //         </nav>

  //         <div className={menu_class}>

  //         </div>
  //     </div>
  //   )
  // }

export default Sidebar;
