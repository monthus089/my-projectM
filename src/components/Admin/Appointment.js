import React from "react";

const Appointment = () => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Create Appointment</h5>
      </div>
      <div className="relative w-[70%] h-[83%]  shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 ">
        <form className="grid grid-flow-col gap-4 px-6 pt-[55px] m-6 text-center ">
          <h4 className="mt-2">Title</h4>
          <input
            type="text"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-100 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />
          <h4 className="mt-2">Date</h4>
          <input
            type="date"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-100 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />
          <h4 className="mt-2">From</h4>
          <input
            type="time"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-100 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />
          <h4 className="mt-2">To</h4>
          <input
            type="time"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-100 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
          />

          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-5 py-1.5 text-center    focus:outline-none"
          >
            Create
          </button>
        </form>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px my-8 bg-gray-500 border-0 " />
          <span class="absolute px-3 text-lg  text-gray-600 -translate-x-1/2 bg-white left-1/2  ">
          Appointment List
          </span>
        </div>
        <div className="scrollbar-hide overflow-y-auto p-2 grid grid-flow-col gap-4 text-center">
          
        </div>
      </div>
    </>
  );
};
export default Appointment;
