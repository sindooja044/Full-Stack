import React, { useState } from 'react'
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';
import Taskname from './components/Taskname';
import { TaskContext } from './context/TaskContext';
import './index.css'
import { useContext } from 'react';

const App = () => {
   
    const {tasks,setTasks}=useContext(TaskContext)

    const addTask=async (title)=>{
        const res=await fetch('http://localhost:5000/api/tasks',{
            method:"POST",
            headers:{"content-Type":'application/json'},
            body:JSON.stringify({title}),

        });
        console.log(res);
        const data=await res.json()
        console.log(data);
      setTasks((prev)=>[data,...prev])


    }
   const deleteTask=async (id)=>{
    await fetch(`http://localhost:5000/api/tasks/${id}`,{
            method:"DELETE",
            

        });
        setTasks(tasks.filter((t)=>t._id!==id))
   }
   const toggleTask=async (id)=>{
   const res=await fetch(`http://localhost:5000/api/tasks/${id}`,{
            method:"PATCH",
            

        });
     const updatedTask= await res.json();
     setTasks(tasks.map((task)=>task._id===id?updatedTask : task))

   }
   const updateTask=async (id,title)=>{
        const res=await fetch(`http://localhost:5000/api/tasks/${id}`,{
            method:"PUT",
            headers:{"content-Type":'application/json'},
            body:JSON.stringify({title}),

        });
        console.log(res);
        const data=await res.json()
        console.log(data);
      setTasks((prev) =>
  prev.map((task) =>
    task._id === id ? data : task
  )
)

    }
  return (
    <div>
      <Taskform addTask={addTask} />
      <Tasklist  deleteTask={deleteTask} toggleTask={toggleTask} updateTask={updateTask}/>
      {/*<Taskname/>*/}
    </div>
  )
}

export default App
