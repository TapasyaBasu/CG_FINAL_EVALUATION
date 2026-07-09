import { useEffect, useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load todo list.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="loading">Loading Todo List...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="todo-container">
      <h1>My Daily Todo List</h1>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={todo.id} className="todo-item">
            <h3>Task {index + 1}</h3>

            <p>
              <strong>Task Name:</strong> {todo.title}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span className={todo.completed ? "completed" : "pending"}>
                {todo.completed ? "Completed ✅" : "Pending ⏳"}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;