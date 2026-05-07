import React, { useState } from 'react'
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';

const App = () => {
    const [tasks, setTasks]=useState([]);

    const addTask=async (inputValue)=>{
        const res=await fetch('http://localhost:5000/api/tasks',{
            method:"POST",
            headers:{"content-Type":'application/json'},
            body:JSON.stringify({title:inputValue}),

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
  return (
    <div>
      <Taskform addTask={addTask} />
      <Tasklist  tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
    </div>
  )
}

export default App
