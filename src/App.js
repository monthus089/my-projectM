import {Route, Routes } from "react-router-dom";
import MainAdminNavbar from "./components/MainAdminNavbar";
import Board from "./components/Admin/Board";
import Details from "./components/Admin/Details";
import Editing from "./components/Admin/Editing";
import RoleBoard from "./components/Admin/RoleBoard";
import Login from "./components/Login";

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
    </Routes>
  );
}

export default App;
