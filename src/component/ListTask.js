import React from 'react';
import Task from './Task';

const ListTask = ({todos}) => {

    return (
        <div >

            {todos.map((task,id) => <Task todo={task} done={task.done} key={id}></Task>)}       
        </div>
    )
}

export default ListTask