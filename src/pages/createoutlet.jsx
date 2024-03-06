import React, {useState, useRef, useEffect} from 'react'
import axiosInstance from '../utils/AxiosInstance';
import Sidebar from '../components/Sidebar';
import { GET_OUTLET } from '../utils/constant';
import { GET_OUTLETCHANNEL } from '../utils/constant'


const CreateOutlet = () => {
  const [imageObject, setImageObect] = useState(null);
  const [outlet, setOutlet] = useState([])
  const [outletChannel, setOutletChannel] = useState([])

  const handleFileInput = useRef(null);

  const handleClick = () => {
    handleFileInput.current.click();
  };

  const handleImageChange = (event) => {
    setImageObect({
      imagePreview: URL.createObjectURL(event.target.files[0]),
      imageFile: event.target.files[0],
    });
  }

  useEffect(() => {
    const fetchOutlet = async () => {
      try {
        const response = await axiosInstance.get( GET_OUTLET );
        console.log("Outlets Data:", response.data.data);
        setOutlet(response.data.data);
      } catch (error) {
        console.error("Error fetching Outlets:", error);
      }
    };

    fetchOutlet();
  }, []);

  const handleOutletChange = (e) => {
    const outletId = e.target.value;
    
    
  };

  useEffect(() => {
    const fetchOutletChannel = async () => {
      try {
        const response = await axiosInstance.get( GET_OUTLETCHANNEL );
        console.log("Outlets Data:", response.data.data);
        setOutletChannel(response.data.data);
      } catch (error) {
        console.error("Error fetching Outlets:", error);
      }
    };

    fetchOutletChannel();
  }, []);

  const handleOutletChannelChange = (e) => {
    const outletChannelId = e.target.value;
    
    
  };
  return (
    <div>
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="outlet" style={{ color: 'blue' }}>Outlet Classification</label>
        <select id="outlet" name="outletType" onChange={handleOutletChange} style={{ marginBottom: '10px' }}>
          <option value="outlet type">Outlet Type</option>
          {outlet.map((outlet) => (
              <option key={outlet.id} value={outlet.id}>
                {outlet.type_name}
                </option>
            ))}
        </select>

        <select id="outletChannel" name="outletChannel" onChange={handleOutletChannelChange} style={{ marginBottom: '10px' }}>
          <option value="outlet channel">Outlet Channel</option>
          {outletChannel.map((outletChannel) => (
              <option key={outletChannel.id} value={outletChannel.id}>
                {outletChannel.channel_name}
                </option>
            ))}
        </select>

        <label htmlFor="outletName" style={{ color: 'blue' }}>Basic Information</label>
        <input type="text" id="outletName" name="outletName" placeholder="Outlet Name" style={{ marginBottom: '10px' }} />
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" style={{ marginBottom: '10px' }} />
        <textarea id="note" name="note" placeholder="Note..." style={{ height: '100px', marginBottom: '10px' }} ></textarea>

        <label htmlFor="locationInfo" style={{ color: 'blue' }}>Location Information</label>
        <input type="text" id="streetNumber" name="streetNumber" placeholder="Street Number" style={{ marginBottom: '10px' }} />
        <input type="text" id="streetName" name="streetName" placeholder="Street Name" style={{ marginBottom: '10px' }} />
        <select id="selectLocation" name="selectLocation" style={{ marginBottom: '10px' }}>
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
        <input type="text" id="firstName" name="firstName" placeholder="First Name" style={{ marginBottom: '10px' }} />
        <input type="text" id="lastName" name="lastName" placeholder="Last Name" style={{ marginBottom: '10px' }} />
        <input type="text" id="contactPhoneNumber" name="contactPhoneNumber" placeholder="Phone Number" style={{ marginBottom: '10px' }} />

        <label htmlFor="Image" style={{ color: 'blue' }}>Outlet Image</label>
        <input 
            type="file"
            accept="image/*"
            capture="environment"
            ref={handleFileInput}
            onChange={handleImageChange}
        />
        {imageObject && <img src={imageObject.imagePreview} />}


        {/* <label htmlFor="outletImage">Outlet Image</label>
        <input type="file" accept="image/*" id="outletImage" name="outletImage" style={{ marginBottom: '10px' }} /> */}

   
        <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SAVE</button>
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
          background-color: #f2f2f2;
          padding: 20px;
          width: 80%; /* Adjust width as needed */
          margin: auto; /* Center the container horizontally */
        }
      `}</style>
    </div>
  )
}

export default CreateOutlet;