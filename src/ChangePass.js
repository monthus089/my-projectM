import { useState } from "react";

const ChangePass = (props) => {
  const [isOpenPass, setIsOpenPass] = useState(false);
  return (
    <>
      {!isOpenPass ? (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="bg-red-500 rounded-md text-white hover:bg-red-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm border rounded-[15px] px-5 py-2.5 "
                  data-dismiss="modal"
                  onClick={() => setIsOpenPass((prev) => !prev)}
                >
                  Close
                </button>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  New Password
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
                      type="text"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      id="recipient-name"
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
                      type="text"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      id="recipient-name"
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
                      type="text"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="bg-blue-500 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ChangePass;
