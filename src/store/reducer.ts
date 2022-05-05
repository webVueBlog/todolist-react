import * as types from './actionType';

export interface StateProps {
 id: number;
 text: string;
 isFinished: boolean;
}

export interface ActionProps {
 type: string;
 [key: string]: any;
}

const reducer = (state: StateProps[] = [], action: ActionProps) => {
 switch(action.type) {
  case types.ADD:
   return [...state, action.todo];

  case types.CHANGEFINISHED:
   return state.map(item => {
    if(item.id === action.id) {
     return Object.assign({}, item, {
      isFinished: !item.isFinished
     });
    }
    return item;
   });

   default:
    return state;
 }
}

// ReturnType<T>
export type RootState = ReturnType<typeof reducer>;

export default reducer;