import React, { useState } from "react";
import jwtInterceptor from "../Auth/jwtInterceptor";
import notyf from "../../js/Notyf";
import { RxCross1 } from "react-icons/rx";

const AddAppointment = (props) => {
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentDateFrom, setAppointmentDateFrom] = useState("");
  const [appointmentDateTo, setAppointmentDateTo] = useState();
  const [appointmentLocation, setAppointmentLocation] = useState("");
  const [datedisabled, setDatedisabled] = useState(true);
  
  const fieldsAreEmpty =
    !appointmentTitle ||
    !appointmentDate ||
    !appointmentDateFrom ||
    !appointmentDateTo ||
    !appointmentLocation;

  const handlerSubmitCreate = async (e) => {
    e.preventDefault();
    let payload = {
      appointmentTitle: appointmentTitle,
      appointmentDate: appointmentDate,
      appointmentDateFrom: appointmentDateFrom,
      appointmentDateTo: appointmentDateTo,
      appointmentLocation: appointmentLocation,
    };

    if (fieldsAreEmpty) {
      notyf.open({
        type: "warning",
        message: "Please enter correct and complete values.",
      });
      return;
    }

    try {
      await jwtInterceptor.post(
        `${process.env.REACT_APP_API}/Appointment`,
        payload
      );
      notyf.success("Information added successfully!");
      setAppointmentTitle("");
      setAppointmentDate("");
      setAppointmentDateFrom("");
      setAppointmentDateTo("");
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 422) {
        notyf.error("Appointment already exists");
      } else if (err?.response?.status === 500) {
        notyf.error("You can't create an appointment");
      }
    }
  };

  const handleTimeStartChange = (e) => {
    const selectedStartTime = e.target.value;
    setAppointmentDateFrom(selectedStartTime);
    if (appointmentDateTo && selectedStartTime > appointmentDateTo) {
      setAppointmentDateTo("");
    }
    if (!appointmentDateTo) {
      document.getElementById("time-start-select").disabled = true;
    } else {
      document.getElementById("time-start-select").disabled = false;
    }
  };

  const handleTimeEndChange = (e) => {
    const selectedEndTime = e.target.value;
    setAppointmentDateTo(selectedEndTime);
    if (selectedEndTime) {
      document.getElementById("time-start-select").disabled = false;
    } else {
      document.getElementById("time-start-select").disabled = true;
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const currentDate = new Date().toISOString().split("T")[0]; // Current date
    if (selectedDate <= currentDate) {
      e.target.value = ""; // Reset the selected date
      notyf.open({
        type: "warning",
        message: "Please enter a valid date (e.g., tomorrow).",
      });
    } else {
      setAppointmentDate(selectedDate);
    }
  };

  const timeStartOptions = [
    { value: "09:00", label: "09:00" },
    { value: "09:40", label: "09:40" },
    { value: "10:20", label: "10:20" },
    { value: "11:00", label: "11:00" },
    { value: "11:40", label: "11:40" },
    { value: "13:00", label: "13:00" },
    { value: "13:40", label: "13:40" },
    { value: "14:20", label: "14:20" },
    { value: "15:00", label: "15:00" },
    { value: "15:40", label: "15:40" },
  ].filter((option) => option.value < appointmentDateTo);

  return (
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-[24px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <RxCross1
                className="text-black hover:text-gray-500 hover:cursor-pointer w-5 h-5"
                onClick={props.onClose}
              />
              <h3
                className="text-lg leading-6 font-medium text-gray-900 left-0 mr-8"
                id="modal-title"
              >
                Appointment
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="recipient-name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                    id="recipient-name"
                    value={appointmentTitle}
                    onChange={(e) => setAppointmentTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="location-select"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Location:
                  </label>
                  <input
                    type="text"
                    className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                    id="recipient-name"
                    value={appointmentTitle}
                    onChange={(e) => setAppointmentLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="recipient-name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Date:
                  </label>
                  <input
                    type="date"
                    className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                    id="recipient-name"
                    data-date-format="DD-YYYY-MM"
                    value={appointmentDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-flow-col gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="time-start-select"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Start time :
                    </label>
                    <select
                      id="time-start-select"
                      className="form-select mt-1 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                      value={appointmentDateFrom}
                      onChange={handleTimeStartChange}
                      disabled
                      required
                    >
                      <option value="">Select Start time</option>
                      {timeStartOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="time-end-select"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      End time :
                    </label>
                    <select
                      id="time-end-select"
                      className="form-select mt-1 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                      value={appointmentDateTo}
                      onChange={handleTimeEndChange}
                      required
                    >
                      <option value="">Select End time</option>
                      <option value="09:40">09:40</option>
                      <option value="10:20">10:20</option>
                      <option value="11:00">11:00</option>
                      <option value="11:40">11:40</option>
                      <option value="12:20">12:20</option>
                      <option value="13:40">13:40</option>
                      <option value="14:20">14:20</option>
                      <option value="15:00">15:00</option>
                      <option value="15:40">15:40</option>
                      <option value="16:20">16:20</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="bg-gradient-to-r from-blue-400 via-blue-500  to-blue-600 rounded-md text-white hover:bg-blue-600 focus:outline-none border rounded-[18px] px-5 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handlerSubmitCreate}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAppointment;
