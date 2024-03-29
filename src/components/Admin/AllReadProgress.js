import React, { useEffect } from "react";
import notyf from "../../js/Notyf.js";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import jwtInterceptor from "../Auth/jwtInterceptor.js";

const ReadProgress = () => {
  let navigate = useNavigate();
  const { getProjectProgressId } = useParams();
  const [projectProgress, setProjectProgress] = useState({});
  const [commentTeacher, setCommentTeacher] = useState("");
  useEffect(() => {
    try {
      jwtInterceptor
        .get(
          `${process.env.REACT_APP_API}/ProjectProgress/${getProjectProgressId}`
        )
        .then((response) => {
          setProjectProgress(response?.data);
          setCommentTeacher(response.data.commentTeacher);
        });
    } catch (error) {
      console.log(error);
    }
  },[] );

  const handlerSubmitCheck = async (e) => {
    e.preventDefault();
    if (!commentTeacher) {
      notyf.open({
        type: "warning",
        message: "Please Enter Comment.",
      });
      return;
    }
    let payload = {
      projectProgressId: getProjectProgressId,
      dateForm: projectProgress.dateForm,
      numberProgress: projectProgress.numberProgress,
      summaryProgress: projectProgress.summaryProgress,
      solutionToImprove: projectProgress.solutionToImprove,
      goalOfWork: projectProgress.goalOfWork,
      workProgress: projectProgress.workProgress,
      commentTeacher: commentTeacher,
    };
    try {
      await jwtInterceptor.put(
        `${process.env.REACT_APP_API}/ProjectProgress/${getProjectProgressId}?projectId=${projectProgress.project.projectId}`,
        payload
      );
      notyf.success("Check");
    } catch (err) {
      console.log(err);
    }
    navigate("/Advisor/Progress");
  };
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Progress</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <form onSubmit={handlerSubmitCheck}>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-1">
              <span>Progress Summary</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {projectProgress.summaryProgress}
              </p>
            </div>
          </div>

          <div className="items-center text-start my-10 ">
            <div className="pl-6 pb-5 pt-10">
              <span>Improvements</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {projectProgress.solutionToImprove}
              </p>
            </div>
          </div>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-10">
              <span>Next Goal</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {projectProgress.goalOfWork}
              </p>
            </div>
          </div>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-10">
              <p>
                The project is now complete and {projectProgress.workProgress}{" "}
                Percentage
              </p>
            </div>
          </div>
          <div className="items-center text-start my-10 whitespace-nowrap">
            <div className="pl-6 py-5">
              <span>Comment</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                {projectProgress.commentTeacher}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReadProgress;
