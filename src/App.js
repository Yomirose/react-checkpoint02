import React from "react";
import Players from "./players";
import "./App.css"


function App() {
  return (
    <div className="App">
      <h1 style={{marginLeft: "10px"}}>Players page</h1>
      <div className="players-details">
        {Players.map((Player,i)=>{
        return <div key={i} className="payers">
          <img src={Player.imageUrl}  alt=""  />
          <p style={{
            fontSize: "30px",
            fontWeight: "600",
            marginLeft: "20px"
          }}>{Player.name}</p>
          <p style={{
            fontSize: "20px",
            fontWeight: "400",
            marginLeft: "20px",
            marginBottom:"20px"
          }}>{Player.team}</p>
          <p style={{fontSize: "20px",
            fontWeight: "400",
            marginLeft: "20px"
            }}>{Player.nationality}</p>
          <p style={{fontSize: "20px",
            fontWeight: "400",
            marginLeft: "20px"
            }}>{Player.jerseyNumber}</p>
          <p style={{fontSize: "25px",
            fontWeight: "400",
            marginLeft: "20px"
            }}>{Player.age}</p>
        </div>
        })}
      </div>
      
    </div>
  );
}

export default App;
