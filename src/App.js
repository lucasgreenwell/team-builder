import React, { useState } from "react";
import "./App.css";
import list from "./data";
import Card from "./components/cards";
import Form from "./components/Form"
// import CardHolder from "./components/CardHolder"
import styled from 'styled-components';

function App() {
  const [team, setTeam] = useState(list);

  const CardPlace = styled.div`
      display: flex;
      justify-content: space-around;
  `;

  console.log();
  return (
    <div className="App">
      <header className="App-header"></header>
        
       
          <CardPlace className ="card-place">
            {team.map(ele => {
              return <Card name={ele.name} role={ele.role} email={ele.email} />;
            })}
          </CardPlace>
        <Form setTeam={setTeam} team={team}/>


    </div>
  );
}

export default App;
