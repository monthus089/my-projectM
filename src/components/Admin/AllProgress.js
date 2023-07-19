import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

const AllProgress = () => {
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
  const sortedProjectProgresses = projectProgresses.sort(
    (a, b) => new Date(b.dateForm) - new Date(a.dateForm)
  );
  
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Progress List</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date Sent
              </th>
              <th scope="col" className="px-6 py-3">
                Date Checked
              </th>
              <th scope="col" className="px-6 py-3">
                Checked
              </th>
              <th scope="col" className="px-6 py-3">
                Percentage
              </th>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {sortedProjectProgresses.map((projectProgress,index ) => (
              projectProgress.progressStatus===1?(
              <tr
                className="bg-white border-b"
                key={projectProgress.projectProgressId}
              >
                <td className="px-6 py-4">
                  {projectProgress.numberProgress}
                </td>
                <td className="px-6 py-4">{projectProgress.dateForm}</td>
                <td className="px-6 py-4">
                  {projectProgress.dateTeacher != null
                    ? projectProgress.dateTeacher
                    : "-"}
                </td>
                <td className="px-6 py-4">
                  {projectProgress.dateTeacher ? (
                    <BsCheck2Circle className="text-green-600 w-4 h-4 inline-block" />
                  ) : (
                    <BsCheck2Circle className="text-stone-400 w-4 h-4 inline-block" />
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex w-full h-4 bg-gray-200 rounded-[55px] overflow-hidden">
                    <div
                      className={`flex flex-col justify-center overflow-hidden ${
                        projectProgress.workProgress <= 20
                          ? "bg-gradient-to-r from-red-500 via-red-600 to-red-700 pr-5 pl-2"
                          : projectProgress.workProgress <= 40
                          ? "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"
                          : projectProgress.workProgress <= 60
                          ? "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"
                          : projectProgress.workProgress <= 80
                          ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
                          : projectProgress.workProgress <= 100
                          ? "bg-gradient-to-r from-green-500 via-green-600 to-green-700"
                          : ""
                      } text-xs text-white text-center`}
                      role="progressbar"
                      style={{ width: `${projectProgress.workProgress}%` }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {projectProgress.workProgress}%
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {index === 0 ? (
                    <>
                      {projectProgress.resultWork > 0 ? (
                        <IoIosArrowUp className="text-green-500 w-4 h-4 inline-block pr-1" />
                      ) : projectProgress.resultWork <= 0 ? (
                        <IoIosArrowDown className="text-red-500 w-4 h-4 inline-block pr-1" />
                      ) : null}
                      {projectProgress.resultWork}%
                    </>
                  ) : (
                    <>
                      <IoIosArrowUp className="text-green-500 w-4 h-4 inline-block pr-1" />
                      {projectProgress.workProgress}%
                    </>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-purple-500/50 font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
                    onClick={() =>
                      navigate(
                        "/Admin/ReadProgress/" +
                          projectProgress.projectProgressId
                      )
                    }
                  >
                    Detail
                  </button>
                </td>
              </tr>):null
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProgress;
