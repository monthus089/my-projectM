import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";

const BookingTime = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    jwtInterceptor
      .get(`${process.env.REACT_APP_API}/Appointment/${appointmentId}`)
      .then((response) => setAppointment(response?.data));
  }, []);

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>BookingTime</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Project Group
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time Stamp
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {appointment.appointmentReserves &&
              appointment.appointmentReserves.map((reserve, index) => (
                <tr className="bg-white border-b" key={index}>
                  <th scope="row" className="px-6 py-4">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{reserve.project.projectName}</td>
                  <td className="px-6 py-4">{appointment.appointmentDate}</td>
                  <td className="px-6 py-4">{reserve.reserveTime}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BookingTime;
