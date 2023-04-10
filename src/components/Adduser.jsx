import { useRef } from "react";
import "../styles/adduser.css";

const AddUser = () => {
  let name = useRef(null);
  let email = useRef(null);
  let contact = useRef(null);
  let submit = (e) => {
    e.preventDefault()
    
    let data={
      name: name.current.value,
      email: email.current.value,
      contact: contact.current.value,
    };
    fetch("",{
    method: "POST",
    headers: { "Content-Type": "application/jsOn" },
    body: JSON.stringify(data),
  });
  alert("poda punda");
  navigate("/");
    
  };

  return (
    <div className="user">
      <form action="" onSubmit={submit}>
        <p>Name</p>
        <input ref={name} type="name" placeholder="enter Name" />
        <p>Email</p>
        <input ref={email} type="email" placeholder="enter email" />
        <p>Contact</p>
        <input ref={contact} type="contact" placeholder="enter contact" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
