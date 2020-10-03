import React, { useState } from "react";
import Content from "./Content";
import ActionContext from "../../contexts/ActionContext";
function Lane({ todos, setTodos }) {
  const [doings, setDoings] = useState([]);
  const [dones, setDones] = useState([]);

  const handleDoClick = (itemIndex) => {
    setDoings([...doings, todos[itemIndex]]);
    setTodos(todos.filter((_, index) => index !== itemIndex));
  };
  const handleDoneClick = (type) => (itemIndex) => {
    if (type === "todo") {
      setDones([...dones, todos[itemIndex]]);
      return setTodos(todos.filter((_, index) => index !== itemIndex));
    }
    if (type === "doing") {
      setDones([...dones, doings[itemIndex]]);
      return setDoings(todos.filter((_, index) => index !== itemIndex));
    }
  };

  // const handleDoneClick = (itemIndex) => {
  //   setDones([...dones, todos[itemIndex]]);
  //   setTodos(todos.filter((_, index) => index !== itemIndex));
  // };
  // const handleDoneDoneClick = (itemIndex) => {
  //   setDones([...dones, doings[itemIndex]]);
  //   setDoings(todos.filter((_, index) => index !== itemIndex));
  // };

  return (
    <ActionContext.Provider
      value={{ onDoClick: handleDoClick, onDoneClick: handleDoneClick }}
    >
      <div className="lane-container">
        <Content title="Todo" list={todos} type="todo" />
        <Content title="Doing" list={doings} type="doing" />
        {/* onDoneClick={handleDoneDoneClick} */}
        <Content title="Done" list={dones} />
      </div>
    </ActionContext.Provider>
  );
}
export default Lane;
