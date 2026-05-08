import React, { useState } from 'react'

const Taskform = ({addTask}) => {
    const [title, setTitle]=useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault();
       await addTask(title);
       setTitle("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} type="text" name="input" placeholder='enter the task' onChange={(e)=>setTitle(e.target.value)}/>
        <button type="submit">Add</button>

      </form>
    </div>
  )
}

export default Taskform
