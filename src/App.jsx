import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import config from "./config";
// pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import User from "./pages/User";
// components
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route
            path=":user"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
