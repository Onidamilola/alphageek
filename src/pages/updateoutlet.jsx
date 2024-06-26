import React, {useState, useRef, useEffect,useContext} from 'react'
import axiosInstance from '../utils/AxiosInstance';
import Sidebar from '../components/Sidebar';
import { GlobalContext } from '../custom-hooks/Context';
import { useNavigate } from 'react-router';
import { GET_OUTLET, GET_OUTLETCHANNEL, EDIT_OUTLET, USER_OUTLETS, UPDATE_OUTLET } from '../utils/constant';


const UpdateOutlet = () => {
  const {
    imageObject, setImageObject,
    outlet, setOutletType,
    outletChannel, setOutletChannel,
    outletName, setOutletName,
    outletPhone, setOutletPhone,
    outletAddress, setOutletAddress,
    streetNo, setStreetNo,
    streetName, setStreetName,
    firstName, setFirstName,
    lastName, setLastName,
    isbso, setIsBso,
    cpp, setCPP,
    newoutlet, setNewOutletType,
    newoutletchannel, setNewOutletChannel,
    outletData, setOutletData,
    outlets, setOutlets,
    selectedOutletId, setSelectedOutletId
  } = useContext(GlobalContext);

  const Navigate = useNavigate();
  const handleFileInput = useRef(null);
 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseOutlet = await axiosInstance.get(GET_OUTLET);
        setOutletType(responseOutlet.data.data);
        sessionStorage.setItem('outletData', JSON.stringify(responseOutlet.data.data));

        const responseChannel = await axiosInstance.get(GET_OUTLETCHANNEL);
        setOutletChannel(responseChannel.data.data);
        sessionStorage.setItem('outletChannelData', JSON.stringify(responseChannel.data.data));

        const responseUserOutlets = await axiosInstance.get(USER_OUTLETS);
        setOutlets(responseUserOutlets.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedOutletId) {
      const fetchOutletData = async () => {
        try {
          const response = await axiosInstance.get(`${EDIT_OUTLET}?outlet_id=${selectedOutletId}`);
          const data = response.data.data;
          console.log('Fetched outlet data:', data);
          setOutletData(data);
          setOutletType(data);
          setOutletChannel(data);
          setOutletName(data);
          setOutletPhone(data);
          setOutletAddress(data);
          setStreetNo(data);
          setStreetName(data);
          setFirstName(data);
          setLastName(data);
          setCPP(data);
          setNewOutletType(data);
          setNewOutletChannel(data);
        } catch (error) {
          console.error('Error fetching Outlet Data:', error);
        }
      };
      fetchOutletData();
    }
  }, [selectedOutletId]);



 



  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (!selectedFile) return; // Exit if no file selected
  
    const reader = new FileReader();
  
    reader.onload = (e) => {
      setImageObject({
        imagePreview: e.target.result,
        imageFile: selectedFile,
      });
    };
    console.log(selectedFile);
  
    reader.readAsDataURL(selectedFile);
  };



 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('type_id', newoutlet);
      formData.append('channel_id', newoutletchannel);
      formData.append('outlet_name', outletName);
      formData.append('outlet_phone', outletPhone);
      formData.append('outlet_address', outletAddress);
      formData.append('street_no', streetNo);
      formData.append('street_name', streetName);
      formData.append('cpf_name', firstName);
      formData.append('cpl_name', lastName);
      formData.append('is_bso', 1);
      formData.append('cpp', cpp);
      formData.append('outlet_id', selectedOutletId);
      
      if (imageObject && imageObject.imageFile) {
        formData.append('image', imageObject.imageFile);
  
      }
     
      // Add other form data as needed

      const response = await axiosInstance.post(UPDATE_OUTLET, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);

      Navigate('/outlet-list');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  // const handleClick = () => {
  //   handleFileInput.current.click();
  // };

  
  return (
    <div>
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit} >
       <label htmlFor="outlet" style={{ color: 'blue' }}>Outlet Classification</label>
        <select id="outlet" name="outletType" onChange={(e) => {
          setNewOutletType(e.target.value);
          console.log(e.target.value);
          }} style={{ marginBottom: '10px' }}>
          <option value={setNewOutletType.type_id}>Outlet Type</option>
          {outlet.map((data) => (
              <option key={data.id} value={data.id}>
                {data.type_name}
                </option>
            ))}
        </select>

        <select id="outletChannel" name="outletChannel" onChange={(e) => setNewOutletChannel(e.target.value)} style={{ marginBottom: '10px' }}>
          <option value={setNewOutletChannel.channel_id}>Outlet Channel</option>
          {outletChannel.map((data) => (
              <option key={data.id} value={data.id}>
                {data.channel_name}
                </option>
            ))}
        </select>

        <label htmlFor="outletName" style={{ color: 'blue' }}>Basic Information</label>
        <input 
        type="text"
        id="outletName"
        name="outletName"
        placeholder="Outlet Name"
        value={setOutletName.outlet_name}
        onChange={(e) => setOutletName(e.target.value)} 
        style={{ marginBottom: '10px' }} 
        />
        <input 
        type="text" 
        id="phoneNumber" 
        name="phoneNumber" 
        placeholder="Phone Number" 
        value={setOutletPhone.outlet_phone}
        onChange={(e) => setOutletPhone(e.target.value)} 
        style={{ marginBottom: '10px' }} 
        />
        <textarea id="note" name="note" placeholder="Note..." style={{ height: '100px', marginBottom: '10px' }} ></textarea>

        <label htmlFor="locationInfo" style={{ color: 'blue' }}>Location Information</label>
        <input 
        type="text" 
        id="streetNumber" 
        name="streetNumber" 
        placeholder="Street Number" 
        value={setStreetNo.street_no}
        onChange={(e) => setStreetNo(e.target.value)} 
        style={{ marginBottom: '10px' }} 
        />
        <input 
        type="text" 
        id="streetName" 
        name="streetName" 
        placeholder="Street Name"
        value={setStreetName.street_name} 
        onChange={(e) => setStreetName(e.target.value)} 
        style={{ marginBottom: '10px' }} 
        />
        <select id="selectLocation" name="selectLocation" onChange={(e) => setOutletAddress(e.target.value)} style={{ marginBottom: '10px' }}>
          <option value={setOutletAddress.location}>Select Location</option>
          <option value="agege">Agege</option>
          <option value="ajeromi/ifelodun">Ajeromi/Ifelodun</option>
          <option value="apapa">Apapa</option>
          <option value="ifako/ijaye">Ifako/Ijaye</option>
          <option value="ikeja">Ikeja</option>
          <option value="kosofe">Kosofe</option>
          <option value="lagos island">Lagos Island</option>
          <option value="lagos mainland">Lagos Mainland</option>
          <option value="mushin">Mushin</option>
          <option value="oshodi/isolo">Oshodi/Isolo</option>
          <option value="shomolu">Shomolu</option>
          <option value="surulere">Surulere</option>
          <option value="alimosho">Alimosho</option>
          <option value="amuwo odofin">Amuwo Odofin</option>
          <option value="ojo">Ojo</option>
          <option value="eti osa">Eti Osa</option>
          <option value="ikorudu">Ikorudu</option>
          <option value="badagry">Badagry</option>
          <option value="epe">Epe</option>
          <option value="ibeju lekki">Ibeju Lekki</option>
        </select>
        
          
        <label htmlFor="contactInfo" style={{ color: 'blue' }}>Contact Information</label>
        <input 
        type="text" 
        id="firstName" 
        name="firstName" 
        placeholder="First Name" 
        value={setFirstName.cpf_name}
        onChange={(e) => setFirstName(e.target.value)} 
        style={{ marginBottom: '10px' }} 
        />
        <input 
        type="text" 
        id="lastName" 
        name="lastName" 
        placeholder="Last Name"
        value={setLastName.cpl_name} 
        onChange={(e) => setLastName(e.target.value)} 
        style={{ marginBottom: '10px' }} 
        />
        <input 
        type="text" 
        id="contactPhoneNumber" 
        name="contactPhoneNumber" 
        placeholder="Phone Number" 
        value={setCPP.cpp}
        onChange={(e) => setCPP(e.target.value)} 
        style={{ marginBottom: '10px' }} 
        />
      
          

        <label  style={{ color: 'blue' }}>Outlet Image</label>
          <input
            type="file"
            accept="image/*"
            ref={handleFileInput}
            onChange={handleImageChange}
          />
          {imageObject && <img src={imageObject.imagePreview} alt="Selected" />}
   
        <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SAVE</button>

       </form>
             </div>

      {/* Media queries */}
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .container {
            // Mobile styles
          }
        }
      `}</style>

      {/* Additional styles */}
      <style>{`
        body { font-family: Arial, Helvetica, sans-serif; }
        * { box-sizing: border-box; }
        input[type=text], select, textarea {
          width: 100%;
          padding: 12px;
          border: none;
          border-bottom: 1px solid #ccc;
          border-radius: 4px;
          margin-top: 6px;
          margin-bottom: 16px;
          resize: vertical;
        }
        input[type=submit] {
          background-color: #04AA6D;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        input[type=submit]:hover {
          background-color: #45a049;
        }
        .container {
          border-radius: 5px;
          background-color: #f7fafc;
          padding: 20px;
          width: 80%; /* Adjust width as needed */
          margin: auto; /* Center the container horizontally */
        }
      `}</style>
    </div>
  )
}

export default UpdateOutlet;