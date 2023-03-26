/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";

import { Link } from "react-router-dom";

const Broad = (props) => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Project Broad</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Project
              </th>
              <th scope="col" className="px-6 py-3">
                Consultant
              </th>
              <th scope="col" className="px-6 py-3">
                People
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 ">
                1
              </th>
              <td className="px-6 py-4">Project Management</td>
              <td className="px-6 py-4">B K</td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">
                <Link to="/Details">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br   shadow-purple-500/50  dark:shadow-purple-800/80 font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
                >
                  Detail
                </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Broad;
