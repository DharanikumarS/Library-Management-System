import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Library Management System</h1>
      <Link to="/admin-Login">AdminLogin</Link>
      <Link to="user-login">UserLogin</Link>
    </div>
  );
};

export default LandingPage;
