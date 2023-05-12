import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import notyf from "../../js/Notyf";

const Appointment = () => {
  const navigate = useNavigate();
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentDateFrom, setAppointmentDateFrom] = useState("");
  const [appointmentDateTo, setAppointmentDateTo] = useState("");

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
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

  const handlerSubmitCreate = async (e) => {
    e.preventDefault();
    let payload = {
      appointmentTitle: appointmentTitle,
      appointmentDate: appointmentDate,
      appointmentDateFrom: appointmentDateFrom,
      appointmentDateTo: appointmentDateTo,
    };

    try {
      await jwtInterceptor.post(
        `${process.env.REACT_APP_API}/Appointment`,
        payload
      );
      notyf.success("Information added successfully!");
      // Fetch the updated list of appointments
      await fetchAppointments();
      // Clear the input fields
      setAppointmentTitle("");
      setAppointmentDate("");
      setAppointmentDateFrom("");
      setAppointmentDateTo("");
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 422) {
        notyf.error("Appointment already exists");
      }
    }
  };

  const handleSubmitEdit = async (e, appointmentId) => {
    e.preventDefault();
    notyf.error("You can't book because you're not a student.");
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Create Appointment</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12  scrollbar-hide">
        <form
          className="grid grid-flow-col gap-4 px-6 pt-[55px] m-6 text-center "
          onSubmit={handlerSubmitCreate}
        >
          <h4 className="mt-2">Title</h4>
          <input
            type="text"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
            value={appointmentTitle}
            onChange={(e) => setAppointmentTitle(e.target.value)}
            required
          />
          <h4 className="mt-2">Date</h4>
          <input
            type="date"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
          <h4 className="mt-2">From</h4>
          <input
            type="time"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
            value={appointmentDateFrom}
            onChange={(e) => setAppointmentDateFrom(e.target.value)}
            required
          />
          <h4 className="mt-2">To</h4>
          <input
            type="time"
            className="block w-full pl-3 p-2.5 border-gray-100 bg-gray-200 border  text-gray-900 text-sm rounded-[18px] focus:outline-none "
            value={appointmentDateTo}
            onChange={(e) => setAppointmentDateTo(e.target.value)}
            required
          />

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-5 py-1.5 text-center    focus:outline-none"
          >
            Create
          </button>
        </form>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-5 bg-gray-500 border-0 " />
          <span className="absolute px-1 text-lg  text-gray-600 -translate-x-1/2 bg-white left-1/2  ">
            Appointment List
          </span>
        </div>
        <div className="relative overflow-y-auto sm:rounded-[18px] ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-900 uppercase bg-gray-300 ">
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
                  Booking
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
                  <td className="px-6 py-4">{appointment.appointmentDateTo}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm  px-12 py-1.5 text-center focus:outline-none"
                      onClick={(e) => handleSubmitEdit(e, appointment.appointmentId)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Appointment;
