import { combineReducers } from "redux";
import {FilterReducer} from './FilterReducer';
import {ToDOReducer} from "./ToDoReducer";



export default combineReducers({ 
    ToDOReducer,
    Filter: FilterReducer
})