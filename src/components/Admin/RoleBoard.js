import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtInterceptor from "../Auth/jwtInterceptor";

const Broad = (props) => {
  let navigate = useNavigate();
  const [MemberUsers, setMemberUsers] = useState([]);
  const [roles, setRoles] = useState([]);


  useEffect(() => {
    
    jwtInterceptor.get("https://localhost:7120/api/MemberUser").then((response) => setMemberUsers(response?.data));
  }, []);
    console.log(MemberUsers);

    useEffect(() => {
    
      jwtInterceptor.get("https://localhost:7120/api/Role").then((response) => setRoles(response?.data));
    }, []);
      console.log(roles);

    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    }
    const handleSubmitRole = async (e, memberUserId) => {
      e.preventDefault();
      try {
        await jwtInterceptor.put(`https://localhost:7120/api/MemberUser/${memberUserId}?roleId=${selectedRole}`);
      } catch (error) {
        console.log(error);
        if(error?.response?.status === 400){
            alert("This is your current role!");
        }     
      }
    }
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Users Broad</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-sm font-bold text-black uppercase bg-gray-50 dark:bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
              Email
              </th>
              <th scope="col" className="px-6 py-3">
              Name
              </th>
              <th scope="col" className="px-6 py-3">
              Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">{
            MemberUsers.map(MemberUser => (
              <tr className="bg-white border-b " key={MemberUser.memberUserId}>
              <th scope="row" className="px-6 py-4 ">
                {MemberUser.memberUserEmail}
              </th>
              <td className="px-6 py-4">{MemberUser.fristname} {MemberUser.lastname}</td>
              <td className="px-6 py-4">{MemberUser.phoneNumber}</td>
              <td className="px-6 py-4">
              <select
                  id="role"
                  className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-[18px] block w-full py-2.5 px-2 dark:bg-white focus:outline-none dark:text-gray-400 "
                  defaultValue={MemberUser.role?.roleName} // update defaultValue
                  onChange={handleRoleChange}
                  >
                    <option>{MemberUser.role.roleName}</option>
                    {roles.map(role => (
                    <option key={role.roleId} value={role.roleId}>
                    {role.roleName}
                    </option>
                  ))}
                </select>

              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-[18px] text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none"
                  onClick={(e) => handleSubmitRole(e, MemberUser.memberUserId)}
                >
                  Change
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Broad;
