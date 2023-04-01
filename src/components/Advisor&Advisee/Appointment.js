import React from "react";

const Appointment = () => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Create Appointment</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12  scrollbar-hide">
        <form className="grid grid-flow-col gap-4 px-6 pt-[55px] m-6 text-center ">
          <h4 className="mt-2">Title</h4>
          <input
            type="text"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />
          <h4 className="mt-2">Date</h4>
          <input
            type="date"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />
          <h4 className="mt-2">From</h4>
          <input
            type="time"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />
          <h4 className="mt-2">To</h4>
          <input
            type="time"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />

          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-5 py-1.5 text-center    focus:outline-none"
          >
            Create
          </button>
        </form>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px my-5 bg-gray-500 border-0 " />
          <span class="absolute px-1 text-lg  text-gray-600 -translate-x-1/2 bg-white left-1/2  ">
            Appointment List
          </span>
        </div>
        <div class="relative overflow-y-auto sm:rounded-[18px] ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-900 uppercase bg-gray-300 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  From
                </th>
                <th scope="col" class="px-6 py-3">
                  To
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Booking
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Appointment 1
                </th>
                <td class="px-6 py-4">29/2/23</td>
                <td class="px-6 py-4">9.00</td>
                <td class="px-6 py-4">16.00</td>
                <td class="px-6 py-4 text-center">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm  px-12 py-1.5 text-center focus:outline-none"
                  >
                    Booking
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};


export default Appointment;
