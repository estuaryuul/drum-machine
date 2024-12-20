import "./App.css";
import DrumPads from "./drumPads";
import React, { useState } from "react";

function App() {
  const [soundPlayed, setSoundPlayed] = useState("");

  const handleDisplay = (id) => {
    setSoundPlayed(id);
  };

  return (
    <div className="App" id="drum-machine">
      <DrumPads soundClip={handleDisplay} />
      <div className="panel">
        <div id="display">{soundPlayed}</div>
      </div>
    </div>
  );
}

export default App;
