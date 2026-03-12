import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";
function Column({ title, tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (!newTask) return;
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: newTask,
        status: title
      }
    ]);

    setNewTask("");
  };
  return (
    <div className="column">
      <h2>{title}</h2>

      {title === "Todo" && (
        <div className="task-input">
          <input
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="New Task"
          />
          <button onClick={addTask}>Add</button>
        </div>
      )}
      <Droppable droppableId={title}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
}
export default Column;