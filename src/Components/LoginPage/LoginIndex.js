import "./login.css";
import LoginLeftContent from "./LoginLefContent";
import LoginRightContent from "./LoginRightContent";
import LoginYalla from "./LoginYalla";

function LoginIndex() {
  return (
    <div id="content-container">
      <div id="_bg__login"></div>

      <div id="login">
        <LoginLeftContent />
        <LoginRightContent />
        <LoginYalla />
      </div>
    </div>
  );
}

export default LoginIndex;
