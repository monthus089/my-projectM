import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import notyf from "../../js/Notyf";
import AddApppointment from "../AddApppointment";
const Appointment = () => {
  const navigate = useNavigate();
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentDateFrom, setAppointmentDateFrom] = useState("");
  const [appointmentDateTo, setAppointmentDateTo] = useState("");

  const [appointments, setAppointments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPass, setIsOpenPass] = useState(false);
  const closeModal = () => {
    setIsOpenPass(false);
  };
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
      if (err?.response?.status === 402) {
        notyf.error("Appointment already exists");
      }
    }
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Create Appointment</h5>
      </div>
      <div className="flex flex-row items-center justify-center ml-[730px]">
        <button
          type="button"
          className="text-gray-500 bg-gray-50 hover:bg-gradient-to-br  font-medium rounded-[25px] text-sm px-12 py-2.5 text-center mr-2 mb-2 border-gray-300 border-dashed border-2"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsOpenPass((prev) => !prev);
          }}
        >
          + Appointment
        </button>
      </div>
      {isOpenPass ? (
           <AddApppointment onClose={closeModal}/>
          ) : null}
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] scrollbar-hide">
        <div className="relative overflow-y-auto sm:rounded-[18px] ">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm font-bold text-black uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  From
                </th>
                <th scope="col" className="px-6 py-3 text-center">
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
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                  >
                    {appointment.appointmentTitle}
                  </th>
                  <td className="px-6 py-4 text-center">
                    {appointment.appointmentDate}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {appointment.appointmentDateFrom}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {appointment.appointmentDateTo}
                  </td>
                  <td className="px-1 py-4 text-center w-1/5">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm py-1.5 mx-2 text-center w-[85px] focus:outline-none"
                      onClick={()=>navigate("/Advisor/BookingTime")}
                    >
                      Booking
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm py-1.5 mx-2 text-center w-[85px] focus:outline-none"
                    >
                      Delete
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
