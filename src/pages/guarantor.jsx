import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Guarantor = () => {
  const [guarantor, setGuarantor] = useState({
    guarantor_name: '',
    guarantor_phone: '',
    guarantor_email: '',
    guarantor_id_type: '',
    // guarantor_id: '',
  });
 

  const navigate = useNavigate();
 
  // const handleFileChange = (event) => {
  //   console.log('File selected:', event.target.files[0]);
  //   const file = event.target.files[0];
  //   if (!file) return; // No file selected
  
  //   // Check if the selected file is an image
  //   if (file.type.startsWith('image/')) {
  //     // Set guarantor_id to the file object
  //     setGuarantor((prevState) => ({
  //       ...prevState,
  //       guarantor_id:   JSON.stringify(file),
  //     }));
  //     console.log('Guarantor state after update:', guarantor);

  
  //     toast.success('Guarantor ID picture updated.');
  //   } else {
  //     toast.error('Please select a valid image file.');
  //   }
  // };
  
  

  const handleInputChange = (event) => {
    setGuarantor({
      ...guarantor,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    // formData.append('guarantor_id', sessionStorage.getItem('guarantor_id'));
    formData.append('guarantor_name', guarantor.guarantor_name);
    formData.append('guarantor_phone', guarantor.guarantor_phone);
    formData.append('guarantor_email', guarantor.guarantor_email);
    formData.append('guarantor_id_type', guarantor.guarantor_id_type);

    // Proceed with form submission
    sessionStorage.setItem('guarantor', JSON.stringify(guarantor));
    navigate("/capture");
  };

  // useEffect(() => {
  //   return () => {
  //     if (guarantor.guarantor_id) {
  //       // Clean up on unmounting
  //       URL.revokeObjectURL(guarantor.guarantor_id);
  //     }
  //   };
  // }, [guarantor.guarantor_id]);
  
  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          id="guarantor_name"
          name="guarantor_name"
          placeholder="Guarantor's Name"
          value={guarantor.guarantor_name}
        onChange={handleInputChange}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="text"
          id="guarantorphonenumber"
          name="guarantor_phone"
          placeholder="Guarantor's Phone Number"
          value={guarantor.guarantor_phone}
          onChange={(e) => setGuarantor({...guarantor, guarantor_phone: e.target.value})}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="text"
          id="guarantoremail"
          name="guarantor_email"
          placeholder="Guarantor's Email"
          value={guarantor.guarantor_email}
          onChange={(e) => setGuarantor({...guarantor, guarantor_email: e.target.value})}
          style={{ marginBottom: "10px" }}
        />
        <select
          id="document"
          name="Guarantor's ID Type"
          value={guarantor.guarantor_id_type}
          onChange={(e) => setGuarantor({...guarantor, guarantor_id_type: e.target.value})}
          style={{ marginBottom: "10px" }}
        >
          <option value="">Guarantor Document Type</option>
          <option value="NID">NID</option>
          <option value="Passport">Passport</option>
          <option value="Others">Others</option>
        </select>
        {/* <div className="flex items-center gap-2 bg-white ">
          <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faPaperclip} className="text-[#7563d0]"/>
            Upload Guarantor Document
          </label>
          <input id="file" type="file" className="hidden" onChange={handleFileChange} />
        </div> */}

        Display the name of the uploaded file
        {guarantor.guarantor_id && (
          <p>Uploaded Document: {guarantor.guarantor_id.name}</p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 20px",
            backgroundColor: "#502ef1",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px"
          }}
          onClick={handleSubmit}
        >
          NEXT
        </button>
      </div>

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
  );
};

export default Guarantor;
