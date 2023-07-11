import { useContext, useEffect, useState } from "react";
import AuthContext from "./Auth/AuthProvider";
import jwtInterceptor from "./Auth/jwtInterceptor";
import notyf from "../js/Notyf";
import { RxCross1 } from "react-icons/rx";

const ChangePass = (props) => {
  const { user } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  
  const handlerSubmitChange = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmNewPassword) {
      notyf.error("newPasswords do not match");
      return;
    }

    try {
      await jwtInterceptor.patch(`${process.env.REACT_APP_API}/MemberUser/${user.nameid}?currentPassword=${currentPassword}&newPassword=${newPassword}`);
      notyf.success("The password has been changed successfully.");
      props.onClose();
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 401) {
        notyf.error("The current password is incorrect.");
      } 
    }
  };

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

          <div className="inline-block align-bottom bg-white rounded-[10px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <RxCross1
                className="text-black hover:text-gray-500 hover:cursor-pointer w-5 h-5"
                onClick={props.onClose}
              />
              <h3
                className="text-lg leading-6 font-medium text-gray-900 left-0 mr-8"
                id="modal-title"
              >
                Change Password
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="recipient-name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Current Password:
                  </label>
                  <input
                    type="password"
                    className="form-input mt-1 pl-4 block w-full h-8 rounded-[10px] border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                    id="recipient-name"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
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
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="bg-gradient-to-r from-blue-400 via-blue-500  to-blue-600 rounded-md text-white hover:bg-blue-600 focus:outline-none border rounded-[18px] px-5 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handlerSubmitChange}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
