import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.textTodo}</td>
      <td>
        <Link
          style={{ textDecoration: "none" }}
          to={`project/${todo.project.id}`}
        >
          {todo.project.name}
        </Link>
      </td>
      <td>
        <Link style={{ textDecoration: "none" }} to={`user/${todo.creator.id}`}>
          {todo.creator.username}
        </Link>
      </td>
      <td>{todo.creator.email}</td>
      <td>{todo.active.toString()}</td>
      <td>{new Date(todo.createDate).toLocaleString()}</td>
      <td>{new Date(todo.updateDate).toLocaleString()}</td>
    </tr>
  );
};

const TodoList = ({ todos }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Project</th>
          <th>Creator</th>
          <th>Email</th>
          <th>Active</th>
          <th>Date Created</th>
          <th>Date Update</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id.toString()} />
        ))}
      </tbody>
    </table>
  );
};
export default TodoList;