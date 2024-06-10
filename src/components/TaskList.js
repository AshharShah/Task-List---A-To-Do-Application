import React from "react";
import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  let nextId = 3;
  const initialTasks = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const [show, setShow] = useState(true);

  const handleDel = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={() => setShow(!show)}>Show/Hide Tasks</button>
      <ul>
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDel={handleDel}
            ></TaskCard>
          ))}
      </ul>
    </>
  );
};
