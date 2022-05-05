import React,{ useContext } from "react";
import { useSelector } from 'react-redux';
import TodoItem from "./TodoItem";
import { RootState } from "../store/reducer";
// import {MyContext} from './MyProvider';

const style = {
 marginTop: '20px'
};

const TodoList = () => {
 // const {state} = useContext(MyContext);
 // useSelector这个一般要做类型判断的
 const state = useSelector((state: RootState) => state)

 const todolistdom = state.map(item => <TodoItem key={item.id} todo={item} />)
 return (
  <div className="todo-list" style={style}>
   { todolistdom }
  </div>
 )
}

export default TodoList;