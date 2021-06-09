import {ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO , FILTER_TODO} from './type'

export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export function toggleTodo (todo) {
    return {
        type:TOGGLE_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}


export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}

export function filterTodo (filter) {
    return {
        type:FILTER_TODO,
        payload : filter
    }
}
