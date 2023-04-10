import { Route, Routes } from "react-router-dom";
import AdminHome from "./Home";
import AdminBook from "./Booklist";
import AdminNav from "./Adminnavbar";
import AddBook from "./Addbook";
import AddUser from "./Adduser";
import Readbook from "./Readbook";
const AdminPortal = () => {
  return (
    <div className="adminPortal">
      <AdminNav />
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/book-list" element={<AdminBook />} />
        <Route path="/book-list/:id" element={<Readbook />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
};

export default AdminPortal;
