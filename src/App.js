import React, { useState } from "react";
import "./App.css";
import list from "./data";
import Card from "./components/cards";
import Form from "./components/Form"

function App() {
  const [team, setTeam] = useState(list);

  console.log();
  return (
    <div className="App">
      <header className="App-header"></header>

      <body>
        {team.map(ele => {
          return <Card name={ele.name} role={ele.role} email={ele.email} />;
        })}
        <Form/>
      
      </body>

    </div>
  );
}

export default App;
