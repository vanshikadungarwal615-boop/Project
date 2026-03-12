import React from "react";

function TaskCard({ task, setTasks }) {

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const deleteTask = () => {
    setTasks(prev =>
      prev.filter(t => t.id !== task.id)
    );
  };

  const editTask = () => {

    const newTitle = prompt("Edit Task", task.title);

    if (!newTitle) return;

    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? { ...t, title: newTitle }
          : t
      )
    );
  };

  return (

    <div
      className="task"
      draggable
      onDragStart={handleDragStart}
    >

      <p>{task.title}</p>

      <div className="task-buttons">
        <button onClick={editTask}>Edit</button>
        <button onClick={deleteTask}>Delete</button>
      </div>

    </div>

  );
}

export default TaskCard;