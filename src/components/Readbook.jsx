import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Readbook = () => {
  let [books, setbooks] = useState("");
  let params = useParams();
  useEffect(() => {
    let fetchdata = async () => {
      let response = await fetch(`http://localhost:1000/books/${params.id}`);
      let data = await response.json();
      setbooks(data);
    };
    fetchdata();
  });
  return (
    <div className="readbook">
      <p>ID:{books.id}</p>
      <h1>BookTitle:{books.title}</h1>
      <h2>BookDescription:</h2>
      <p>{books.discription}</p>
    </div>
  );
};

export default Readbook;
