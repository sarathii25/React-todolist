import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const AddTask = ({addTask}) =>{
  const[value,updatevalue] = useState("");
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(value!==""){
      addTask(value);
      updatevalue("");
    }
  };
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="Add the todo task" onChange={(e)=> updatevalue(e.target.value)}/>
      <button type="submit"><i className="material-icons">add</i></button>
     </form>
  )
}


const ToDoList = () => {
  const addTask = (text) =>updatetask([...tasks,{text}]);
  const [tasks,updatetask] = useState([
    {
      text: "Wake up early",
      isCompleted: false,
    },
    {
      text: "Fresh up",
      isCompleted: false,
    },
    {
      text: "Breakfast",
      isCompleted: false,
    }
   
  ]);
  const toggleTask = (index)=>{
    const newTask = [...tasks];
    if(newTask[index].isCompleted){
      newTask[index].isCompleted =false
    }
    else{
      newTask[index].isCompleted=true
    }
    updatetask(newTask);
  }
  const removeTask = (index) =>{
    const newTask =[...tasks];
    newTask.splice(index,1);
    updatetask(newTask);
  }
  return (
    <div className="todo-list">
      {tasks.map((task,index) =>(
        <div className="list-of-items">
          <span onClick={()=> toggleTask(index)} className={task.isCompleted? "task-name task-completed":"task-name"}>
          {/* {index} */}
          {task.text}
          </span>      
          <button onClick={()=> removeTask(index)}><i className="material-icons">delete</i></button>    
        </div>
      ))}
      <AddTask addTask={addTask}/>
    </div>
  )
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
