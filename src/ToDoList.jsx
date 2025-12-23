import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState(["Breakfast", "Lunch", "Dinner"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === ""){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask() {

  }

  function moveTaskUp(index) {

  }

  function moveTaskDown(index) {

  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className="add-button" onClick={addTask}>Add Task</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>Move Up</button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>Move Down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;