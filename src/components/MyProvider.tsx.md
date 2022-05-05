import React, { createContext, useReducer } from "react";
import reducer, { StateProps, ActionProps } from "../store/reducer";

export interface ContextProps {
 // todoList: StateProps[];
 state: StateProps[];
 dispatch: React.Dispatch<ActionProps>;
 // changeTodo: (id: number) => void;
 // addTodo: (todo: StateProps) => void;
}

// const MyContext = createContext<ContextProps | null>(null);
export const MyContext = createContext({} as ContextProps);

const MyProvider = (props: React.PropsWithChildren<{}>) => {
 const initState: StateProps[] = []
 const [state, dispatch] = useReducer(reducer, initState);
 // const [todoList, setTodoList] = useState<StateProps[]>([]);

 // const changeTodo = (id: number) => {
 //  const newTodoList = todoList.map(item => {
 //   if(item.id === id) {
 //    return Object.assign({}, item, {
 //     isFinished: !item.isFinished
 //    })
 //   }
 //   return item;
 //  });

 //  setTodoList(newTodoList)
 // }

 // const addTodo = (todo: StateProps) => {
 //  setTodoList([...todoList, todo]);
 // }

 return (
  <MyContext.Provider value={{
   // todoList,
   // changeTodo,
   // addTodo
   state,
   dispatch
  }}>
   {props.children}
  </MyContext.Provider>
 )
}

export default MyProvider;