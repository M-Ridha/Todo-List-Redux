import { ADD_TODO, UPDATE_TODO, DELETE_TODO , TOGGLE_TODO  } from '../Action/type';

let todos = []

export let ToDOReducer = (state = todos, action) => {
    
    let newTodos;
    switch (action.type) {
        
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;

        case TOGGLE_TODO: 
            return state.map(todo=>todo.id === action.payload ? {...todo, done: !todo.done} : todo) ;
        
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
            

        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                
            } 
            return newTodos;


        
        

            default: return state    
    }

}