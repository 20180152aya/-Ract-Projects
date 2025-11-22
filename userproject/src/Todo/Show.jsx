import React from "react";
function Show({ task, deleted, completed }) {
  return (
    <div className="bg-dark  text-white w-50 p-2 m-2 d-flex flex-row align-items-center justify-content-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completed(task.id)}
        className="me-2"
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flex: 1,
        }}
      >
        {task.data}
      </span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleted(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
export default Show;
