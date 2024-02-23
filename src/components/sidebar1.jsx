import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/images/alpha.png";
import Dash from "../assets/images/dash.png";
import frame2 from "../assets/images/Frame2.png";
import Visit from "../assets/images/visit.png";
import Inbox from "../assets/images/inbox.png";
import Help from "../assets/images/help.png";
import Sync from "../assets/images/sync.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar1 = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [pageTitle, setPageTitle] = useState(null);
  // const { pathname } = useLocation();
  // const path = pathname.replace("/", " ")
  const location = useLocation();

  useEffect(() => {
    const path = sessionStorage.getItem('pageTitle');
    setPageTitle(path);
  }, [location.pathname]);


  const handleBurgerClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  

  const Items = [
    {
      id: 1,
      title: "Dashboard",
      icon: Dash,
      to: "homePage",
    },

    {
      id: 5,
      title: "Inbox",
      icon: Inbox,
      to: "inbox",
    },
    {
      id: 6,
      title: "Help",
      icon: Help,
      to: "help",
    },
    {
      id: 7,
      title: "Sync",
      icon: Sync,
      to: "#",
    },
  ];
  const handleNavItemClick = (title) => {
    setPageTitle(title);
    setIsMenuClicked(false);
        sessionStorage.setItem('pageTitle', title);


    // Check if the clicked item is "Route Plan"
    
  };

  return (
    <div className="sidebar">
     <nav>
        <div className="menu-header">
          <div className="burger-menu" onClick={handleBurgerClick}>
            <FontAwesomeIcon
              icon={isMenuClicked ? faTimes : faBars}
              style={{ cursor: 'pointer' }}
              className="text-[#7563d0] text-2xl"
            />
          </div>
          <div className="dashboard-text">{pageTitle}</div>
        </div>
      </nav>


      {/* Overlay component */}
      {isMenuClicked && <Overlay onClick={handleBurgerClick} />}

      <div className={`menu ${isMenuClicked ? "visible" : "hidden"}`}>
        <div className="image-container">
          <img src={logoImage} alt="Alpha" />
        </div>
        {Items.map((item, index) => (
          <Link
            to={`/${item.to.toLowerCase().replace(" ", "-")}`}
            className='menu-item'
            key={index}
            onClick={() => {
              handleNavItemClick(item.title);
            }} // Pass item.title instead of the whole item
          >
            <div style={{ margin: "10px" }}>
              {item.title === "Route Plan" ? (
                <FontAwesomeIcon icon={faRoute}  style={{color: '#7563d0', fontSize: '30px'}}/>
              ) : (
                <img src={item.icon} alt={item.title} />
              )}
            </div>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Overlay component
const Overlay = ({ onClick }) => {
  return <div className="overlay" onClick={onClick}></div>;
};

export default Sidebar1;
