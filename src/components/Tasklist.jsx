import React, { useState } from 'react'

const Tasklist = ({tasks,deleteTask}) => {
  return (
    <div>
      {tasks.map((task)=><ul>
        <li key={task._id}>{task.title}</li><button onClick={()=>{deleteTask(task._id)}}>DELETE</button></ul>)}
    </div>
  )
}

export default Tasklist
