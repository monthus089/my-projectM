import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import MainAdminNavbar from "./components/MainAdminNavbar";
import Board from "./components/Admin/Board";
import Details from "./components/Admin/Details";
import Editing from "./components/Admin/Editing";
import RoleBoard from "./components/Admin/RoleBoard";


import MainAdvisorNavbar from "./components/MainAdvisorNavbar";
import Create from "./components/Advisor/Create";
import MyProject from "./components/Advisor/MyProject";
import Appointment from "./components/Advisor/Appointment";
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
        <Route path="Details" element={<Details />} />
        <Route path="Editing" element={<Editing />} />
        <Route path="Create" element={<Create />} />
        <Route path="Appoint" element={<Appointment />} />
      </Route>
    </Routes>
  );
}

export default App;
