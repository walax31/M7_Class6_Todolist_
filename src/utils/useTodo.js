import { useState, useEffect } from "react";

function useTodo() {
  const [todos, setTodos] = useState([]);

  const handleAddtodo = (todoInput) =>
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);

  const handleDoClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "doing";
    }
    setTodos(cloneTodos);
  };
  const handleDoneClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "done";
    }
    setTodos(cloneTodos);
  };
  const handleTodoClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "todo";
    }
    setTodos(cloneTodos);
  };
  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem("todos")));
  }, [setTodos]);

  useEffect(() => {
    if (todos.length)
      window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [
    todos,
    { handleAddtodo, handleDoClick, handleDoneClick, handleTodoClick }
  ];
}
export default useTodo;
