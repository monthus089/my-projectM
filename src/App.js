import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// Admin Navbar
import MainAdminNavbar from "./components/MainAdminNavbar";
import Board from "./components/Admin/Board";
import Details from "./components/Admin/Details";
import Editing from "./components/Admin/Editing";
import RoleBoard from "./components/Admin/RoleBoard";
// Advisor Navbar
import MainAdvisorNavbar from "./components/MainAdvisorNavbar";
import MyProject from "./components/Advisor&Advisee/MyProject";
import MyDetails from "./components/Advisor&Advisee/MyDetails";
import MyEditing from "./components/Advisor&Advisee/MyEditing";
import Create from "./components/Advisor&Advisee/Create";
import Progress from "./components/Advisor&Advisee/Progress";
import Appointment from "./components/Advisor&Advisee/Appointment";
// Student Navbar
import MainStudentNavbar from "./components/MainStudentNavbar";
import JoinBoard from "./components/Student/JoinBoard";
import JoinDetails from "./components/Student/JoinDetails";
import JoinProgress from "./components/Student/JoinProgress";
import CreateProgress from "./components/Student/CreateProgress";
import JoinApppointment from "./components/Student/JoinApppointment";
function App() {
  // const token = localStorage.getItem("accesstoken");
  // if (!token) {
  //   return <Login />;
  // }
  return (
    <Routes>
      <Route path="/Admin" element={<MainAdminNavbar />}>
        <Route path="" element={<Board />} />
        <Route path="Board" element={<Board />}></Route>
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
      <Route path="/Student" element={<MainStudentNavbar />}>
        <Route path="" element={<JoinBoard />} />
        <Route path="JoinBoard" element={<JoinBoard />} />
        <Route path="JoinDetails" element={<JoinDetails />} />
        <Route path="JoinProgress" element={<JoinProgress />} />
        <Route path="CreateProgress" element={<CreateProgress/>}/>
        <Route path="JoinApppointment" element={<JoinApppointment />} />
      </Route>
    </Routes>
  );
}

export default App;
