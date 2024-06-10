export const TaskCard = ({ task, handleDel }) => {
  return (
    <>
      <li className={task.done ? "completed" : "uncompleted"}>
        <span>
          {task.id} - {task.title}
        </span>
        <button onClick={() => handleDel(task.id)}>Delete</button>
      </li>
    </>
  );
};
