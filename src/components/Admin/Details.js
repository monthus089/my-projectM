import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import notyf from "../../js/Notyf";

const Details = (props) => {
  const { getProjectId } = useParams();
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();
  const handleDelete = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeleteConfirm = async (projectId) => {
    try {
      await jwtInterceptor.delete(
        `${process.env.REACT_APP_API}/Project/${projectId}`
      );
      notyf.success("Successfully deleted the project.");
    } catch (error) {
      console.log(error);
    }
    navigate("/Admin/Board");
    setShowModal(false);
  };

  const [project, setProject] = useState({});

  useEffect(() => {
    jwtInterceptor
      .get(`${process.env.REACT_APP_API}/Project/` + getProjectId)
      .then((response) => setProject(response?.data));
  }, []);

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
          <h4 className="ml-[40px] mt-[20px]">Consultant</h4>
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
          {project.advisees &&
            project.advisees.map((advisees, index) => (
              <p
                key={index}
                className="ml-[50px] mt-[10px] pr-[300px] text-[20px]"
              >
                {advisees.memberUser.firstname} {advisees.memberUser.lastname}
              </p>
            ))}
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
          <button
            type="button"
            className="col-start-11 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-yellow-800 font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
            onClick={() => navigate("/Admin/Editing/" + getProjectId)}
          >
            Edit
          </button>

          <button
            type="button"
            className="col-start-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-red-800 font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      <div
        id="id01"
        className={`fixed left-0 top-[280px] w-full h-full overflow-auto pt-200  ${
          showModal ? "block" : "hidden"
        }`}
      >
        <form className="bg-white mx-auto mt-5 mb-15 border border-gray-300 shadow-lg w-[422px] h-[250px] rounded-[18px]">
          <div className="py-8 text-center">
            <h1>Delete Project</h1>
            <p className="text-center p-4 mt-4">
              Are you sure you want to delete a Project?
            </p>
            <div className="mt-[30px] mx-[40px] grid grid-cols-2 gap-x-8">
              <button
                type="button"
                onClick={closeModal}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none  font-medium rounded-[18px] text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 "
              >
                No, Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteConfirm(getProjectId)}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-red-800 font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Details;
