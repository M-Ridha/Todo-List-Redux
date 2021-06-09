import {FILTER_TODO} from '../Action/type'


export const FilterReducer = (state= "All", action)=>{
    
    //console.log(action)
    
    switch(action.type){
        
        case FILTER_TODO :
            return action.payload;
        default:
            return state;
    }
}