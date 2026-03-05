import {useState} from 'react'
import './Todo.css'


function TodoList() {
   
    const [newTodo,setNewTodos] = useState('')
    const [todos,setTodos] =useState([])

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(newTodo){
        setTodos([...todos,{text:newTodo,completed:false}])
        setNewTodos('')
      }
    }
    const handleDelete=(index)=>{
      setTodos(todos.filter((todo,i)=> i !== index))
    }

  const handleToggle=(index)=>{
    setTodos(todos.map((todo,i)=>
     i == index ? {...todo,completed:!todo.completed}: todo
    
    ))
  }

  const handleReset=()=>setTodos([])


  return (
    <div className='todo-container'>
      
      <form className='form' onSubmit={handleSubmit}>
      <h1>Get Things Done!</h1>
      <p className='length'> Total Task : {todos.length}</p>
      <input 
         type='text'
         className='todo-input'
         placeholder='What is the task today?'
         value={newTodo}
         onChange={(e)=>setNewTodos(e.target.value)}
          
         />
         <div className='buttons'>
          <button type='submit' className='add-btn'>Add Task</button>
          <button className='add-btn' onClick={handleReset}>Reset</button>
          </div>
        
     
      <ul className='todo-list'>
        {todos.map((todos,index)=>(
          <li key={index} className='todo-item'>
             <span onClick={()=>handleToggle(index)} className={todos.completed ? "completed" :""}>{todos.text}</span> 
            <button className="delete-btn" onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
       </form>

    </div>
  )
}

export default TodoList