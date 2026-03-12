import React, { useState } from "react";
import "./App.css";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <div className={`app ${mode}`}>
      <h1>Kanban Board</h1>
      <button onClick={toggleMode}>
        Change Mode
      </button>
      <p>Current Mode: {mode}</p>
    </div>
  );
}
export default App;