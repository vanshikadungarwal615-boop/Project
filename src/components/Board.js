import React from "react";
import Column from "./Column";
import { DragDropContext } from "react-dnd";
const columns = ["Todo", "In Progress", "Done"];
function Board({ tasks, setTasks }) {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTasks = tasks.map(task =>
      task.id === result.draggableId
        ? { ...task, status: result.destination.droppableId }
        : task
    );
    setTasks(updatedTasks);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {columns.map(col => (
          <Column
            key={col}
            title={col}
            tasks={tasks.filter(task => task.status === col)}
            setTasks={setTasks}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
export default Board;