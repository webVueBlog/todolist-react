import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
// import MyProvider from "./MyProvider";
// import { Provider } from "react-redux";
// import store from "../store/index";
import MyProvider from "../store";

const Todo = () => {
 return (
  // <Provider store={store}>
  // </Provider>
  <MyProvider>
   <div className="todo">
    <TodoInput />
    <TodoList />
   </div>
  </MyProvider>
 )
}

export default Todo;