// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Auth/AuthProvider";
import jwtInterceptor from "../Auth/jwtInterceptor";
import Accept from "./Accept";

const Broad = (props) => {
  let navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [OpenAccept, setOpenAccept] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null); // เพิ่ม state เก็บ project.projectId ที่เลือก

  useEffect(() => {
    try {
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/MemberUser/project/` + user.nameid)
        .then((response) => {
          if (Array.isArray(response.data)) {
            setProjects(response.data);
          } else {
            console.log("Fetched data is not an array:", response.data);
          }
        })
        .catch((error) => {
          console.log("Error fetching projects:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const closeModal = () => {
    setOpenAccept(false);
  };

  const handleAcceptClick = (projectId) => {
    setSelectedProjectId(projectId); // เก็บ project.projectId ที่เลือก
    setOpenAccept(true); // เปิด <Accept /> component
  };

  const handleDetailClick = (projectId) => {
    if (user.role === "PM01") {
      navigate("/CAdvisor/MyDetails/" + projectId);
    } else if (user.role === "PM02") {
      navigate("/Advisor/MyDetails/" + projectId);
    }
   
  }

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Project List</h5>
      </div>
      {OpenAccept ? (
        <Accept onClose={closeModal} projectId={selectedProjectId} />
      ) : null}
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
                Advisor
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
            {projects.map((project, i) => (
              <tr className="bg-white border-b " key={project.projectId}>
                <th scope="row" className="px-6 py-4 ">
                  {i + 1}
                </th>
                <td className="px-6 py-4">{project.projectName}</td>
                <td className="px-6 py-4">
                  {project.advisers.map((adviser, j) => (
                    <span key={j}>
                      {adviser.memberUser.firstname}{" "}
                      {adviser.memberUser.lastname}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4">{project.projectYear}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br   shadow-purple-500/50  dark:shadow-purple-800/80 font-medium rounded-[25px] text-sm px-5 py-2 text-center mr-2 mb-2"
                    onClick={() => handleAcceptClick(project.projectId)}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br   shadow-purple-500/50  dark:shadow-purple-800/80 font-medium rounded-[25px] text-sm px-5 py-2 text-center mr-2 mb-2"
                    onClick={() => handleDetailClick(project.projectId)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Broad;
