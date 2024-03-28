import React, {useState, useRef, useEffect} from 'react'
import axiosInstance from '../utils/AxiosInstance';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router';
import { GET_OUTLET } from '../utils/constant';
import { GET_OUTLETCHANNEL } from '../utils/constant'
import { CREATE_WEB_OUTLET } from '../utils/constant';


const CreateOutlet = () => {
  const [imageObject, setImageObject] = useState(null);
  const [outlet, setOutletType] = useState([])
  const [outletChannel, setOutletChannel] = useState([]);
  const [outletName, setOutletName] = useState('');
  const [outletPhone, setOutletPhone] = useState('');
  const [outletAddress, setOutletAddress] = useState('');
  const [streetNo, setStreetNo] = useState('');
  const [streetName, setStreetName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isbso, setIsBso] = useState('');
  const [cpp, setCPP] = useState('');
  const [newoutlet, setNewOutletType] = useState('');
  const [newoutletchannel, setNewOutletChannel] = useState('');
  const Navigate = useNavigate();

  const handleFileInput = useRef(null);

  useEffect(() => {
    const fetchOutlet = async () => {
      try {
        const response = await axiosInstance.get(GET_OUTLET);
        console.log("Outlets Data:", response.data.data);
        setOutletType(response.data.data);
        sessionStorage.setItem('outletData', JSON.stringify(response.data.data)); // Save outlet data to sessionStorage
      } catch (error) {
        console.error("Error fetching Outlets:", error);
      }
    };

    const fetchOutletChannel = async () => {
      try {
        const response = await axiosInstance.get(GET_OUTLETCHANNEL);
        console.log("Outlets Data:", response.data.data);
        setOutletChannel(response.data.data);
        sessionStorage.setItem('outletChannelData', JSON.stringify(response.data.data)); // Save outlet channel data to sessionStorage
      } catch (error) {
        console.error("Error fetching Outlets:", error);
      }
    };

    fetchOutlet();
    fetchOutletChannel();
  }, []);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Exit if no file selected

    setImageObject({
      imagePreview: URL.createObjectURL(selectedFile),
      imageFile: selectedFile,
    });
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
      
      if (imageObject && imageObject.imageFile) {
        formData.append('image', imageObject.imageFile);
  
      }
     
      // Add other form data as needed

      const response = await axiosInstance.post(CREATE_WEB_OUTLET, formData);

      console.log('Response:', response.data);

      Navigate('/outlet-list');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleClick = () => {
    handleFileInput.current.click();
  };

  
  return (
    <div>
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
       <label htmlFor="outlet" style={{ color: 'blue' }}>Outlet Classification</label>
        <select id="outlet" name="outletType" onChange={(e) => {
          setNewOutletType(e.target.value);
          console.log(e.target.value);
          }} style={{ marginBottom: '10px' }}>
          <option value="outlet type">Outlet Type</option>
          {outlet.map((data) => (
              <option key={data.id} value={data.id}>
                {data.type_name}
                </option>
            ))}
        </select>

        <select id="outletChannel" name="outletChannel" onChange={(e) => setNewOutletChannel(e.target.value)} style={{ marginBottom: '10px' }}>
          <option value="outlet channel">Outlet Channel</option>
          {outletChannel.map((data) => (
              <option key={data.id} value={data.id}>
                {data.channel_name}
                </option>
            ))}
        </select>

        <label htmlFor="outletName" style={{ color: 'blue' }}>Basic Information</label>
        <input type="text" id="outletName" name="outletName" placeholder="Outlet Name" onChange={(e) => setOutletName(e.target.value)} style={{ marginBottom: '10px' }} />
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" onChange={(e) => setOutletPhone(e.target.value)} style={{ marginBottom: '10px' }} />
        <textarea id="note" name="note" placeholder="Note..." style={{ height: '100px', marginBottom: '10px' }} ></textarea>

        <label htmlFor="locationInfo" style={{ color: 'blue' }}>Location Information</label>
        <input type="text" id="streetNumber" name="streetNumber" placeholder="Street Number" onChange={(e) => setStreetNo(e.target.value)} style={{ marginBottom: '10px' }} />
        <input type="text" id="streetName" name="streetName" placeholder="Street Name" onChange={(e) => setStreetName(e.target.value)} style={{ marginBottom: '10px' }} />
        <select id="selectLocation" name="selectLocation" onChange={(e) => setOutletAddress(e.target.value)} style={{ marginBottom: '10px' }}>
          <option value="select location">Select Location</option>
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
        <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} style={{ marginBottom: '10px' }} />
        <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} style={{ marginBottom: '10px' }} />
        <input type="text" id="contactPhoneNumber" name="contactPhoneNumber" placeholder="Phone Number" onChange={(e) => setCPP(e.target.value)} style={{ marginBottom: '10px' }} />

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

export default CreateOutlet;