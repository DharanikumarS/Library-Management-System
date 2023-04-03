import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-Login" element={<AdminLogin />} />
          <Route path="/user-Login" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
