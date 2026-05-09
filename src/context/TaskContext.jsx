import { useState } from "react";
import { createContext } from "react";
export const TaskContext=createContext();


const TaskProvider=({children})=>{
    const [tasks,setTasks]=useState([])
    return(<TaskContext.Provider value={{tasks,setTasks}}>{children}</TaskContext.Provider>)
}
export default TaskProvider;