import React from "react";
import TaskCard from "./TaskCard";
function Column({title,tasks,addTask,moveTask,deleteTask}){
const handleAdd = ()=>{
const title = prompt("Enter task");
if(title && addTask){
addTask(title);
}
}
return(
<div className="column">
<h2>{title}</h2>
{addTask && <button onClick={handleAdd}>Add Task</button>}
{tasks.map(task => (
<TaskCard
key={task.id}
task={task}
moveTask={moveTask}
deleteTask={deleteTask}
/>
))}
</div>
)
}
export default Column;