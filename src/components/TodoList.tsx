import React from "react";
import TodoItem from "./TodoItem";
import { useStore } from '../store/index'
import { observer } from "mobx-react";

// import { useSelector } from 'react-redux';
// import { RootState } from "../store/reducer";
// import {MyContext} from './MyProvider';

const style = {
 marginTop: '20px'
};

const TodoList = () => {
 // const {state} = useContext(MyContext);
 // useSelector这个一般要做类型判断的
 // const state = useSelector((state: RootState) => state)
 const store = useStore();

 const todolistdom = store.todoList.map(item => <TodoItem key={item.id} todo={item} />)
 return (
  <div className="todo-list" style={style}>
   { todolistdom }
  </div>
 )
}

export default observer(TodoList);