import { useState } from "react";
import "./Project1.css";

function Project1() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do App</h1>
      <p className="subtitle">Manage your daily tasks</p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map((item, index) => (
          <div className="task" key={index}>
            <span
              className={item.completed ? "completed" : ""}
              onClick={() => completeTask(index)}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <p className="empty">No tasks yet. Add your first task!</p>
      )}
    </div>
  );
}

export default Project1;