import React from "react";
import Column from "./Column";

function Board({ tasks, setTasks }) {

  const columns = ["Todo", "In Progress", "Done"];

  return (

    <div className="board">

      {columns.map(col => (
        <Column
          key={col}
          title={col}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}

    </div>

  );
}

export default Board;