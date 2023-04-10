import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../styles/Userlogin.css";

const UserLogin = () => {
  let email = useRef(null);
  let password = useRef(null);
  let navigate = useNavigate();

  let submit = () => {
    if (
      email.current.value == "admin@gmail.com" &&
      password.current.value == 12345
    ) {
      navigate("/user");
    } else {
      alert("Inavlid Credential");
    }
  };

  return (
    <div className="admin">
      <h1>Admin Login</h1>
      <div className="loginform">
        <form action="" onSubmit={submit}>
          <div className="email">
            <input type="text" ref={email} placeholder="Enter your Email" />
          </div>
          <div className="password">
            <input
              type="password"
              ref={password}
              placeholder="Enter your password"
            />
          </div>
          <br />
          <div className="btn">
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
