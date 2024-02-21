import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/alpha.png";
import Dash from "../assets/images/dash.png";
import frame2 from "../assets/images/Frame2.png";
import Visit from "../assets/images/visit.png";
import Inbox from "../assets/images/inbox.png";
import Help from "../assets/images/help.png";
import Sync from "../assets/images/sync.png";
import Route from "../assets/images/Route.png";

const Sidebar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked x-icon");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
  };

  const handleBurgerClick = () => {
    setIsMenuClicked(!isMenuClicked); // Toggle isMenuClicked state
    updateMenu(); // Update menu visibility based on the updated state
  };

  return (
    <div className="sidebar">
      <nav>
        <div className="menu-header">
          <div className="burger-menu" onClick={handleBurgerClick}>
            <div
              className={`burger-bar ${isMenuClicked ? "clicked" : ""}`}
            ></div>
            <div
              className={`burger-bar ${isMenuClicked ? "clicked" : ""}`}
            ></div>
            <div
              className={`burger-bar ${isMenuClicked ? "clicked" : ""}`}
            ></div>
          </div>
          <div className="dashboard-text">Dashboard</div>
        </div>
      </nav>
      <div className="menu-all">
        <div className={`menu-dark ${isMenuClicked ? "visible" : "hidden"}`}></div>
        <div className={`menu ${isMenuClicked ? "visible" : "hidden"}`}>
          <div className="image-container">
            <img src={logoImage} alt="Alpha" />
          </div>
          <Link to="/homepage" className="menu-item">
             <img
              src={Dash}
              alt="Dash"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Dashboard
          </Link>
          {/* <a href="/homepage" >
           
          </a> */}
          <a href="/route-plan" className="menu-item">
            <img
              src={Route}
              alt="route"
              style={{
                width: "20px",
                marginRight: "10px",
                filter: "brightness(0) saturate(100%) hue-rotate(174deg)",
              }}
            />
            Route Plan
          </a>
          <a href="/outlet-list" className="menu-item">
            <img
              src={frame2}
              alt="outlet"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Outlet List
          </a>
          <a href="/visit-schedule" className="menu-item">
            <img
              src={Visit}
              alt="visit"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Visit Schedule
          </a>
          <a href="/inbox" className="menu-item">
            <img
              src={Inbox}
              alt="inbox"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Inbox
          </a>
          <a href="/help" className="menu-item">
            <img
              src={Help}
              alt="help"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Help
          </a>
          <a href="#" className="menu-item">
            <img
              src={Sync}
              alt="sync"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Sync
          </a>
        </div>
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
