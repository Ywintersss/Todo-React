import './App.css';
import AddTaskForm from './Components/AddTaskForm'
import Task from './Components/Task'
import FormButton from './Components/TodoFormButton'
import Confirmation from "./Components/Confirmation";
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [tasks, setTasks] = useState([])
  //stores the id of the task that triggered the confirmation page
  const [taskID, settaskID] = useState(0)

  const addtask = (taskData) => {
    //... takes old tasks array, makes a copy of all the items into the new array
    setTasks([...tasks, taskData])
    setShowAddTaskForm(false)
  }

  const deltask = (indexToRemove) => {
    setTasks((prevTasks) =>{
      //() => no need {} when dealing with singular expressions
      //filter(function(value, index, arr), thisvalue)
      return prevTasks.filter((_, index) => 
        index !== indexToRemove
      )
    })
  }

  const toggleAddTaskForm = () =>{
    setShowAddTaskForm(!showAddTaskForm)
  }

  const toggleConfirmation = (index) =>{
    setShowConfirmation(!showConfirmation)
    settaskID(index)
  }

  //for debugging purposes
  //React is asynchronous
  useEffect(() => {
    console.log(tasks);
  }, [tasks]); // Log tasks whenever it changes

  return (
    <div className="App">
      <section className='Body'>
        <div className='Todo-List'>
          {tasks.map((task, index)=>{
            return <Task key={index} taskData={task} showConfirmation={toggleConfirmation} taskID={index}></Task>
          })}
        </div>
        <FormButton onClick={toggleAddTaskForm}></FormButton>
      </section>
      {showAddTaskForm && <AddTaskForm onSubmit={addtask}></AddTaskForm>}
      {showConfirmation && <Confirmation toggleConfirmation={toggleConfirmation} delTask={deltask} taskID={taskID}></Confirmation>}
    </div>
  );
}

export default App;
