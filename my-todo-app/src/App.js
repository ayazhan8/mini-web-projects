import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { name: "a", id: "1", completed: false },
  ]);
  const [task, setTask] = useState("");

  const addTask = () => {
    const newTask = { id: Math.random(), name: task, completed: false };
    setItems([...items, newTask]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const removeTask = (id) => {
    const leftTasks = items.filter((item) => item.id !== id);
    setItems(leftTasks);
  };

  const markCompleted = (id) => {
    const leftTasks = [...items];
    const objIndex = leftTasks.findIndex((obj) => obj.id == id);
    leftTasks[objIndex].completed = true;
    setItems(leftTasks);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={task} onChange={handleChange} />
        <div>New task is {task}</div>
        <button>Submit</button>
      </form>
      <div>
        {items.map((item) => {
          return (
            <div>
              <li style={{ color: item.completed ? "green" : "red" }}>
                {item.name}
              </li>
              <button onClick={() => removeTask(item.id)}>Delete</button>
              <button onClick={() => markCompleted(item.id)}>Completed</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
