import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUserCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { LOGOUT } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance";

const Profile = ({isVisible, closeModal}) => {
    const [date, setDate] = useState(new Date());
    const [openEdit, setOpenEdit] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem('token'))
    const navigate = useNavigate()

    useEffect(() => {
      const timer = setInterval(() => {
        // Update the date every second
        setDate(new Date());
      }, 1000);
  
      // Clean up the timer
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    const formattedDate = date.toLocaleString();
  

    const handleClose = async(event)=>{
        event.preventDefault()
        closeModal()
    }
const handleedit= async(event)=>{
    event.preventDefault()
    setOpenEdit(true)
}
    const profileData = [
        {
          Title: "Gender",
          Num: "Male",
        },
        {
          Title: "Education",
          Num: "Bachelors",
        },
        {
          Title: "Team",
          Num: "",
        },
        {
          Title: "NIN",
          Num: "",
        },
        {
          Title: "LASRA",
          Num: "",
        },
        {
            Title: "LGA",
            Num: "Ojo",
        },
        {
            Title: "Address",
            Num: "5, Gbenga street, Okokomaiko ",
        },
        {
            Title: "State",
            Num: "Lagos",
        },
        {
            Title: "Country",
            Num: "Nigeria",
        },
      ];

     const handleLogout = (e) => {
      
     };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center">
      {isVisible && (
        <div className="bg-white relative rounded-lg w-[350px]">
            <div className="flex justify-between items-center bg-purple-100 px-4 py-4 rounded-lg">
            
            <div className="flex justify-between">
                <FontAwesomeIcon icon={faUserCircle} className="text-5xl"/>
                <div>
                    <p className="font-semibold">Yakubu Odili Ojo</p>
                    <p className="text-[#7563d0]">yakubuodili@gmail.com</p>
                    <p className="text-[#7563d0]">08145673567</p>
                </div>
            </div>
            <div className="flex items-center absolute right-[8px] top-[8px] text-white">
            <FontAwesomeIcon icon={faPen} onClick={handleedit} className="bg-blue-500 mx-2 p-2 white text-sm rounded-lg"/>
            <FontAwesomeIcon icon={faClose} onClick={handleClose} className="bg-blue-500 mr-2 p-2 white text-sm rounded-lg"/>
            </div>
            </div>
            
          <div className="grid grid-cols-1 px-4 py-2">
        {profileData.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2 mb-2 font-semibold">
            <span>{item.Title}</span>
            <span className="text-[13px]">{item.Num}</span>
          </div>
        ))}
      </div>
      {/* {openEdit && (
        <div className="bg-white z-557 absolute top-1/2 left">
            <div>
                <p>Update Profile</p>
                <p>Are you sure to update your profile?</p>
                <div className="flex justify-end">
                    <div className="mx-3">No</div>
                    <div className="mx-3">Yes</div>
                </div>
            </div>
            
        </div>
      )} */}
      <div>{formattedDate}</div>
      <button className="bg-blue-500 px-20 py-2 my-4 rounded-lg text-xl text-white"  onClick={handleLogout}>Log out</button>
        </div>
        
      )}
      
    </div>
  );
};

export default Profile;