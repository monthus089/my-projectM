import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";
import { AiOutlineCloudUpload } from "react-icons/ai";
import AuthContext from "../Auth/AuthProvider";
import { notyf } from "../../js/Notyf";

const RoleBoard = (props) => {
  let navigate = useNavigate();
  const [MemberUsers, setMemberUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const fileReader = new FileReader();
  useEffect(() => {
    jwtInterceptor
      .get(`${process.env.REACT_APP_API}/MemberUser`)
      .then((response) => setMemberUsers(response?.data));

    jwtInterceptor
      .get(`${process.env.REACT_APP_API}/Role`)
      .then((response) => setRoles(response?.data));
  }, []);

  useEffect(() => {}, [array]);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmitRole = async (e, memberUserId) => {
    e.preventDefault();
    try {
      await jwtInterceptor.put(
        `${process.env.REACT_APP_API}/MemberUser/${memberUserId}?roleId=${selectedRole}`
      );
      notyf.success("Successful role change");
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
          notyf.error("Please press again");
          setIsLoading(false); // Set isLoading to false
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
      <form
        className="flex flex-row items-center justify-center ml-[600px]"
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
          className="flex flex-col items-center justify-center w-[100px] h-12 border-2 border-gray-300  rounded-r-[25px] cursor-pointer bg-gray-200 hover:bg-gray-300"
        >
          <div className="flex flex-row items-center justify-center pt-8 pb-6">
            <p className="mb-2 mr-2 text-sm text-black justify-center">
              <AiOutlineCloudUpload className="w-4 h-4 text-black" />
            </p>
          </div>
        </button>
      </form>

      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-1 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100 ">
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
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {MemberUsers.filter((MemberUsers) => {
              return props.searchValue === ""
                ? MemberUsers
                : MemberUsers.memberUserEmail.includes(props.searchValue);
            }).map((MemberUser, index) =>
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
                  <td className="px-6 py-4">
                    {MemberUser.firstname} {MemberUser.lastname}
                  </td>

                  <td className="px-6 py-4">
                    <select
                      id="role"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-[18px] block w-full py-2.5 px-2 dark:bg-white focus:border-transparent dark:text-gray-400 "
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
                      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none"
                      onClick={(e) =>
                        handleSubmitRole(e, MemberUser.memberUserId)
                      }
                    >
                      Change
                    </button>
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
