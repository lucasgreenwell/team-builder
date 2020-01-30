import React from "react";
import styled from "styled-components";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CardFn = props => {
  // const Helen = styled.h1`
  // background: red;
  // width: 30%;
  // display: flex;
  // flex-flow: nowrap column;
  // align-items: center;
  // `;
  return (
    // <Jeff>
    //   <h1>{props.name}</h1>
    //   <p>{props.role}</p>
    //   <p>{props.email}</p>
    //  </Jeff>

    <div>
      <Card body>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.role}</CardSubtitle>
        <CardText>{props.email}</CardText>
        <Button>Edit</Button>
      </Card>
    </div>
  );
};

export default CardFn;
