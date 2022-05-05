import React from "react";
import { observer } from "mobx-react";
// import {MyContext} from './MyProvider';
// import { useDispatch } from "react-redux";
// import { StateProps } from "../store/reducer";
// import { changeAction } from "../store/action";
import { Stateprops } from '../store/TodoStore'
import { useStore } from '../store/index'

const style = {
 marginTop: '5px',
 padding: '5px 0',
 boxShadow: '0 0 3px #eee'
}

interface IProps {
 todo: Stateprops;
}

const TodoItem = ({todo}: IProps) => {
 // const dispatch = useDispatch();
 const store = useStore();

 const changeHandler = () => {
  store.changeAction(todo.id)
  // dispatch(changeAction(todo.id))
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
   <input type="checkbox" checked={todo.isFinished} onChange={changeHandler} />
   <span style={spanStyle}>{todo.text}</span>
  </div>
 )
}

export default observer(TodoItem);