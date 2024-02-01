import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const [Sidebar, setsidebar] = useState(false);

  const showSidebar = () => setsidebar(!Sidebar);

    return (
      <>
       <div className='navbar'>
            <Link to='#' className='menubar'>
              <FaIcons.FaBars />
            </Link>
        </div>
        <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className="navbar-toggle">
              <link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
              </link>
            </li>
          </ul>
        </nav>
      </>
       
    );
};

export default Sidebar;






