
import React, { createContext, useContext } from 'react';
import todoStore from './TodoStore';

export const MyContext = createContext<typeof todoStore>(todoStore);

// 自定义hook
export const useStore = () => {
 const store = useContext(MyContext);
 if(!store) throw Error('no store');
 return store;
}

interface MyProps {
 children?: React.ReactNode;
}

// FC 函数式组件
const MyProvider: React.FC<MyProps> = ({ children }) => {
 return (
  <MyContext.Provider value={todoStore}>
   {children}
  </MyContext.Provider>
 )
}

export default MyProvider;