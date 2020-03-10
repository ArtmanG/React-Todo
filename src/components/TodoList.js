import React from 'react';
import Task from './Task';

const ToDoList = props => {
    return (
        <div>
            {props.todo.map(task => (
                <Task
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    )
}

export default ToDoList;