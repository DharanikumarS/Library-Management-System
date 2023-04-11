import { useRef } from "react";
import "../styles/addbook.css";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  let title = useRef(null);
  let author = useRef(null);
  let gener = useRef(null);
  let thumbnail = useRef(null);
  let navigate = useNavigate();
  let prevent = (e) => {
    e.preventDefault();

    let data = {
      title: title.current.value,
      Author: author.current.value,
      gener: gener.current.value,
      thumbnail: thumbnail.current.value,
    };
    fetch("http://localhost:1000/books", {
      method: "POST",
      headers: { "Content-Type": "application/jsOn" },
      body: JSON.stringify(data),
    });
    alert("poda panda");
    navigate("/");
  };

  return (
    <div className="book">
      <form action="" onSubmit={prevent}>
        <p>Book Title:</p>
        <input ref={title} type="title" placeholder="enter title" />
        <p>Author Name</p>
        <input ref={author} type="Author" placeholder="enter Author" />
        <p>Gener</p>
        <input ref={gener} type="Gener" placeholder="enter gener" />
        <p>Thumbnail URL</p>
        <input
          ref={thumbnail}
          type="Thumbnail"
          placeholder="enter thumbnail url"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
