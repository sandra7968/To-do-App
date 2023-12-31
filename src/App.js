import { useState } from 'react';
import './App.css';

function App() {
  const [tasks,setTasks] = useState([])
  const [newTask,setNewTask] = useState('')
  const [editingTask, setEditingTask] = useState(null)
  const [ editedTask,setEditedTask] = useState('')

  const addTask = ()=>{
    if(newTask.trim()!==''){
      setTasks([...tasks,newTask])
      setNewTask('')
    }
  }

  const removeTask = (index)=>{
    const updatedTasks = [...tasks]
    updatedTasks.splice(index,1)
    setTasks(updatedTasks)
    setEditingTask(null)
    setEditedTask('')
  }

  const startEditing = (index,task)=>{
    setEditingTask(index)
    setEditedTask(task)
  }

  const saveEditedTask = (index)=>{
    const updatedTasks = [tasks]
    updatedTasks[index] = editedTask
    setTasks(updatedTasks)
    setEditingTask(null)
    setEditedTask('')
  }
  return (
    <div>
      <div className="container mx-auto mt-52 p-2 rounded-md  w-1/3 h-1/2 bg-amber-100">
      <h1 className='text-3xl font-bold mb-4 bg-amber-100 text-center'>To-Do List</h1>
      <div className="flex mb-4 bg-amber-100 ">
        <input type="text" className='border rounded-md p-2 mr-2 flex-1 bg-white' placeholder='Add a new task' value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
        <button className='bg-blue-500 text-white p-2 rounded' onClick={addTask}>Add</button>
      </div>
      <ul className='bg-amber-100' >
        {
          tasks.map((task,index)=>(
          <li key={index} className='bg-amber-100 flex items-center mb-2'>
            <p className='mr-4 bg-amber-100'>{index+1}.</p>
            {editingTask === index?(
              <>
              <input type="text" className='border rounded-md p-2 mr-2 flex-1 bg-white' value={editedTask} onChange={(e)=>setEditedTask(e.target.value)} />
          <button className='bg-green-500 text-white p-1 mr-1 rounded' onClick={()=>saveEditedTask(index)}>Save</button>
          <button className='bg-gray-500 text-white p-1 mr-1 rounded' onClick={()=>setEditingTask(null)}>Cancel</button>
              </>
            ):(
              <>
               <span className='flex-1 bg-amber-100 border p-2 mr-6 rounded border-black' >{task} </span>
            <button className='bg-yellow-500 text-white p-1 mr-1 rounded' onClick={()=> startEditing(index,task)}>Edit</button>
            <button className='bg-red-500 text-white p-1 rounded' onClick={()=>removeTask(index)}>Remove</button>
              </>
            )}
          </li>
          ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
