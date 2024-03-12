import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUserCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { LOGOUT } from "../../utils/constant";
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from "../../utils/AxiosInstance";
import EditPopup from "./editPopup";


const Profile = ({isVisible, closeModal}) => {
    const [date, setDate] = useState(new Date());
    const [openEdit, setOpenEdit] = useState(false)

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
const handleLogout = async () => {
  try {
    const response = await axiosInstance.post(LOGOUT);
    console.log('Logout successful:', response.data);
    toast.success(response.data.message);

    // Handle successful logout response here
  } catch (error) {
    // Handle error
    console.error('Logout error:', error);
  }
};



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
      

      <div className="flex items-center justify-center bg-black bg-opacity-50  z-557 absolute top-1/2 left text-center">
        {openEdit && (
       <EditPopup isVisible={openEdit} closeModal={setOpenEdit}/>
      )}
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <div>{formattedDate}</div>
      <button className="bg-blue-500 px-20 py-2 my-4 rounded-lg text-xl text-white"  onClick={handleLogout}>Log out</button>
        </div>
        
      )}
      
    </div>
  );
};


export default Profile;
