import React from "react";
import ToDo from "./ToDo";
import Show from "./Show";
function TaskList({ list, deleted, completed }) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center m-5">
      {list.length === 0 ? (
        <p className="bg-primary text-white p-3 w-50">NO List To do</p>
      ) : (
        list.map((task) => (
          <Show key={task.id} task={task} deleted={deleted} completed={completed} />
        ))
      )}
    </div>
  );
}

export default TaskList;
