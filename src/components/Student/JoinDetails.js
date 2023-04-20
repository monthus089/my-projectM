import React from "react";

const JoinDetails = (props) => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h2>Project Detail</h2>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <div className="mt-[30px]">
          <h4 className="ml-[40px] mt-[20px]">Project Name</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            Line chatbot Rent Room
          </p>
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Consultant</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            Bundit Korndee
          </p>
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">People</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">1 People</p>
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Details</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            A LINE account created to automate interactions with users. without
            which we do not have to sit and answer because there is no need to
            answer the same question many times a day But many of you who are
            newbies are not good at it and are worried about whether to write
            code or write programs. It's very easy to do with the Line Messaging
            API and Dialogflow. easy to use
          </p>
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Contact</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            Line : carrotkorndee
          </p>
        </div>

        <div className="pt-20 pr-2 grid grid-cols-12 ">
          <button
            type="button"
            className="col-start-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-red-800 font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};
export default JoinDetails;
