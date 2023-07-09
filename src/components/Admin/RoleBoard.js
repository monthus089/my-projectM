import { useEffect, useState, useContext } from "react";
import jwtInterceptor from "../Auth/jwtInterceptor";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import AuthContext from "../Auth/AuthProvider";
import { notyf } from "../../js/Notyf";
import { BiSearch } from "react-icons/bi";

const RoleBoard = (props) => {
  const [MemberUsers, setMemberUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const [editIndex, setEditIndex] = useState(-1);
  const [editedFirstname, setEditedFirstname] = useState("");
  const [editedLastname, setEditedLastname] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMemberUserId, setSelectedMemberUserId] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = (memberUserId) => {
    setSelectedMemberUserId(memberUserId);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await jwtInterceptor.delete(
        `${process.env.REACT_APP_API}/MemberUser/${selectedMemberUserId}`
      );
      notyf.success("MemberUser deleted successfully");
    } catch (err) {
      console.log(err);
    }
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedFirstname(MemberUsers[index].firstname);
    setEditedLastname(MemberUsers[index].lastname);
  };
  const handleCancel = (index) => {
    setEditIndex(-1);
  };
  const fileReader = new FileReader();
  useEffect(() => {
    jwtInterceptor
      .get(`${process.env.REACT_APP_API}/MemberUser`)
      .then((response) => setMemberUsers(response?.data));

    jwtInterceptor
      .get(`${process.env.REACT_APP_API}/Role`)
      .then((response) => setRoles(response?.data));
  }, []);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (searchValue) {
      const encodedSearchValue = encodeURIComponent(searchValue);
      const response = await jwtInterceptor.get(
        `${process.env.REACT_APP_API}/MemberUser?searchMemberUser=${encodedSearchValue}`
      );
      setMemberUsers(response?.data);
    } else if (!searchValue) {
      jwtInterceptor
        .get(`${process.env.REACT_APP_API}/MemberUser`)
        .then((response) => setMemberUsers(response?.data));
    }
  };

  const handleSubmit = async (e, memberUserId) => {
    e.preventDefault();
    const payload = {
      memberUserId: memberUserId,
      firstname: editedFirstname,
      lastname: editedLastname,
    };
    try {
      await jwtInterceptor.put(
        `${process.env.REACT_APP_API}/MemberUser/${memberUserId}?roleId=${selectedRole}`,
        payload
      );
      notyf.success("Information has been updated.");
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 400) {
        notyf.error("This is your current role!");
      }
    }
  };

  const csvFileToArray = (string) => {
    const csvHeader = string
      .slice(0, string.indexOf("\n"))
      .split(",")
      .map((header) => header.trim()); // Trim header names to remove spaces
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.reduce((result, row) => {
      const values = row.split(",");
      if (values.some((value) => value.trim() !== "")) {
        const obj = csvHeader.reduce((object, header, index) => {
          const value = values[index];
          if (typeof value === "string") {
            object[header] = value.replace(/\r/g, "").trim();
          } else {
            object[header] = "";
          }
          return object;
        }, {});
        result.push(obj);
      }
      return result;
    }, []);

    setArray(array);
  };

  const handleOnChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      setIsLoading(true); // Set isLoading to true

      fileReader.onload = async function (event) {
        const text = event.target.result;
        csvFileToArray(text);

        if (array === null || array.length === 0) {
          notyf.error("Unable to read value");
          setIsLoading(false);
          return;
        }

        try {
          await jwtInterceptor.post(
            `${process.env.REACT_APP_API}/MemberUser`,
            array
          );
          notyf.success("Information added successfully!");
        } catch (err) {
          console.log(err);
          if (err?.response?.status === 404) {
            notyf.error("No information to add");
          } else if (err?.response?.status === 500) {
            notyf.error("Incomplete data entry");
          } else if (err?.response?.status === 409) {
            notyf.error("Email already exists");
          }
        }

        setIsLoading(false); // Set isLoading to false
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Users Broad</h5>
      </div>
      <div className="flex flex-row">
        <form
          id="search-form"
          className="flex ml-[100px] mt-1 duration-300 w-[330px]"
          onSubmit={handleSearchClick}
        >
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearch className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full pl-10 p-2.5 border-gray-100 bg-gray-100 border text-gray-900 text-sm rounded-[18px] focus:outline-none focus:ring-transparent"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white text-sm font-bold py-1 px-4 ml-2 rounded-[18px]"
          >
            Search
          </button>
        </form>
        <form
          className="flex flex-row items-start justify-start ml-[690px]"
          onSubmit={handleOnSubmit}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-[200px] h-12 border-2 border-r-0 border-gray-300 border-dashed rounded-l-[25px] cursor-pointer bg-gray-50"
          >
            <div className="flex flex-row items-center justify-center pt-8 pb-6">
              <p className="mb-2 text-xs text-gray-500 justify-center">
                IMPORT .CSV
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept=".csv"
              onChange={handleOnChange}
            />
          </label>
          <button
            type="submit"
            className={`flex flex-col items-center justify-center w-[100px] h-12 border-2 border-gray-300  rounded-r-[25px] cursor-pointer ${isLoading? "bg-blue-500" : "bg-gray-200"} hover:bg-gray-300`}
          >
            <div className="flex flex-row items-center justify-center pt-8 pb-6">
              <p className="mb-2 mr-2 text-sm text-black justify-center">
                <AiOutlineCloudUpload className="w-4 h-4 text-black" />
              </p>
            </div>
          </button>
        </form>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-2 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="pr-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {MemberUsers.map((MemberUser, index) =>
              MemberUser.memberUserId !== user.nameid ? (
                <tr
                  className="bg-white border-b "
                  key={MemberUser.memberUserId}
                >
                  <th scope="row" className="px-6 py-4 ">
                    {index + 1}
                  </th>
                  <th scope="row" className="px-6 py-4 ">
                    {MemberUser.memberUserEmail}
                  </th>
                  <td className="pl-6 py-4 flex items-center justify-center w-40">
                    {editIndex === index ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={editedFirstname}
                          onChange={(e) => setEditedFirstname(e.target.value)}
                          className="border border-gray-300 text-sm w-[110px] px-2 py-3 rounded-[18px] focus:border-transparent"
                          placeholder="First name"
                        />
                        <input
                          type="text"
                          value={editedLastname}
                          onChange={(e) => setEditedLastname(e.target.value)}
                          className="border border-gray-300 text-sm w-[110px] px-2 py-3 rounded-[18px] focus:border-transparent ml-2"
                          placeholder="Last name"
                        />
                      </div>
                    ) : editIndex === -1 ? (
                      <div className="flex items-center">
                        <div className="text-sm pt-3.5 px-2 focus:border-transparent">
                          {MemberUser.firstname}
                        </div>
                        <div className="text-sm pt-3.5 px-2 focus:border-transparent ml-2">
                          {MemberUser.lastname}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <div className="text-sm pt-3.5 px-2 focus:border-transparent">
                          {MemberUser.firstname}
                        </div>
                        <div className="text-sm pt-3.5 px-2 focus:border-transparent ml-2">
                          {MemberUser.lastname}
                        </div>
                      </div>
                    )}
                  </td>

                  <td className="pr-4">
                    {editIndex === index ? (
                      <GiCancel
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => handleCancel(index)}
                      />
                    ) : (
                      <FiEdit
                        className="hover:text-green-400 cursor-pointer"
                        onClick={() => handleEdit(index)}
                      />
                    )}
                  </td>
                  <td className="px-2 py-4 w-[190px]">
                    <select
                      id="role"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-[18px] block w-full py-2.5 px-2 focus:border-transparent"
                      defaultValue={MemberUser.role?.roleName} // update defaultValue
                      onChange={handleRoleChange}
                    >
                      <option disabled hidden>
                        {MemberUser.role.roleName}
                      </option>
                      {roles.map((role) =>
                        !MemberUser.role.roleId ||
                        (MemberUser.role.roleId !== role.roleId &&
                          role.roleId !== "PM00") ? (
                          <option key={role.roleId} value={role.roleId}>
                            {role.roleName}
                          </option>
                        ) : null
                      )}
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2 focus:outline-none"
                      onClick={(e) => handleSubmit(e, MemberUser.memberUserId)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none"
                      onClick={() => handleDelete(MemberUser.memberUserId)}
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
                          <h1>Delete User</h1>
                          <p className="text-center p-4 mt-4">
                            Are you sure you want to delete a User?
                          </p>
                          <div className="mt-[30px] mx-[40px] grid grid-cols-2 gap-x-8">
                            <button
                              type="button"
                              onClick={closeModal}
                              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none  font-medium rounded-[18px] text-sm px-5 py-2.5 text-center mb-2 "
                            >
                              No, Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleDeleteConfirm(selectedMemberUserId)
                              }
                              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
                            >
                              Yes, Delete
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RoleBoard;
