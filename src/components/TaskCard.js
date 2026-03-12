import React from "react";
function TaskCard({task,moveTask,deleteTask}){
return(
<div className="task">
<p>{task.title}</p>
<div className="buttons">
<button onClick={()=>moveTask(task.id,"todo")}>Todo</button>
<button onClick={()=>moveTask(task.id,"progress")}>
Progress
</button>
<button onClick={()=>moveTask(task.id,"done")}>Done</button>
<button onClick={()=>deleteTask(task.id)}>
Delete
</button>
</div>
</div>
)
}
export default TaskCard;