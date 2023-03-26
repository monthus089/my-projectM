import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import MainAdminNavbar from "./components/MainAdminNavbar";
import Board from "./components/Admin/Board";
import Details from "./components/Admin/Details";
import Editing from "./components/Admin/Editing";
import RoleBoard from "./components/Admin/RoleBoard";
import Appointment from "./components/Admin/Appointment";

import MainAdvisorNavbar from "./components/MainAdvisorNavbar";

function App() {
  // const token = localStorage.getItem("accesstoken");
  // if (!token) {
  //   return <Login />;
  // }
  return (
    <Routes>
      <Route path="/"  element={<MainAdminNavbar />} >
        <Route path="" element={<Board />} />
        <Route path="Board" element={<Board />} />
        <Route path="Details" element={<Details />} />
        <Route path="Editing" element={<Editing />} />
        <Route path="Role" element={<RoleBoard />} />
        <Route path="Appoint" element={<Appointment />} />
      </Route>
      <Route path="/Advisor" element={<MainAdvisorNavbar />} >
        <Route path="" element={<Board />} />
      </Route>
    </Routes>
  );
}

export default App;
