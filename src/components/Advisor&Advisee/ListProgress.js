import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";

const ListProgress = () => {
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

  console.table(projectProgresses)

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>ProgressList</h5>
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
                <td className="px-6 py-4">{projectProgress.dateTeacher}</td>
                <td className="px-6 py-4">{projectProgress.workProgress}</td>
                <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br   shadow-purple-500/50  dark:shadow-purple-800/80 font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
                  onClick={() => navigate("/Advisor/ReadProgress/" + projectProgress.projectProgressId)}
                >
                  Progress
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

export default ListProgress;

