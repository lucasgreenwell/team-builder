import React from "react";
import styled from 'styled-components';

const Card = props => {
  const Helen = styled.h1`
  background: red;
  width: 30%;
  display: flex;
  `;
  return (
    <Helen>
      <h1>{props.name}</h1>
      <p>{props.role}</p>
      <p>{props.email}</p>
    </Helen>
  );
};

export default Card;
