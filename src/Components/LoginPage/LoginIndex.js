import "./login.css";
import LoginLeftContent from "./LoginLefContent";
import LoginRightContent from "./LoginRightContent";
import LoginYalla from "./LoginYalla";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginRightRegister from "./LoginRightRegister";

const LoginIndex = () => {
  return (
    <Router>
      <div id="content-container">
        <div id="_bg__login"></div>
        <div id="login">
          <LoginLeftContent />
          <Routes>
            <Route path="/" element={<LoginRightContent />} />
            <Route path="/register" element={<LoginRightRegister />} />
          </Routes>
          <LoginYalla />
        </div>
      </div>
    </Router>
  );
};

export default LoginIndex;
