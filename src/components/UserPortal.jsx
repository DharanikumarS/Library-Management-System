import { Route, Routes } from "react-router-dom";
import Adminhome from "./Home";
import Booklist from "./Booklist";
import Usernavbar from "./Usernavbar";
import Readbook from "./Readbook";

const UserPortal = () => {
  return (
    <div className="userportal">
      <Usernavbar />
      <Routes>
        <Route path="/" element={<Adminhome />} />
        <Route path="/book-list" element={<Booklist />} />
        <Route path="/book=list/:id" element={<Readbook />} />
        <Route />
      </Routes>
    </div>
  );
};

export default UserPortal;
