import React, { useState } from "react";
import "./App.css";
import list from "./data";
import Card from "./components/cards";
import Form from "./components/Form"
import CardHolder from "./components/CardHolder"

function App() {
  const [team, setTeam] = useState(list);

  console.log();
  return (
    <div className="App">
      <header className="App-header"></header>
        
       
          <CardHolder>
            <div>
              {team.map(ele => {
                return <Card name={ele.name} role={ele.role} email={ele.email} />;
              })}
            </div>
          </CardHolder>
        <Form setTeam={setTeam} team={team}/>
        <CardHolder/>

    </div>
  );
}

export default App;
