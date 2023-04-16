import React from "react";

const JoinAppointment = (props) => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Create Appointment</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12  scrollbar-hide">
        <div className="relative overflow-y-auto sm:rounded-[18px] ">
          <from>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-900 uppercase bg-gray-300 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    To
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Join
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Appointment 1
                  </th>
                  <td className="px-6 py-4">29/2/23</td>
                  <td className="px-6 py-4">9.00</td>
                  <td className="px-6 py-4">16.00</td>
                  <td className="px-6 py-4">
                    <input
                      type="time"
                      className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm  px-12 py-1.5 text-center focus:outline-none"
                    >
                      Join
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </from>
        </div>
      </div>
    </>
  );
};

export default JoinAppointment;
