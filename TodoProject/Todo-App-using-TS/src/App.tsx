import { useState, FC } from "react";
import { Greetings } from "./Components/Greetings";
import { AddTodo } from "./Components/AddTodo";

const App: FC = () => {
  return (
    <>
      <div className="header">
        <Greetings />
      </div>
      <div className="section">
        <AddTodo />
      </div>
    </>
  );
};

export default App;
