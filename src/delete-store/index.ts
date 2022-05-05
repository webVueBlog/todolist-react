/**
 * redux
 * store
 * state的容器
 * 
 * reducer纯函数，有什么样的输入就有什么样的输出
 * 
 * action对象
 * 
 * dispatch函数，状态变更
 */

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, []);

export default store;