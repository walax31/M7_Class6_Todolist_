import React, { useState } from "react";
import Title from "./component/Title";
import Lane from "./component/Lane";
import Input from "./component/Input";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todoInput) => {
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);
  };
  return (
    <div className="container">
      <Title>Simple Kanban Board</Title>
      <Input onSubmit={handleAddTodo} />
      <Lane todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
