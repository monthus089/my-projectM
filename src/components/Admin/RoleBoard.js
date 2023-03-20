/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";

const Broad = (props) => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Users Broad</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
              ID
              </th>
              <th scope="col" className="px-6 py-3">
              Name
              </th>
              <th scope="col" className="px-6 py-3">
              Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 ">
                620107030025
              </th>
              <td className="px-6 py-4">Monthat Muensaeng</td>
              <td className="px-6 py-4">0968911705</td>
              <td className="px-6 py-4">
                <select
                  id="role"
                  className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-[18px] block w-full py-2.5 px-2 dark:bg-white focus:outline-none dark:text-gray-400 "
                  defaultValue={'Admin'}
                >
                  <option value='Admin'>Admin</option>
                  <option value='Advisor'>Advisor</option>
                  <option value='Advisee'>Advisee</option>
                  <option value='Student'>Student</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none"
                >
                  Change
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Broad;
