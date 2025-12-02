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
      const newTodos =[...todos];
      newTodos[index].completed= !newTodos[index].completed
      setTodos(newTodos)
    }


  return (
    <div className='todo-container'>
      
      <form className='form' onSubmit={handleSubmit}>
      <h1>Get Things Done!</h1>
      <input 
         type='text'
         className='todo-input'
         placeholder='What is the task today?'
         value={newTodo}
         onChange={(e)=>setNewTodos(e.target.value)}
          
         />
          <button type='submit' className='add-btn'>Add Task</button>
        
     
      <ul className='todo-list'>
        {todos.map((todos,index)=>(
          <li key={index} className='todo-item'>
            <span style={{ textDecoration: todos.completed ? 'line-through': 'none' }}>{todos.text}</span>
            <button className="delete-btn" onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
       </form>

    </div>
  )
}

export default TodoList