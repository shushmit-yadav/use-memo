import { useState, useEffect } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  
  const fetchTodos = async () => {
    let todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await todos.json();
    setTodos(json);
  }
  
  useEffect(() => {
    fetchTodos();
  },[]);

  

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div id={todo.id} style={{
            padding:"5px",
            margin:"5px",
            backgroundColor: hoveredId === todo.id ? "#ffd54f" : "transparent",
            borderRadius:"10px",
          }}
          onMouseEnter={() => setHoveredId(todo.id)}
            onMouseLeave={() => setHoveredId(null)}>
            <span>Title: {todo.title}</span>
            <br />
            <span>Completed: {todo.completed ? "true":"false"}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Todo;
