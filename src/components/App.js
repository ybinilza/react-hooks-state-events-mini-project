import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] =  useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleClick(category) {
    setSelectedCategory(category)
  }

  const filteredTasks = tasks.filter((task) => {
    if(selectedCategory === "All") return true
    return task.category === selectedCategory
  })
  
  function handleDeleteTask(index) {
    setTasks((tasks) => {
      const newTaskList = [...tasks]
      newTaskList.splice(index, 1)
      return newTaskList
    })
  }
  
  function handleNewTask(newTaskData) {
    setTasks([...tasks, newTaskData])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onFilter={handleClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;