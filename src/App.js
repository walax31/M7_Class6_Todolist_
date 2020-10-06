import React from "react";
import Title from "./component/Title";
import Lane from "./component/Lane";
import Input from "./component/Input";
import { useTodo } from "./component/contexts/ActionContext";
import "./styles.css";

function App() {
  const [, { handleAddTodo }] = useTodo();

  return (
    <div className="container">
      <Title>Simple Kanban Board</Title>
      <Input onSubmit={handleAddTodo} />
      <Lane />
    </div>
  );
}

export default App;
