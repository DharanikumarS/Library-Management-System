import { useState, useEffect } from "react";
import "../styles/booklist.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Booklist = () => {
  let [book, setbook] = useState([]);
  let location = useLocation();
  let navigate = useNavigate();
  const readbook = (id) => {
    if (location.pathname == "/admin/book-list") {
      navigate(`/admin/book-list/${id}`);
    } else {
      navigate(`/user/book-list/${id}`);
    }
  };

  useEffect(() => {
    let fetchdata = async () => {
      let response = await (await fetch(" http://localhost:1000/books")).json();
      setbook(response);
    };

    fetchdata();
  }, [book]);
  const deletebook = (id) => {
    fetch(` http://localhost:1000/books/${id}`, {
      method: `DELETE`,
    });
  };
  return (
    <div className="booklist">
      {book.map((data) => (
        <div className="map">
          <div className="list">
            <img src={data.imageLink} alt="" height="250px" width="250px" />
            <h4>Book Title:{data.title}</h4>
            <h4>Author:{data.author}</h4>
            <h4>Pages:{data.pages}</h4>
            <h4>Years:{data.year}</h4>
            <button onClick={() => readbook(data.id)}>Read Book</button>
            {location.pathname == "/admin/book-list" && (
              <button onClick={() => deletebook(data.id)}>Delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booklist;
