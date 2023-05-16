import React from "react";

const BookingTime = () => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>BookingTime</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Project Group
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time Stamp
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            <tr className="bg-white border-b " key={""}>
              <th scope="row" className="px-6 py-4 ">
                {""}
              </th>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BookingTime;
