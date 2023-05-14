import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const ReadProgressStudent = () => {
  let navigate = useNavigate();
  
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Progress</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <form>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-1">
              <span>Progress Summary</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {}
              </p>
            </div>
          </div>

          <div className="items-center text-start my-10 ">
            <div className="pl-6 pb-5 pt-10">
              <span>Improvements</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {}
              </p>
            </div>
          </div>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-10">
              <span>Next Goal</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {}
              </p>
            </div>
          </div>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-10">
              <p>The project is now complete and {} Percentage</p>
            </div>
          </div>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-10">
              <span>Next Goal</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReadProgressStudent;
