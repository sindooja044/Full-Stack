import React, { useState } from 'react'

const Tasklist = ({tasks,deleteTask,toggleTask}) => {
  return (
    <div>
      {tasks.map((task)=><ul>
        <li key={task._id}><button onClick={()=>{toggleTask(task._id)}}>{task.completed? "check":"uncheck"}</button> {task.title}</li><button onClick={()=>{deleteTask(task._id)}}>DELETE</button></ul>)}
    </div>
  )
}

export default Tasklist
