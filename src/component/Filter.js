import React from 'react'
import {filterTodo} from '../Action/TodoAct'
import {  useDispatch } from "react-redux"; 
import './task.css'



const Filter = () =>{
    const dispatch = useDispatch();
    
        
    return (
        
        <div className="fles">

            <button 
                style={{marginRight:'20px', backgroundColor:'white' , borderRadius:'10px' , fontSize:'20px'}}  
                onClick={(e)=>dispatch(filterTodo(e.target.id))} id='All' > All 
            </button>
            
            <button  
                style={{backgroundColor:'red', borderRadius:'10px', fontSize:'20px'}}   
                onClick={(e)=>dispatch(filterTodo(e.target.id))} id='Done' > Done 
            </button>
            
            <button 
                style={{marginLeft:'20px', backgroundColor:'green',borderRadius:'10px',  fontSize:'20px' }} 
                onClick={(e)=>dispatch(filterTodo(e.target.id))} id='UnDone' >  UnDone 
            </button> 
            
        </div>
    )
    
    }

    export default Filter

