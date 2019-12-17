import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        onChange={e => {
          setName(e.target.value);
        //   console.log(name);
        }}
      />
      <br />

      <label>Email</label>
      <input
        type="text"
        onChange={e => {
          setEmail(e.target.value);
        //   console.log(email);
        }}
      />
      <br />

      <label>Role</label>
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
