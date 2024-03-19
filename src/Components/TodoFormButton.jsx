import React from "react";
import './TodoFormButton.css'

function TodoFormButton({ onClick }){
    return(
        <button onClick={onClick} className="AddTask-Button">Add Task</button>
    )
}

export default TodoFormButton