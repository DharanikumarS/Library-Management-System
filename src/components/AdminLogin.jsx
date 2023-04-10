import { useRef } from "react";
import "../styles/Adminlogin.css";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  let email = useRef(null);
  let password = useRef(null);
  let navigate = useNavigate();

  let adminLogin = () => {
    if (
      email.current.value == "admin@gmail.com" &&
      password.current.value == 12345
    ) {
      navigate("/admin");
    } else {
      alert("Inavlid Credential");
    }
  };
  return (
    <div className="full">
      <div className="fullimg">
        <div className="admins">
          <h1>Admin Login</h1>
          <form action="" onSubmit={adminLogin}>
            <div className="loginform">
              <div className="email">
                <input ref={email} type="email" placeholder="Enter email" />
              </div>
              <div className="pass">
                <input
                  ref={password}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="btn">
                <button>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
