import { Routes, Route, BrowserRouter } from "react-router-dom";
import config from "./config";
// pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
