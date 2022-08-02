//중앙 State 관리소, Store만드는 설정코드 파일
import {createStore } from "redux";
import { combineReducers } from "redux";

import todoList from "../modules/todo";



const rootReducer = combineReducers({
    todoList : todoList,
});
const store = createStore(rootReducer);

export default store;