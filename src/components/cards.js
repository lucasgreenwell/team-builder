import React from "react";

const Card = props => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.role}</p>
      <p>{props.email}</p>
    </>
  );
};

export default Card;
