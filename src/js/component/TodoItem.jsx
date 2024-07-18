import React from "react";
import "../../styles/TodoItem.css";

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)} className="delete-btn">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
