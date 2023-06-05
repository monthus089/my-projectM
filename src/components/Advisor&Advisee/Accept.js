import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Accept = (props) => {
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
          <div className="inline-block h-[400px] align-bottom bg-white rounded-[24px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <RxCross1
                className="text-black hover:text-gray-500 hover:cursor-pointer w-5 h-5"
                onClick={props.onClose}
              />
              <h3
                className="text-lg leading-6 font-medium text-gray-900 left-0 mr-8"
                id="modal-title"
              >
                Accepts
              </h3>
            </div>
            <div className="px-4">
              <div className="max-h-[320px] overflow-y-scroll scrollbar-hide">
                <table className="w-full text-sm text-center text-gray-500">
                  <tbody className="">
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 text-lg"
                      >
                        1
                      </th>
                      <td className="px-6 py-4 w-[290px] text-lg block overflow-hidden text-left whitespace-nowrap">
                      yoda romata
                      </td>
                      <td className="px-6 py-4 text-center">
                        <BsCheck2Circle className="text-green-400 hover:text-green-500 hover:cursor-pointer w-5 h-5" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <MdOutlineCancel className="text-red-400 hover:text-red-500 hover:cursor-pointer w-5 h-5" />
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accept;
