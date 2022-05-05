import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
// import MyProvider from "./MyProvider";
import { Provider } from "react-redux";
import store from "../store/index";

const Todo = () => {
 return (
  <Provider store={store}>
   <div className="todo">
    <TodoInput />
    <TodoList />
   </div>
  </Provider>
 )
}

export default Todo;