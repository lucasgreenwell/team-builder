import React, { useState } from "react";
// import team from "../data";

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  return (
    <form onSubmit={e => {
        console.log(name, email, role)
        e.preventDefault();
        props.setTeam([...props.team, {
            name: name,
            email: email,
            role: role
        }])
        console.log(props.team);
    }}>
      <label>Name:  </label>
      <input
        type="text"
        onChange={e => {
          setName(e.target.value);
        //   console.log(name);
        }}
      />
      <br />

      <label>Email: </label>
      <input
        type="text"
        onChange={e => {
          setEmail(e.target.value);
        //   console.log(email);
        }}
      />
      <br />

      <label>Role:  </label>
      <input
        type="text"
        onChange={e => {
          setRole(e.target.value);
        //   console.log(role);
        }}
      />
      <br />

      <button>Submit I hope</button>
    </form>
  );
};

export default Form;
