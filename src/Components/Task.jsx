import React from "react";
import './Task.css'

//multiple props all in {} not seperate
function Task({ taskData, showConfirmation, taskID }){
    //FormData objects cannot be accessed through . methods. Ex: sample.name
    const taskName = taskData.get('taskName')
    const urgency = taskData.get('urgency')

    return(
        <div className="task">
            <span className="task-name">{taskName}</span>
            <span className="task-urgency">Urgency:{urgency}</span>
            <button className="task-done-button" onClick={() => showConfirmation(taskID)}>Done</button>
        </div>
    )
    //onClick={() => showConfirmation(taskID)} this is to ensure the callback function runs exactly when an event occurs 
    //passing showConfirmation directly would invoke the function immediately 
}

export default Task