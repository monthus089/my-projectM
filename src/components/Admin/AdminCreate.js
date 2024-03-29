import React, { useEffect, useState } from "react";
import jwtInterceptor from "../Auth/jwtInterceptor";
import notyf from "../../js/Notyf";

const AdminCreate = () => {
  const [projectName, setProjectName] = useState("");
  const [projectAdvisorID, setProjectAdvisorID] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [projectContact, setProjectContact] = useState("");
  const [receiveAdvisorID, setReceiveAdvisorID] = useState([]);

  useEffect(() => {
    AdvisoridData();
  }, []);
  
  const AdvisoridData = async () => {
    try {
      await jwtInterceptor
        .get(`${process.env.REACT_APP_API}/MemberUser/advisors`)
        .then((response) => setReceiveAdvisorID(response?.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handlerSubmitCreate = async (e) => {
    e.preventDefault();
    let payload = {
      projectName: projectName,
      projectDetail: projectDetail,
      projectContact: projectContact,
    };
    try {
      await jwtInterceptor.post(
        `${process.env.REACT_APP_API}/Project?adviserId=${projectAdvisorID}`,
        payload
      );
      notyf.success("The project has been created successfully.");
      setProjectName("");
      setProjectAdvisorID("");
      setProjectDetail("");
      setProjectContact("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Create</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <form onSubmit={handlerSubmitCreate}>
          <div className="mt-[30px]">
            <h4 className="ml-[40px] mt-[20px]">Project Name</h4>
            <textarea
              placeholder="Project Name..."
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[45px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mt-[30px]">
            <h4 className="ml-[40px] mt-[20px]">Advisor</h4>
            <div className="w-[310px] px-4 pt-[0.35rem] ml-[33px] mt-[10px]">
              <select
                key={""}
                value={projectAdvisorID}
                onChange={(e) => setProjectAdvisorID(e.target.value)}
                className="form-select block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-[18px] outline-none"
                required
              >
                <option key={""} value={""}>
                  Select Advisor
                </option>
                {receiveAdvisorID.map((advisor) => (
                  <option
                    key={advisor.memberUserId}
                    value={advisor.memberUserId}
                  >
                    {advisor.firstname}
                    {""}
                    {advisor.lastname}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="detailsProject">
            <h4 className="ml-[40px] mt-[20px]">Details</h4>
            <textarea
              placeholder="Detail..."
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[310px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
              value={projectDetail}
              onChange={(e) => setProjectDetail(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="contact">
            <h4 className="ml-[40px] mt-[20px]">Contact</h4>
            <textarea
              placeholder="Contact..."
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[105px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
              value={projectContact}
              onChange={(e) => setProjectContact(e.target.value)}
              required
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

export default AdminCreate;
