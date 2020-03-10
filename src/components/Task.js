import React from 'react'

const Task = props => {
    return (
        <div>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Task;