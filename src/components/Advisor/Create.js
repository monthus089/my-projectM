import React from "react";

const Create = (props) => {
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Create</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <form action="">
          <div className="mt-[30px]">
            <h4 className="ml-[40px] mt-[20px]">Project Name</h4>
            <textarea
              name=""
              id="" placeholder="Project Name..."
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[45px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
            ></textarea>
          </div>
          <div className="consultant">
            <h4 className="ml-[40px] mt-[20px]">Consultant</h4>
            <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
              Bundit Korndee
            </p>
          </div>
          <div className="people">
            <h4 className="ml-[40px] mt-[20px]">People</h4>
            <textarea
              name=""
              id="" placeholder="People..."
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[45px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
            ></textarea>
          </div>
          <div className="detailsProject">
            <h4 className="ml-[40px] mt-[20px]">Details</h4>
            <textarea
              name=""
              id="" placeholder="Detail..."
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[250px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
            ></textarea>
          </div>
          <div className="contact">
            <h4 className="ml-[40px] mt-[20px]">Contact</h4>
            <textarea
              name=""
              id="" placeholder="Contat..."
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[85px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
            ></textarea>
          </div>
          <div className="pt-20 pr-2 grid grid-cols-12 ">
            <button className="col-start-12 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  outline-none font-medium rounded-[18px] text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;