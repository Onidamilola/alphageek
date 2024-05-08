import React from 'react'

const SchedulePopup = ({visitSchedules, isVisible, scheduleId, closeModal}) => {
    const handleEditClose= async(event)=>{
        event.preventDefault()
        closeModal()
      }
console.log('visitSchedules:', visitSchedules);
      console.log('scheduleId:', scheduleId);
      const selectedSchedule = visitSchedules.find((schedule) => schedule.schedule_id === scheduleId) || {}
      
      console.log('selectedSchedule:', selectedSchedule);

      return (
        <div>
          {isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center text-[#7563d0]">
              <div className="bg-purple-100 py-8 rounded-lg px-6 z-557 absolute top-[40%] left">
                <div>
                  {selectedSchedule && (
                    <>
                      <p>Outlet Name: {selectedSchedule.outlet_name}</p>
                      <p>Schedule Date: {selectedSchedule.date}</p>
                      <p>Location: {}</p>
                    </>
                  )}
                  <div className="flex justify-end font-bold mt-3">
                    <button
                      className={`w-40 px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer`}
                      onClick={handleEditClose}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };

export default SchedulePopup;
