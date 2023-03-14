import AdminApp from './components/Admin/AdminApp';
import Login from "./components/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const token = localStorage.getItem("accesstoken");
  if (!token) {
    return <Login />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <AdminApp />
          </Route>
          <Route path="/adminapp">
            <AdminApp />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
