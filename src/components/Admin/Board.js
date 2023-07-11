import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import { BiSearch } from "react-icons/bi";

const Broad = (props) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    jwtInterceptor
      .get(`${process.env.REACT_APP_API}/Project`)
      .then((response) => setProjects(response?.data));
  }, []);

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (searchValue) {
      const encodedSearchValue = encodeURIComponent(searchValue);
      const response = await jwtInterceptor.get(
        `${process.env.REACT_APP_API}/Project?searchProject=${encodedSearchValue}`
      );
      setProjects(response?.data);
    } else if (!searchValue) {
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/Project`)
        .then((response) => setProjects(response?.data));
    }
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Project Broad</h5>
      </div>
      <form
        id="search-form"
        className="flex ml-[100px] mt-1 duration-300 w-[330px]"
        onSubmit={handleSearchClick}
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="block w-full pl-10 p-2.5 border-gray-100 bg-gray-100 border text-gray-900 text-sm rounded-[18px] focus:outline-none focus:ring-transparent"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white text-sm font-bold py-1 px-4 ml-2 rounded-[18px]"
        >
          Search
        </button>
      </form>
      <div className="relative w-[70%] h-[82%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-2 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 ">
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
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br   shadow-purple-500/50 font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
                    onClick={() =>
                      navigate("/Admin/Details/" + project.projectId)
                    }
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
