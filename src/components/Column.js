import React, { useState } from "react";
import TaskCard from "./TaskCard";

function Column({ title, tasks, setTasks }) {

  const [newTask, setNewTask] = useState("");

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {

    const taskId = e.dataTransfer.getData("taskId");

    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, status: title }
        : task
    );

    setTasks(updatedTasks);
  };

  const addTask = () => {

    if (!newTask) return;

    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: newTask,
        status: "Todo"
      }
    ]);

    setNewTask("");
  };

  return (

    <div
      className="column"
      onDragOver={allowDrop}
      onDrop={handleDrop}
    >

      <h2>{title}</h2>

      {title === "Todo" && (
        <div className="task-input">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New Task"
          />
          <button onClick={addTask}>Add</button>
        </div>
      )}

      {tasks
        .filter(task => task.status === title)
        .map(task => (
          <TaskCard
            key={task.id}
            task={task}
            setTasks={setTasks}
          />
        ))}

    </div>

  );
}

export default Column;