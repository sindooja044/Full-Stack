import React, { useState } from 'react'

const Tasklist = ({tasks}) => {
  return (
    <div>
      {tasks.map((task)=><ul>
        <li key={task._id}>{task.title}</li></ul>)}
    </div>
  )
}

export default Tasklist
