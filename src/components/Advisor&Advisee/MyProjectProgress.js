import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const MyProjectProgress = (props) => {
  
  const navigate = useNavigate();

  useEffect(() => {
    try {
      //API
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Project Progress</h5>
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
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">

            <tr className="bg-white border-b " key={''}>
              <th scope="row" className="px-6 py-4 ">
               {/* หมายเลข index */}
              </th>
              <td className="px-6 py-4">
                {/* ชื่อโปรเจค */}
              </td>
              <td className="px-6 py-4">
                {/* ชื่อโปรเจค */}
              </td>
              <td className="px-6 py-4">
                {/* ปีของโปรเจค */}
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br   shadow-purple-500/50  dark:shadow-purple-800/80 font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
                  onClick={() => navigate("/Advisor/ListProgress")}
                >
                  Progress
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProjectProgress;
