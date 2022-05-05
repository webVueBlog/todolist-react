import React, { useState, useRef, useEffect } from "react";
import { observer } from "mobx-react";
// import {MyContext} from './MyProvider';
// import { useDispatch } from "react-redux";
// import { addAction } from "../store/action";
import { useStore } from '../store/index'

const TodoInput = () => {
 // const [ text, setText ] = useState('');

 const inputRef = useRef<HTMLInputElement>(null);

 // const { dispatch } = useContext(MyContext);
 // const dispatch = useDispatch();
 const store = useStore();

 // 相当于 componentDidMount componentDidUpdate componentWillUnmount 的集合
 useEffect(() => {
  inputRef.current!.focus();
 },[]);

 // const changeTextHandler = (e: React.ChangeEvent) => {
 //  setText((e.target as HTMLInputElement).value);
 // }

 const addTodoHandler = () => {
  const value = inputRef.current!.value;
  // console.log(text);
  store.addAction({
   id: new Date().getTime(),
   text: value,
   isFinished: false
  })

  inputRef.current!.value = '';
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
  // setText('');
 }
 return (
  <div className="todo-input">
   {/* <input type="text" placeholder="请输入代办事项" onChange={changeTextHandler} value={text}></input> */}
   <input type="text" placeholder="请输入代办事项" ref={inputRef} />
   <button onClick={addTodoHandler}>添加</button>
  </div>
 )
}

export default observer(TodoInput);