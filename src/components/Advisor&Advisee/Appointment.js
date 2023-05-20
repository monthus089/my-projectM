import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import AddAppointment from "./AddAppointment";
import notyf from "../../js/Notyf";
const Appointment = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setShowModal(true);
  };

  const [appointments, setAppointments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState("");

  const closeModal = () => {
    setIsOpenPass(false);
    setShowModal(false);
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

  const handleDeleteConfirm = async () => {
    try {
      await jwtInterceptor.delete(
        `${process.env.REACT_APP_API}/Appointment/${selectedAppointmentId}`
      );
      notyf.success("Successfully deleted the appointment.");
      // Remove the deleted appointment from the local state
      setAppointments((prevAppointments) =>
        prevAppointments.filter(
          (appointment) => appointment.appointmentId !== selectedAppointmentId
        )
      );
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 500) {
        notyf.error("You cannot delete an appointment.");
      }
    }
    setShowModal(false);
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
      {isOpenPass ? <AddAppointment onClose={closeModal} /> : null}
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] scrollbar-hide">
        <div className="relative overflow-y-auto sm:rounded-[18px] ">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm font-bold text-black uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Location
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
                    {appointment.appointmentLocation}
                  </td>
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
                      onClick={() =>
                        navigate(
                          "/Advisor/BookingTime/" + appointment.appointmentId
                        )
                      }
                    >
                      Booking
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm py-1.5 mx-2 text-center w-[85px] focus:outline-none"
                      onClick={() => handleDelete(appointment.appointmentId)}
                      //onClick={() => handleDeleteConfirm(appointment.appointmentId)}
                    >
                      Delete
                    </button>
                    <div
                      id="id01"
                      className={`fixed left-0 top-[280px] w-full h-full overflow-auto pt-200  ${
                        showModal ? "block" : "hidden"
                      }`}
                    >
                      <form className="bg-white mx-auto mt-5 mb-15 border border-gray-300 shadow-lg w-[422px] h-[250px] rounded-[18px]">
                        <div className="py-8 text-center">
                          <h1>Delete Appointment</h1>
                          <p className="text-center p-4 mt-4">
                            Are you sure you want to delete a Appointment?
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
                              onClick={() =>
                                handleDeleteConfirm(selectedAppointmentId)
                              }
                              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-red-800 font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
                            >
                              Yes, Delete
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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
