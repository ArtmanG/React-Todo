import React from 'react';
import Task from './Task';

const ToDoList = props => {
    return (
        <div className='todo-list'>
            {props.todo.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default ToDoList;