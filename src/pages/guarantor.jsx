import React, { useState } from "react";
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
    guarantor_document_type: '',
    guarantor_id: null,
  });

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      // File size greater than 5MB, show error toast
      toast.error("File size cannot exceed 5MB");
    } else {
      setGuarantor((prevGuarantor) => ({
        ...prevGuarantor,
        guarantor_id: file,
      }));
      // Update sessionStorage here using the updated guarantor state
      sessionStorage.setItem('guarantor', JSON.stringify({...guarantor, guarantor_document: file}));
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    sessionStorage.setItem('guarantor', JSON.stringify(guarantor));
    navigate("/capture");
  };

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
          onChange={(e) => setGuarantor({...guarantor, guarantor_name: e.target.value})}
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
          name="Guarantor's Document Type"
          value={guarantor.guarantor_document_type}
          onChange={(e) => setGuarantor({...guarantor, guarantor_document_type: e.target.value})}
          style={{ marginBottom: "10px" }}
        >
          <option value="">Guarantor Document Type</option>
          <option value="NID">NID</option>
          <option value="Passport">Passport</option>
          <option value="Others">Others</option>
        </select>
        <div className="flex items-center gap-2 bg-white ">
          <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faPaperclip} className="text-[#7563d0]"/>
            Upload Guarantor Document
          </label>
          <input id="file" type="file" className="hidden" onChange={handleFileChange} />
        </div>

        {/* Display the name of the uploaded file */}
        {guarantor.guarantor_document && (
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
