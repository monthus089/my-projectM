import { useContext, useEffect, useState } from "react";
import AuthContext from "./Auth/AuthProvider";
import jwtInterceptor from "./Auth/jwtInterceptor";
import notyf from "../js/Notyf";

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
      props.onClose(); // Close the UI pop-up
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
              <button
                type="button"
                className="text-white hover:bg-red-600  bg-gradient-to-r from-red-400 via-red-500 to-red-600 focus:outline-none border rounded-[10px] px-1 py-1 sm:ml-3 sm:w-auto sm:text-sm"
                data-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
              <h3
                className="text-lg leading-6 font-medium text-gray-900 left-0"
                id="modal-title"
              >
                Cancel
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
                    className="form-input mt-1 block w-full rounded-[10px] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                    className="form-input mt-1 block w-full rounded-[10px] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                    className="form-input mt-1 block w-full rounded-[10px] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                className="bg-gradient-to-r from-blue-400 via-blue-500  to-blue-600 rounded-md text-white hover:bg-blue-600 focus:outline-none border rounded-[10px] px-2 py-2 sm:ml-3 sm:w-auto sm:text-sm"
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
