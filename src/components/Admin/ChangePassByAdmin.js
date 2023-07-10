import { useState } from "react";
// import AuthContext from "./Auth/AuthProvider";
// import jwtInterceptor from "./Auth/jwtInterceptor";
// import notyf from "../js/Notyf";
import { RxCross1 } from "react-icons/rx";
import { TbArrowsExchange } from "react-icons/tb";

const ChangePassByAdmin = (props) => {
  const [pagestatus, setPagestatus] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  console.log("UserID" + props.userID);
  console.log("pagestatus" + pagestatus);
  return (
    <>
      {pagestatus ? (
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

            <div className="inline-block w-[512px] h-[318px] align-bottom bg-white rounded-[18px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex ">
                <TbArrowsExchange
                  className="w-5 h-5 mr-10 hover:text-blue-500 hover:cursor-pointer "
                  onClick={() => setPagestatus((prev) => !prev)}
                />
                <div className="sm:flex ml-[200px]">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900 left-0 mr-8"
                    id="modal-title"
                  >
                    Change Password
                  </h3>
                  <div className="flex items-center">
                    <RxCross1
                      className="text-black hover:text-gray-500 hover:cursor-pointer w-5 h-5"
                      onClick={props.onClose}
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 sm:p-6">
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="recipient-name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      New Password:
                    </label>
                    <input
                      type="password"
                      className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                      id="recipient-name"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="recipient-name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Confirm New Password:
                    </label>
                    <input
                      type="password"
                      className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                      id="recipient-name"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="bg-gradient-to-r from-blue-400 via-blue-500  to-blue-600 rounded-md text-white hover:bg-blue-600 focus:outline-none border rounded-[18px] px-5 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
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

            <div className="inline-block w-[512px] h-[318px] align-bottom bg-white rounded-[18px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex ">
                <TbArrowsExchange
                  className={`w-5 h-5 mr-10 hover:text-red-500 hover:cursor-pointer `}
                  onClick={() => setPagestatus((prev) => !prev)}
                />
                <div className="sm:flex ml-[200px] sm:flex-row-reverse">
                  <div className="flex items-center">
                    <RxCross1
                      className="text-black hover:text-gray-500 hover:cursor-pointer w-5 h-5"
                      onClick={props.onClose}
                    />
                  </div>
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900 left-0 mr-16"
                    id="modal-title"
                  >
                    Change Name
                  </h3>
                </div>
              </div>

              <div className="px-4 py-5 sm:p-6">
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="recipient-name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      First Name:
                    </label>
                    <input
                      type="password"
                      className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                      id="recipient-name"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="recipient-name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Last Name:
                    </label>
                    <input
                      type="password"
                      className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                      id="recipient-name"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="bg-gradient-to-r from-emerald-400 via-emerald-500  to-emerald-600 rounded-md text-white hover:bg-blue-600 focus:outline-none border rounded-[18px] px-5 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Change Name
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassByAdmin;
