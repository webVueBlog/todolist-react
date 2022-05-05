import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useStore } from '../store/index'
import { observer } from "mobx-react";

// 没有第二个参数，则回调函数会每次render时执行
// 如果第二参数位空数组，则组件初始化和卸载时执行
// 如果第二个参数数组中有值，则值发生改变才执行 回调函数
// useEffect(() => {
//  // 告诉我有多少条数据
//  console.log(store.todoList.length)
// })

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

 useEffect(() => {
  // 告诉我有多少条数据
  console.log(store.todoList.length)

  return () => {
   console.log('卸载的时候执行，要返回一个函数')
  }
 }, [store.todoList.length]);

 const todolistdom = store.todoList.map(item => <TodoItem key={item.id} todo={item} />)
 return (
  <div className="todo-list" style={style}>
   { todolistdom }
  </div>
 )
}

export default observer(TodoList);