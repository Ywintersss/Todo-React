import React from "react";
import './AddTaskForm.css'

function AddTaskForm({onSubmit}){
    const handleSubmit = (e) =>{
        //prevents browser from reloading
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        onSubmit(formData)

        form.reset()
    }


    return (
        <form className="addtaskform" onSubmit={handleSubmit}>
            <label htmlFor="" className="taskinput">
                <span>Task:</span>                
                <input type="text" name="taskName"/>
            </label>
            
            <div className="urgency">
                <span>Task Urgency:</span>
                <label>
                    <input className="urgency-input" type="radio" name="urgency" id="low" value='Low'/>
                    Low
                </label>
                <label>
                    <input className="urgency-input" type="radio" name="urgency" id="mid" value='Medium'/>
                    Mid
                </label>
                <label>
                    <input className="urgency-input" type="radio" name="urgency" id="high" value='High'/>
                    High
                </label>
            </div>
            <button className="submit-button" type="submit">Add Task</button>
        </form>
    )
}

export default AddTaskForm