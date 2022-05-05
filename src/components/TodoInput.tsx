import React, { useState } from "react";
import { observer } from "mobx-react";
// import {MyContext} from './MyProvider';
// import { useDispatch } from "react-redux";
// import { addAction } from "../store/action";
import { useStore } from '../store/index'

const TodoInput = () => {
 const [ text, setText ] = useState('');

 // const { dispatch } = useContext(MyContext);
 // const dispatch = useDispatch();
 const store = useStore();

 const changeTextHandler = (e: React.ChangeEvent) => {
  setText((e.target as HTMLInputElement).value);
 }

 const addTodoHandler = () => {
  console.log(text);
  store.addAction({
   id: new Date().getTime(),
   text: text,
   isFinished: false
  })
  // dispatch(addAction({
  //  id: new Date().getTime(),
  //  text: text,
  //  isFinished: false
  // }));
  // dispatch({
  //  type: 'ADD',
  //  todo: {
  //   id: new Date().getTime(),
  //   text: text,
  //   isFinished: false
  //  }
  // });
  setText('');
 }
 return (
  <div className="todo-input">
   <input type="text" placeholder="请输入代办事项" onChange={changeTextHandler} value={text}></input>
   <button onClick={addTodoHandler}>添加</button>
  </div>
 )
}

export default observer(TodoInput);