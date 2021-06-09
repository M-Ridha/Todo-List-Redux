import React, { useState } from 'react';
import { addTodo } from '../Action/TodoAct';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import './task.css'

function AddTask() {
    let [description, setDescription] = useState();
    let dispatch = useDispatch();
    
    return (
        
        <div>
            
            <div className="todo-form">
                
                <h3> what's the plan for Today?! </h3> 
                
                <input
                
                className='todo-input'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                type="text" 
                />
                
                
                
                <button
                    className='todo-button'
                    onClick={()=>{
                        dispatch(  addTodo({
                        id: uuid(),
                        description: description ,
                        done : false
                    }));
                        setDescription('');
                    }}
                >
                    Add
                </button>
            
            
            </div>
        
        </div>
    )
}

export default AddTask