import React from "react";
// import cite_logo from "./logo_cite.png";
import { useState } from "react";
import jwtInterceptor from "../Auth/jwtInterceptor";
import { useNavigate, useParams } from "react-router-dom";

const CreateProgress = (props) => {
    const navigate = useNavigate();
    const { getProjectId } = useParams();
    const [fieldOfStudent, setFieldOfStudent] = useState('');
    const [summaryProgress, setSummaryProgress] = useState('');
    const [solutionToImprove, setSolutionToImprove] = useState('');
    const [goalOfWork, setGoalOfWork] = useState('');
    const [workProgress, setWorkProgress] = useState(0);

    const handlerSubmitCreate = async (e) => {
        e.preventDefault();
        let payload = {
            "fieldOfStudent": fieldOfStudent,
            "summaryProgress": summaryProgress,
            "solutionToImprove": solutionToImprove,
            "goalOfWork": goalOfWork,
            "workProgress": workProgress,
          };

          try {
            await jwtInterceptor.post(`${process.env.REACT_APP_API}/ProjectProgress?projectId=${getProjectId}`, payload);

          } catch (error) {
            console.log(error);
          }
          navigate("/Student/JoinProgress")
      };
    return (
        <>
            <div className="ml-[50px] text-[20px]">
                <h5>CITE-P03</h5>
            </div>
            <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
                <form onSubmit={handlerSubmitCreate}>
                    {/* <div className="items-center grid grid-cols-3 text-center">
                        <div className="ml-4 mt-10"><img src={cite_logo} alt="" className="h-20" /></div>
                        <div className="pt-0 text-xl"><span>Project Progress Summary</span></div>
                        <div className="ml-28 mt-12">
                            <div className="flex items-center mr-4">
                                <input  type="radio" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                                        value="Information Technology and Data Science"
                                        checked={fieldOfStudent === "Information Technology and Data Science"}
                                        onChange={(e) => setFieldOfStudent(e.target.value)}
                                />
                                <label className="ml-2 text-sm font-medium text-gray-900">Information Technology and Data Science</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input  type="radio" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                                        value="Computer Engineering"
                                        checked={fieldOfStudent === "Computer Engineering"}
                                        onChange={(e) => setFieldOfStudent(e.target.value)}
                                />
                                <label className="ml-2 text-sm font-medium text-gray-900">Computer Engineering</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input  type="radio" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500"
                                        value="Logistics Engineering"
                                        checked={fieldOfStudent === "Logistics Engineering"}
                                        onChange={(e) => setFieldOfStudent(e.target.value)}
                                />
                                <label className="ml-2 text-sm font-medium text-gray-900">Logistics Engineering</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input  type="radio" name="colored-radio" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500"
                                        value="Robotics and Automation Engineering"
                                        checked={fieldOfStudent === "Robotics and Automation Engineering"}
                                        onChange={(e) => setFieldOfStudent(e.target.value)}
                                />
                                <label className="ml-2 text-sm font-medium text-gray-900">Robotics and Automation Engineering</label>
                            </div>
                        </div>
                    </div> */}
                    <div className="items-center text-start my-10 whitespace-nowrap">
                        <div className="pl-6 py-5"><span>Progress Summary</span></div>
                        <div>
                            <textarea
                                placeholder="Progress Summary..."
                                className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[90%] h-[120px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
                                value={summaryProgress}
                                onChange={(e) => setSummaryProgress(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div className="items-center text-start my-10 whitespace-nowrap">
                        <div className="pl-6 py-5"><span>Improvements</span></div>
                        <div>
                            <textarea
                                placeholder="Improvements..."
                                className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[90%] h-[120px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
                                value={solutionToImprove}
                                onChange={(e) => setSolutionToImprove(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="items-center text-start my-10 whitespace-nowrap">
                        <div className="pl-6 py-5"><span>Next Goal</span></div>
                        <div>
                            <textarea
                                placeholder="Next Goal..."
                                className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[90%] h-[120px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
                                value={goalOfWork}
                                onChange={(e) => setGoalOfWork(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-start my-10 w-max">
                        <div className="pl-6 py-5"><span>The project is now complete and</span></div>
                        <div className="" >
                            <textarea
                                placeholder="0-100"
                                className="px-4 pt-[0.35rem] mt-[10px] mr-[0px] text-[20px] w-[100%] h-[45px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
                                value={workProgress}
                                onChange={(e) => setWorkProgress(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="pl-6 py-5"><span>Percentage</span></div>
                    </div>

                    
                    <div className="pt-20 pr-2 grid grid-cols-12 ">
                        <button
                            className="col-start-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-red-800 font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default CreateProgress;