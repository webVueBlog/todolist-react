import React, {useContext} from "react";
import { StateProps } from "../store/reducer";
// import {MyContext} from './MyProvider';
import { useDispatch } from "react-redux";
import { changeAction } from "../store/action";

const style = {
 marginTop: '5px',
 padding: '5px 0',
 boxShadow: '0 0 3px #eee'
}

interface IProps {
 todo: StateProps;
}

const TodoItem = ({todo}: IProps) => {
 const dispatch = useDispatch();

 const changeHandler = () => {
  dispatch(changeAction(todo.id))
  // dispatch({
  //  type: 'CHANGEFINISHED',
  //  id: todo.id
  // });
 }

 const spanStyle = {
  textDecoration: todo.isFinished ? 'line-through' : 'none'
 }

 return (
  <div className="todo-item" style={style}>
   <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}></input>
   <span style={spanStyle}>{todo.text}</span>
  </div>
 )
}

export default TodoItem;