import React, {useState, useEffect} from 'react';
import axiosInstance from '../../utils/AxiosInstance';
import { PROFILE } from '../../utils/constant';
import logo from '../../assets/images/alphageek-logo.png';
import frame from '../../assets/images/Frame.png';
import frame1 from '../../assets/images/Frame1.png';
import frame7 from '../../assets/images/Frame7.png';
import frame3 from '../../assets/images/Frame3.png';
import NrjTjl from '../../assets/images/NrjTjl.png';
import frame4 from '../../assets/images/Frame4.png';
import frame5 from '../../assets/images/Frame5.png';
import frame6 from '../../assets/images/Frame6.png';
import frame2 from '../../assets/images/Frame2.png';
import { Link } from 'react-router-dom';
import Profile from '../../components/modal/Profile';
import LoadingScreen from '../../components/LoadingScreen';


const Home = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(PROFILE);
        const data = response.data.data;
        const reg_info = data.reg_info;
        const employee = reg_info.employee;
        // const { firstname, imageUrl } = response.data.data;
        console.log(employee)
        setFirstName(employee.firstname);
        setUserImage(employee.image);
        setLoading(false);
        console.log('user image and name: ', formData.personal.firstname, userImage)
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);
  

  const handleModal = async (event) => {
    event.preventDefault();
setPopupVisible(true)
console.log("helo");
   
};

const handleLinkClick = () => {
  setLoading(true); // Start loading
  // Add any additional logic if needed before navigation
};




  const components = [
    {
      name: "Outlet Recruitment",
      link: "/outlet-recruitment",
      image: frame,
    },
    {
      name: "Product Merchandising",
      link: "/product-merchandising",
      image: frame1,
    },
    {
      name: "Product Ordering",
      link: "/product-ordering",
      image: frame7,
    },
    {
      name: "POSM",
      link: "/posm",
      image: frame3,
    },
    {
      name: "Competition Tracking",
      link: "/competition-tracking",
      image: NrjTjl,
    },
    {
      name: "Products Freshness",
      link: "/products-freshness",
      image: frame4,
    },
    {
      name: "Out-of-stock Tracking",
      link: "/OOF-tracking",
      image: frame5,
    },
    {
      name: "Planogram Checks",
      link: "/planogram-checks",
      image: frame6,
    },
    {
      name: "Pricing Checks",
      link: "/pricing-checks",
      image: frame7,
    },
    {
      name: "Store Detailing",
      link: "/store-detailing",
      image: frame2,
    },
  ];

 

  
  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <LoadingScreen />}
      <div className="text-xl bg-gray-100 font-roboto m-auto w-full px-6 pb-16">
        <div className='flex justify-between items-center my-6'>
          <img src={logo} alt="logo" className='w-20'/>
        </div>
        <div className='flex justify-between items-center my-8'>
          <div>
            <p>Hello, {firstName || 'loading....'}</p>
            <p>Win at work today!</p>
          </div>
          
            <img src={userImage ? userImage : "faUserCircle"} alt="User Profile" className="rounded-full w-16 h-16" onClick={handleModal}/>

       
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg">
          {components.map((component, index) => (
            <Link
              key={index}
              to={component.link}
              className="rounded-lg border border-gray-400 p-4 underline"
              onClick={handleLinkClick} // Handle link click
            >
              <img src={component.image} alt={component.name} className="mx-auto" />
              <p className="text-center font-bold">{component.name}</p>
            </Link>
          ))}
        </div>
      </div>
      {popupVisible && (<Profile isVisible={popupVisible} closeModal={setPopupVisible}/>)}
    </div>
  );
};

export default Home;
