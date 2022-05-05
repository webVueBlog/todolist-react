// import { makeObservable, observable, action } from 'mobx';
import { makeAutoObservable } from 'mobx';

export interface Stateprops {
 id: number;
 text: string;
 isFinished: boolean;
}

class TodoStore {
 todoList: Stateprops[] = [];

 constructor() {
  makeAutoObservable(this);
  // makeObservable(this, {
  //  todoList: observable,
  //  addAction: action,
  //  changeAction: action
  // });
 }

 addAction(todo: Stateprops) {
  this.todoList.push(todo);
 }

 changeAction(id: number) {
  this.todoList = this.todoList.map(item => {
   if(item.id === id) {
    return Object.assign({}, item, {
     isFinished: !item.isFinished
    });
   }
   return item;
  })
 }
}

export default new TodoStore();