import React, { useState, useEffect } from "react";
import Column from "./Column";
function Board() {
const [tasks,setTasks] = useState(
 JSON.parse(localStorage.getItem("tasks")) || []
);
useEffect(()=>{
localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);
const addTask = (title) =>{
setTasks([...tasks,{id:Date.now(),title,status:"todo"}])
}
const moveTask = (id,newStatus)=>{
setTasks(tasks.map(task =>
task.id===id ? {...task,status:newStatus}:task
))
}
const deleteTask = (id)=>{
setTasks(tasks.filter(task => task.id!==id))
}
return(
<div className="board">
<Column
title="Todo"
tasks={tasks.filter(t=>t.status==="todo")}
addTask={addTask}
moveTask={moveTask}
deleteTask={deleteTask}
/>
<Column
title="In Progress"
tasks={tasks.filter(t=>t.status==="progress")}
moveTask={moveTask}
deleteTask={deleteTask}
/>
<Column
title="Done"
tasks={tasks.filter(t=>t.status==="done")}
moveTask={moveTask}
deleteTask={deleteTask}
/>
</div>
)
}
export default Board;