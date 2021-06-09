import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from '../Action/TodoAct';
import { uuid } from 'uuidv4';
import './task.css'



const Task = ({ todo, id, done }) => {

    const [editable, setEditable] = useState(false)
    const [description, setDescription] = useState(todo.description)
    let dispatch = useDispatch();

    const handleDone = () => {
        dispatch(toggleTodo({
            id: id,
            done: !done,
        }))
    }

    return (
        <div className="todo">

            <div className="task" >

                {todo.id ? todo.id[uuid] : todo}

                <Checkbox
                    checked={done}
                    color="default"
                    onChange={handleDone}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="tasks"
                />


                <div className="col">

                    {editable ?

                        <input
                            key={id}
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}




                        />

                        :
                        <h4 style={{ textDecoration: todo.done ? 'line-through' : 'none' }} >{todo.description}</h4>}


                </div>

            </div>


            <div className='btn' >

                <button
                    className='ebtn'
                    onClick={() => {
                        editable && dispatch(updateTodo({
                            ...todo,
                            description: description
                        }))
                        if (editable) {
                            setDescription(todo.description);

                        }
                        setEditable(!editable);
                        setDescription("")
                    }}>

                    {editable ? "Update" : "Edit"}

                </button>





                <button
                    className='delbtn'
                    onClick={() => dispatch(deleteTodo(todo.id))}>
                    Delete
                </button>

            </div>





        </div>
    )
}

export default Task