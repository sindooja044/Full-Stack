import React, { useState } from 'react'

const Taskform = ({addTask}) => {
    const [inputValue, setInputValue]=useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault();
       await addTask(inputValue);
       setInputValue("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} type="text" name="input" placeholder='enter the task' onChange={(e)=>setInputValue(e.target.value)}/>
        <button type="submit">Add</button>
        
      </form>
    </div>
  )
}

export default Taskform
