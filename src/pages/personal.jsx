import React, { useState, useEffect } from "react";
import axios from "axios";
import { GET_EDUCATIONS } from "../utils/constant";
// import { useGlobalContext } from "../custom-hooks/Context";

const Personal = ({ nextStep }) => {
  const [educations, setEducations] = useState([]);

  const [personalList, setPersonalList] = useState({
    firname: '',
    midname: '',
    lstname: '',
    addr: '',
    phnnum: '',
    gendr: '',
    edu: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional validation here if needed
  };

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await axios.get(GET_EDUCATIONS);
        console.log("Educations Data:", response.data.data);
        setEducations(response.data.data);
      } catch (error) {
        console.error("Error fetching education:", error);
      }
    };

    fetchEducations();
  }, []);

  const handleEducationChange = (e) => {
    const selectedEducationId = +e.target.value;
    setPersonalList({...personalList, edu: selectedEducationId})
    console.log(selectedEducationId);
  };
  const handlePersonal = async (event) => {
    
    event.preventDefault();
    const selectedEduObject = educations.find((educ) => educ.id === personalList.edu);
    nextStep();
    sessionStorage.setItem("personalListInfo", JSON.stringify({...personalList, edu: selectedEduObject.title}))
    console.log(personalList);

  };

  // useEffect(() => {
  //   // This will log the updated firstname whenever it changes
  //   console.log("Updated firstname:", firstname);
  // }, [firstname]);

  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            required
            style={{ marginBottom: "10px" }}
            value={personalList.firname}
            onChange={(e) => setPersonalList({...personalList, firname: e.target.value})}
          />
          <input
            type="text"
            id="middlename"
            name="middlename"
            placeholder="Middle Name"
            style={{ marginBottom: "10px" }}
            value={personalList.midname}
            onChange={(e) => setPersonalList({...personalList, midname: e.target.value})}
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            required
            style={{ marginBottom: "10px" }}
            value={personalList.lstname}
            onChange={(e) => setPersonalList({...personalList, lstname: e.target.value})}
          />
          <input
            type="text"
            id="homeaddress"
            name="homeaddress"
            placeholder="Home Address"
            style={{ marginBottom: "10px" }}
            value={personalList.addr}
            onChange={(e) => setPersonalList({...personalList, addr: e.target.value})}
          />
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder="Phone Number"
            required
            style={{ marginBottom: "10px" }}
            value={personalList.phnnum}
            onChange={(e) => setPersonalList({...personalList, phnnum: e.target.value})}
          />
          <select
            id="Gender"
            name="Gender"
            style={{ marginBottom: "10px" }}
            required
            value={personalList.gendr}
            onChange={(e) => setPersonalList({...personalList, gendr: e.target.value})}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            id="selectLocation"
            name="selectLocation"
            onChange={handleEducationChange}
            style={{ marginBottom: "10px" }}
            required
            value={personalList.edu}
          >
            <option value="">Select Qualification</option>
            {educations.map((title) => (
              <option key={title.id} value={title.id}>
                {title.title}
              </option>
            ))}
          </select>

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
            }}
            onClick={handlePersonal}
          >
            NEXT
          </button>
        </form>
      </div>

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

export default Personal;
