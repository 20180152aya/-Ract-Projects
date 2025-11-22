import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TaskList from "./TaskList"

function ToDo() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const addList = () => {
    if (text.trim() === "") return;
    const newId = count + 1;
    setCount(newId);
    setList([...list, { id: newId, data: text, completed: false }]);
    setText("");
  };

  const deleted = (id) => {
    setList(list.filter((task) => task.id !== id));
  };

  const completed = (id) => {
    setList(
      list.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
    <h2 className="text-center mt-2 text-primary mb-2">ToDo List</h2>
      <div className="container text-center mt-5 d-flex flex-row  align-items-center justify-content-center">
        
        <input
          className="form-control me-2 w-50"
          placeholder="write your list"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />

        <button className="btn btn-primary" onClick={addList}>
          Add Task
        </button>
      </div>
      <TaskList list={list} deleted={deleted} completed={completed} />
    </>
  );
}

export default ToDo;

