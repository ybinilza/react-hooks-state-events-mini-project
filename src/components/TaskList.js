import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete, selectedCategory }) {
  //const print = tasks.map(task => console.log(task))
  
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} category={task.category} text={task.text} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default TaskList;
