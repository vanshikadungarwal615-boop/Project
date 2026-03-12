import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (

    <div className={darkMode ? "app dark" : "app light"}>

      <h1>Kanban Task Board</h1>

      <button
        className="toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <Board tasks={tasks} setTasks={setTasks} />

    </div>
  );
}

export default App;