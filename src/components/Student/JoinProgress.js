import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthProvider";
import jwtInterceptor from "../Auth/jwtInterceptor";

const JoinProgress = (props) => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/MemberUser/project/` + user.nameid)
        .then((response) => setProjects(response?.data));
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
                Advisor
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {projects.map((project, index) => (
                <tr className="bg-white border-b" key={project.projectId}>
                  <th scope="row" className="px-6 py-4">
                    {index + 1}
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
                    {project.advisees.map((advisee) =>
                      advisee.memberUserId === user.nameid
                        ? advisee.status === 1
                          ? <div className="text-green-500">Joined</div>
                          : advisee.status === 0
                          ? <div className="text-yellow-500">Pending</div>
                          : null
                        : ""
                    )}
                  </td>
                  <td className="px-6 py-4">
                  {project.advisees.map((advisee) =>
                      advisee.memberUserId === user.nameid
                        ? advisee.status === 1
                          ? <button
                          type="button"
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-purple-500/50 dark:shadow-purple-800/80 font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
                          onClick={() =>
                            navigate("/Student/ProgressList/" + project.projectId)
                          }
                        >
                          Progress
                        </button>
                          : advisee.status === 0
                          ? <button
                          type="button"
                          className="text-white bg-gray-300 shadow-gray-500/50 dark:shadow-gray-800/80 font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
                          disabled
                        >
                          Progress
                        </button>
                          : null
                        : ""
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JoinProgress;
