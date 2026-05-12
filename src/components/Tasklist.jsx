import React, { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
const Tasklist = ({ deleteTask, toggleTask, updateTask }) => {
  const {tasks,setTasks}=useContext(TaskContext);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  
  return (
    <div>
      {tasks.map((task) => (
        <ul key={task._id}>
          <li>
           
            {editId === task._id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={ () => {
                     updateTask(editId, editText);
                    setEditId(null);
                    setEditText("");
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                
                <button
                  onClick={() => {
                    toggleTask(task._id);
                  }}
                >
                  {task.completed ? "check" : "uncheck"}
                </button>
                <p>{task.title}</p>
                <button
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                >
                  DELETE
                </button>
                <button
                  onClick={() => {
                    setEditId(task._id); setEditText(task.title);
                  }}
                >
                  edit
                </button>
              </>
            )}
          </li>
         </ul>
      ))}
     
    </div>
  );
};

export default Tasklist;
