import React from 'react'

const Guarantor = ({nextStep}) => {
 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    nextStep()
  };
  return (
    <div>
       <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" id="guarantorname" name="guarantorname" placeholder="Guarantor's Name" style={{ marginBottom: '10px' }} />
         <input type="text" id="guarantorphonenumber" name="guarantorphonenumber" placeholder="Guarantor's Phone Number" style={{ marginBottom: '10px' }} />
         <input type="text" id="guarantoremail" name="guarantoremail" placeholder="Guarantor's Email" style={{ marginBottom: '10px' }} />
         <select id="document" name="Guarantor's Document Type" style={{ marginBottom: '10px' }}>
            <option value="document">Guarantor Document Type</option>
            <option value="document">NID</option>
            <option value="document">Passport</option>
            <option value="document">Others</option>
          </select>
          <div className="flex items-center">
  <input id="file" type="file" className="appearance-none border border-gray-100 py-1 px-3 rounded-md" />
  <label htmlFor="file" className="ml-2">Upload Guarantor Document</label>
</div>



  
  
  
          <button type="submit" style={{ width: '100%', padding: '10px 20px', backgroundColor: '#502ef1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleSubmit}>NEXT</button>
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
  )
}

export default Guarantor;
