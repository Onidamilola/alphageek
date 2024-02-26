// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// export const App = () => {
//    const [date, changeDate] = useState(new Date());

//    function changeValue(val) {
//       changeDate(val);
//    }

//    return (
//       <div>
//          {/* <h3>
//             {" "} Using the <i> react-calender </i> library to create calender in React JS{" "}
//          </h3> */}
//          <Calendar onChange = {changeValue} value = {date} />
//          <p>The selected date is - {date.toLocaleDateString()}</p>
//       </div>
//    );
// }
// export default App;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  function handleDateChange(val) {
    setDate(val);
    onDateChange(val);
  }

  return (
    <div className="calendar-popup">
      <DatePicker
        inline
        selected={date}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
      />
    </div>
  );
};

export default Calendar;