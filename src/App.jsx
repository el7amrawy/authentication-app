import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import config from "./config";
// pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import User from "./pages/User";
// components
import Header from "./components/Header";
import ProtectedUser from "./components/ProtectedUser";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("authToken"),
    user: JSON.parse(sessionStorage.getItem("user")),
  });
  // console.log(userData);
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={<Navigate to={`user/${userData.user?.id}`} />}
          />
          <Route
            path="/register"
            element={<SignUp setUserData={setUserData} />}
          />
          <Route path="login" element={<Login setUserData={setUserData} />} />
          <Route
            path="user/:user_id"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={
                <ProtectedUser userData={userData}>
                  <User user={userData.user} />
                </ProtectedUser>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
