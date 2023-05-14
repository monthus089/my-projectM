import React, { useContext, useEffect, useState } from "react";
import jwtInterceptor from "../Auth/jwtInterceptor";
import AuthContext from "../Auth/AuthProvider";
import notyf from "../../js/Notyf";

const JoinAppointment = (props) => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      fetchAppointments();
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/MemberUser/project/` + user.nameid)
        .then((response) => setProjects(response?.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await jwtInterceptor.get(
        `${process.env.REACT_APP_API}/Appointment`
      );
      setAppointments(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerSubmitJoin = async (e, appointmentId, projects) => {
    e.preventDefault();
    // Use the appointmentId and projectId as needed
    let payload = {
      appointmentId: appointmentId,
      projectId: projects[0].projectId,
    };

    try {
      await jwtInterceptor.post(`${process.env.REACT_APP_API}/AppointmentReserve`, payload);
      notyf.success("Joined the appointment successfully.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Appointment</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12  scrollbar-hide">
        <div className="relative overflow-y-auto sm:rounded-[18px] ">
          <form>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    To
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Join
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    className="bg-white border-b"
                    key={appointment.appointmentId}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {appointment.appointmentTitle}
                    </th>
                    <td className="px-6 py-4">{appointment.appointmentDate}</td>
                    <td className="px-6 py-4">
                      {appointment.appointmentDateFrom}
                    </td>
                    <td className="px-6 py-4">
                      {appointment.appointmentDateTo}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm  px-12 py-1.5 text-center focus:outline-none"
                        onClick={(e) =>
                          handlerSubmitJoin(
                            e,
                            appointment.appointmentId,
                            projects
                          )
                        }
                      >
                        Reserve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinAppointment;
