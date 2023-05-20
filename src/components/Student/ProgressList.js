import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";

const ProgressList = (props) => {
  let navigate = useNavigate();
  const { getProjectId } = useParams();
  const [projectProgresses, setProjectProgresses] = useState([]);
  useEffect(() => {
    try {
      jwtInterceptor
        .get(
          `${process.env.REACT_APP_API}/ProjectProgress/project/` + getProjectId
        )
        .then((response) => setProjectProgresses(response?.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>ProgressList</h5>
      </div>
      <div className="flex flex-row items-center justify-center ml-[730px]">
        <button
          type="button"
          className="text-gray-500 bg-gray-50 hover:bg-gradient-to-br  font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2 border-gray-300 border-dashed border-2"
          onClick={() => navigate("/Student/CreateProgress/" + getProjectId)}
        >
          + Create Progress
        </button>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] scrollbar-hide">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Project
              </th>
              <th scope="col" className="px-6 py-3">
                Date Sent
              </th>
              <th scope="col" className="px-6 py-3">
                Date Checked
              </th>
              <th scope="col" className="px-6 py-3">
                Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {projectProgresses.map((projectProgress) => (
              <tr
                className="bg-white border-b "
                key={projectProgress.projectProgressId}
              >
                <th scope="row" className="px-6 py-4 ">
                  {projectProgress.numberProgress}
                </th>
                <td className="px-6 py-4">
                  {projectProgress.project.projectName}
                </td>
                <td className="px-6 py-4">{projectProgress.dateForm}</td>
                <td className="px-6 py-4">
                  {" "}
                  {projectProgress.dateTeacher != null
                    ? projectProgress.dateTeacher
                    : "-"}
                </td>
                <td className="px-6 py-4">{projectProgress.workProgress}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm  px-12 py-1.5 text-center focus:outline-none"
                    onClick={() => navigate("/Student/ReadProgressStudent/" + projectProgress.projectProgressId)}
                  >
                    Read
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

export default ProgressList;
