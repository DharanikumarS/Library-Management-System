import { useRef } from "react";
import "../styles/addbook.css";
const AddBook = () => {
  let title = useRef(null);
  let author = useRef(null);
  let gener = useRef(null);
  let thumbnail = useRef(null);
  let submit=(e)=>{
    e.preventDefault()
  }
  let data={
    title:title.current.value,
    Author:author.current.value,
    gener:gener.current.value,
    thumbnail


  }

  return (
    <div className="book">
      <form action="" onSubmit={submit}>
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
