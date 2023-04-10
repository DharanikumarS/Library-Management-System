import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AdminPortal from "./components/AdminPortal";
import UserPortal from "./components/UserPortal";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-Login" element={<AdminLogin />} />
          <Route path="/user-Login" element={<UserLogin />} />
          <Route path="/admin/*" element={<AdminPortal />} />
          <Route path="/user/*" element={<UserPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
