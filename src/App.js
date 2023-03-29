import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import MainAdminNavbar from "./components/MainAdminNavbar";
import Board from "./components/Admin/Board";
import Details from "./components/Admin/Details";
import Editing from "./components/Admin/Editing";
import RoleBoard from "./components/Admin/RoleBoard";


import MainAdvisorNavbar from "./components/MainAdvisorNavbar";
import MyProject from "./components/Advisor&Advisee/MyProject";
import MyDetails from "./components/Advisor&Advisee/MyDetails";
import MyEditing from "./components/Advisor&Advisee/MyEditing";
import Create from "./components/Advisor&Advisee/Create";
import Progress from "./components/Advisor&Advisee/Progress";
import Appointment from "./components/Advisor&Advisee/Appointment";


import MainAdviseeNavbar from "./components/MainAdviseeNavbar";
function App() {
  // const token = localStorage.getItem("accesstoken");
  // if (!token) {
  //   return <Login />;
  // }
  return (
    <Routes>
      <Route path="/" element={<MainAdminNavbar />}>
        <Route path="" element={<Board />} />
        <Route path="Board" element={<Board />} />
        <Route path="Details" element={<Details />} />
        <Route path="Editing" element={<Editing />} />
        <Route path="Role" element={<RoleBoard />} />
      </Route>
      <Route path="/Advisor" element={<MainAdvisorNavbar />}>
        <Route path="" element={<MyProject />} />
        <Route path="MyProject" element={<MyProject />} />
        <Route path="MyDetails" element={<MyDetails />} />
        <Route path="MyEditing" element={<MyEditing />} />
        <Route path="Create" element={<Create />} />
        <Route path="Progress" element={<Progress />} />
        <Route path="Appoint" element={<Appointment />} />
      </Route>
      <Route path="/Advisee" element={<MainAdviseeNavbar />}>
        <Route path="" element={<MyProject />} />
        <Route path="MyProject" element={<MyProject />} />
        <Route path="MyDetails" element={<MyDetails />} />
        <Route path="MyEditing" element={<MyEditing />} />
        <Route path="Create" element={<Create />} />
        <Route path="Progress" element={<Progress />} />
        <Route path="Appoint" element={<Appointment />} />
      </Route>
    </Routes>
  );
}

export default App;
