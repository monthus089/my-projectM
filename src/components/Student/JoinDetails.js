import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import { useContext } from "react";
import AuthContext from "../Auth/AuthProvider";
import notyf from "../../js/Notyf";

const JoinDetails = (props) => {
  const { getProjectId } = useParams();
  const [project, setProject] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlerSubmitJoin = async (e) => {
    e.preventDefault();
    let payload = {
      memberUserId: user.nameid,
      projectId: getProjectId,
    };
    try {
      await jwtInterceptor.post(
        `${process.env.REACT_APP_API}/Advisee`,
        payload
      );
      notyf.success("Ask to join and wait for a response.");
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 400) {
        notyf.error("You are already in this project or wait for reply");
      } else if (error?.response?.status === 422) {
        notyf.error("You cannot join the project in the same year.");
      }
    }
    navigate("/Student/JoinBoard");
  };

  useEffect(() => {
    try {
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/Project/` + getProjectId)
        .then((response) => setProject(response?.data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(project);
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h2>Project Detail</h2>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <div className="mt-[30px]">
          <h4 className="ml-[40px] mt-[20px]">Project Name</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            {project.projectName}
          </p>
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Advisor</h4>
          {project.advisers &&
            project.advisers.map((adviser, index) => (
              <p
                key={index}
                className="ml-[50px] mt-[10px] pr-[300px] text-[20px]"
              >
                {adviser.memberUser.firstname} {adviser.memberUser.lastname}
              </p>
            ))}
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Member List</h4>
          {!project.advisees ? (
            project.advisees &&
            project.advisees.map((advisee, index) =>
              advisee.status === 1 ? (
                <p
                  key={index}
                  className="ml-[50px] mt-[10px] pr-[300px] text-[20px]"
                >
                  {advisee.memberUser.firstname} {advisee.memberUser.lastname}
                </p>
              ) : null
            )
          ) : (
            <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
              No Member
            </p>
          )}
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Year</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            {project.projectYear}
          </p>
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Details</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            {project.projectDetail}
          </p>
        </div>
        <div className="mt-[50px]">
          <h4 className="ml-[40px] mt-[20px]">Contact</h4>
          <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
            {project.projectContact}
          </p>
        </div>

        <div className="pt-20 pr-2 grid grid-cols-12 ">
          {project.projectStatus === 0 ? (
            <button
              type="button"
              className="col-start-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-red-800 font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
              onClick={handlerSubmitJoin}
            >
              Join
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default JoinDetails;
