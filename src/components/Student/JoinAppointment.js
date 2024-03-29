import React, { useContext, useEffect, useState } from "react";
import jwtInterceptor from "../Auth/jwtInterceptor";
import AuthContext from "../Auth/AuthProvider";
import notyf from "../../js/Notyf";
import moment from "moment/moment";

const JoinAppointment = (props) => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [reserveTime, setReserveTime] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    try {
      fetchAppointments();
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/MemberUser/project/${user.nameid}`)
        .then((response) => setProjects(response?.data));
    } catch (error) {
      console.log(error);
    }
  },[]);

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
  console.log(appointments);

  const handlerSubmitJoin = async (e, appointmentId, projects) => {
    e.preventDefault();
    // Use the appointmentId and projectId as needed
    let payload = {
      appointmentId: appointmentId,
      projectId: projects[0]?.projectId, // Use optional chaining to handle the case when project is still being fetched
      reserveTime: reserveTime,
    };

    try {
      await jwtInterceptor.post(
        `${process.env.REACT_APP_API}/AppointmentReserve`,
        payload
      );
      notyf.success("Joined the appointment successfully.");
      // Update the local state to reflect the changes
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) => {
          if (appointment.appointmentId === appointmentId) {
            return {
              ...appointment,
              appointmentReserves: [
                ...appointment.appointmentReserves,
                { reserveTime: reserveTime },
              ],
            };
          }
          return appointment;
        })
      );
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 409) {
        notyf.error("You already have a reservation.");
      } else if (err?.response?.status === 422) {
        notyf.error("This time has been reserved.");
      }
    }
  };

  // Helper function to generate reserve time options for a specific appointment
  const generateReserveTimeOptions = (startTime, endTime, reservedTimes) => {
    const options = [];
    let current = startTime;
    while (current < endTime) {
      const endTimeSlot = current.clone().add(40, "minutes").format("HH:mm");
      const reserveTime = `${current.format("HH:mm")}-${endTimeSlot}`;

      // Check if the reserveTime is already reserved
      if (!reservedTimes.includes(reserveTime)) {
        options.push(
          <option key={reserveTime} value={reserveTime}>
            {reserveTime}
          </option>
        );
      }

      current = current.add(40, "minutes");
    }
    return options;
  };

  const handleReserveTimeChange = (e) => {
    const selectedReserveTime = e.target.value;
    setReserveTime(selectedReserveTime);
    
    const appointmentId = e.target
      .closest("tr")
      .getAttribute("data-appointment-id");
    setSelectedAppointment(appointmentId);
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Appointment</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12  scrollbar-hide">
        <div className="relative overflow-y-auto sm:rounded-[18px] ">
          <form>
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
              <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reserved
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reserve Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Join
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => {
                  const startTime = moment(
                    appointment.appointmentDateFrom,
                    "HH:mm"
                  );
                  const endTime = moment(
                    appointment.appointmentDateTo,
                    "HH:mm"
                  );
                  const reservedTimes = appointment.appointmentReserves.map(
                    (reserve) => reserve.reserveTime
                  );
                  const reserveTimeOptions = generateReserveTimeOptions(
                    startTime,
                    endTime,
                    reservedTimes
                  );

                  return (
                    <tr
                      className="bg-white border-b"
                      key={appointment.appointmentId}
                      data-appointment-id={appointment.appointmentId}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {appointment.appointmentTitle}
                      </th>
                      <td className="px-6 py-4">
                        {appointment.appointmentLocation}
                      </td>
                      <td className="px-6 py-4">
                        {appointment.appointmentDate}
                      </td>
                      <td className="px-6 py-4">
                        {appointment.appointmentDateFrom} -{" "}
                        {appointment.appointmentDateTo}
                      </td>
                      <td className="px-6 py-4">
                        {appointment.appointmentReserves.length > 0
                          ? appointment.appointmentReserves.map(
                              (reserve, index) => (
                                <span key={index}>{reserve.reserveTime}</span>
                              )
                            )
                          : "-"}
                      </td>

                      <td className="px-6 py-4">
                        <select
                          value={
                            selectedAppointment === appointment.appointmentId
                              ? reserveTime
                              : ""
                          }
                          onChange={handleReserveTimeChange}
                          className="form-select mt-1 block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[24px] outline-none"
                          required
                        >
                          <option value="">Select time</option>
                          {reserveTimeOptions}
                        </select>
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
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinAppointment;
