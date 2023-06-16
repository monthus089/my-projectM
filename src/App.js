import { Route, Routes } from "react-router-dom";
//login
import Login from "./components/Login";
// Admin Navbar
import MainAdminNavbar from "./components/MainAdminNavbar";
import AllProject from "./components/Admin/AllProject";
import AllProgress from "./components/Admin/AllProgress";
import AllReadProgress from "./components/Admin/AllReadProgress";
import Board from "./components/Admin/Board";
import Details from "./components/Admin/Details";
import Editing from "./components/Admin/Editing";
import RoleBoard from "./components/Admin/RoleBoard";
import AdminCreate from "./components/Admin/AdminCreate";
// Advisor Navbar && CA
import MainAdvisorNavbar from "./components/MainAdvisorNavbar";
import MainCaNavbar from "./components/MainCaNavbar";
import CAllProject from "./components/Advisor&Advisee/AllProject";
import CAllProgress from "./components/Advisor&Advisee/AllProgress";
import CAllReadProgress from "./components/Advisor&Advisee/AllReadProgress";
import MyProject from "./components/Advisor&Advisee/MyProject";
import MyDetails from "./components/Advisor&Advisee/MyDetails";
import MyEditing from "./components/Advisor&Advisee/MyEditing";
import Create from "./components/Advisor&Advisee/Create";
import MyProjectProgress from "./components/Advisor&Advisee/MyProjectProgress";
import ListProgress from "./components/Advisor&Advisee/ListProgress";
import ReadProgress from "./components/Advisor&Advisee/ReadProgress";
import Appointment from "./components/Advisor&Advisee/Appointment";
import BookingTime from "./components/Advisor&Advisee/BookingTime";
// Student Navbar
import MainStudentNavbar from "./components/MainStudentNavbar";
import JoinBoard from "./components/Student/JoinBoard";
import JoinDetails from "./components/Student/JoinDetails";
import JoinProgress from "./components/Student/JoinProgress";
import ProgressList from "./components/Student/ProgressList";
import CreateProgress from "./components/Student/CreateProgress";
import JoinAppointment from "./components/Student/JoinAppointment";
import ReadProgressStudent from "./components/Student/ReadProgressStudent";

import { useContext } from "react";
import AuthContext from "./components/Auth/AuthProvider";
function App() {
  //const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Admin" element={<MainAdminNavbar />}>
        <Route path="" element={<AllProject />} />
        <Route path="AllProject" element={<AllProject />}></Route>
        <Route
          path="AllProgress/:getProjectId"
          element={<AllProgress />}
        ></Route>
        <Route
          path="AllReadProgress/:getProjectProgressId"
          element={<AllReadProgress />}
        ></Route>
        <Route path="Board" element={<Board />}></Route>
        <Route path="AdminCreate" element={<AdminCreate />}></Route>
        <Route path="Details/:getProjectId" element={<Details />} />
        <Route path="Editing/:getProjectId" element={<Editing />} />
        <Route path="Role" element={<RoleBoard />} />
      </Route>
      <Route path="/Advisor" element={<MainAdvisorNavbar />}>
        <Route path="" element={<MyProject />} />
        <Route path="MyProject" element={<MyProject />} />
        <Route path="MyDetails/:getProjectId" element={<MyDetails />} />
        <Route path="MyEditing/:getProjectId" element={<MyEditing />} />
        <Route path="Create" element={<Create />} />
        <Route path="Progress" element={<MyProjectProgress />} />
        <Route path="ListProgress/:getProjectId" element={<ListProgress />} />
        <Route
          path="ReadProgress/:getProjectProgressId"
          element={<ReadProgress />}
        />
        {/* <Route path="Appoint" element={<Appointment />} />
        <Route path="BookingTime/:appointmentId" element={<BookingTime />} /> */}
      </Route>
      <Route path="/CAdvisor" element={<MainCaNavbar />}>
        <Route path="" element={<MyProject />} />
        <Route path="MyProject" element={<MyProject />} />
        <Route path="CAllProject" element={<CAllProject />}></Route>
        <Route
          path="CAllProgress/:getProjectId"
          element={<CAllProgress />}
        ></Route>
        <Route
          path="CAllReadProgress/:getProjectProgressId"
          element={<CAllReadProgress />}
        ></Route>
        <Route path="MyDetails/:getProjectId" element={<MyDetails />} />
        <Route path="MyEditing/:getProjectId" element={<MyEditing />} />
        <Route path="Create" element={<Create />} />
        <Route path="Progress" element={<MyProjectProgress />} />
        <Route path="ListProgress/:getProjectId" element={<ListProgress />} />
        <Route
          path="ReadProgress/:getProjectProgressId"
          element={<ReadProgress />}
        />
        <Route path="Appoint" element={<Appointment />} />
        <Route path="BookingTime/:appointmentId" element={<BookingTime />} />
      </Route>
      <Route path="/Student" element={<MainStudentNavbar />}>
        <Route path="" element={<JoinBoard />} />
        <Route path="JoinBoard" element={<JoinBoard />} />
        <Route path="JoinDetails/:getProjectId" element={<JoinDetails />} />
        <Route path="JoinProgress" element={<JoinProgress />} />
        <Route path="ProgressList/:getProjectId" element={<ProgressList />} />
        <Route
          path="CreateProgress/:getProjectId"
          element={<CreateProgress />}
        />
        <Route path="JoinAppointment" element={<JoinAppointment />} />
        <Route
          path="ReadProgressStudent/:getProjectProgressId"
          element={<ReadProgressStudent />}
        />
      </Route>
    </Routes>
  );
}

export default App;
