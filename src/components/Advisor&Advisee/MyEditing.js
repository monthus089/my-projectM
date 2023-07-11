import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import notyf from "../../js/Notyf";
import AuthContext from "../Auth/AuthProvider";

const Editing = (props) => {
  const { user } = useContext(AuthContext);
  const { getProjectId } = useParams();
  const navigate = useNavigate();
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [projectYear, setProjectYear] = useState("");
  const [projectContact, setProjectContact] = useState("");
  const [advisees, setAdvisees] = useState([]);
  const [advisers, setAdvisers] = useState([]);

  useEffect(() => {
    try {
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/Project/${getProjectId}`)
        .then((response) => {
          //setProject(response?.data);
          setProjectId(response.data.projectId);
          setProjectName(response.data.projectName);
          setProjectDetail(response.data.projectDetail);
          setProjectYear(response.data.projectYear);
          setProjectContact(response.data.projectContact);
          setAdvisees(response.data.advisees);
          setAdvisers(response.data.advisers);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlerSubmitEdit = async (e) => {
    e.preventDefault();
    const updateProject = {
      projectId,
      projectName,
      projectYear,
      projectDetail,
      projectContact,
    };
    try {
      await jwtInterceptor.put(
        `${process.env.REACT_APP_API}/Project/${getProjectId}`,
        updateProject
      );
      notyf.success("The project has been updated.");
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 409) {
        notyf.error("Must be current year");
        return;
      }
    }
    if (user.role === "PM01") {
      navigate("/CAdvisor/MyProject");
    } else if (user.role === "PM02") {
      navigate("/Advisor/MyProject");
    }
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Editing</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <form onSubmit={handlerSubmitEdit}>
          <div className="mt-[30px]">
            <h4 className="ml-[40px] mt-[20px]">Project Name</h4>
            <textarea
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[45px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="consultant">
            <h4 className="ml-[40px] mt-[20px]">Advisor</h4>
            {advisers.map((adviser, index) => (
              <p
                key={index}
                className="ml-[50px] mt-[10px] pr-[300px] text-[20px]"
              >
                {`${adviser.memberUser.firstname} ${adviser.memberUser.lastname}`}
              </p>
            ))}
          </div>

          <div className="consultant">
            <h4 className="ml-[40px] mt-[20px]">Advisees</h4>
            {advisees.map((advisee, index) =>
              advisee.status === 0 ? (
                <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
                  No Member
                </p>
              ) : (
                <p
                  key={index}
                  className="ml-[50px] mt-[10px] pr-[300px] text-[20px]"
                >
                  {`${advisee.memberUser.firstname} ${advisee.memberUser.lastname}`}
                </p>
              )
            )}
          </div>

          <div className="people">
            <h4 className="ml-[40px] mt-[20px]">Year</h4>
            <p className="ml-[50px] mt-[10px] pr-[300px] text-[20px]">
              {projectYear}
            </p>
          </div>
          <div className="detailsProject">
            <h4 className="ml-[40px] mt-[20px]">Details</h4>
            <textarea
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[250px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
              value={projectDetail}
              onChange={(e) => setProjectDetail(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="contact">
            <h4 className="ml-[40px] mt-[20px]">Contact</h4>
            <textarea
              className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[70%] h-[85px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
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

export default Editing;
