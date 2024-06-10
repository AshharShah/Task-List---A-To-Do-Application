import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // function handleAdd() {
  //   setCount(count + 1);
  //   // console.log(count);
  // }

  // function handleSub() {
  //   setCount(count - 1);
  //   // console.log(count);
  // }

  // return (
  //   <div className="App">
  //     <div className="box">
  //       <p>Count: {count}</p>
  //       <button onClick={handleAdd} className="add">
  //         ADD
  //       </button>
  //       <button onClick={handleSub} className="sub">
  //         SUBTRACT
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="App box">
      <Header></Header>
      <TaskList title="My Task List"></TaskList>
    </div>
  );
}

export default App;
