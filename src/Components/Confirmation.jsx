import React from "react";
import './Confirmation.css'

function confirmation({toggleConfirmation, delTask, taskID}){
    const confirmDel = () => {
        delTask(taskID)
        toggleConfirmation()
    }

    return(
        <div className="confirmation-container">
            <button className="no-button" onClick={toggleConfirmation}>Back</button>
            <span className="confirmtext">Confirm Completion?</span>
            <button className="yes-button" onClick={confirmDel}>Confirm</button>
        </div>
    )
}

export default confirmation