import React from "react";
import './Task.css'

function Task({ taskData, showConfirmation, taskID }){
    const taskName = taskData.get('taskName')
    const urgency = taskData.get('urgency')



    return(
        <div className="task">
            <span className="task-name">{taskName}</span>
            <span className="task-urgency">Urgency:{urgency}</span>
            <button className="task-done-button" onClick={() => showConfirmation(taskID)}>Done</button>
        </div>
    )
}

export default Task