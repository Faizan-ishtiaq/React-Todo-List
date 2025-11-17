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
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
      
      <input 
         type='text'
         className='todo-input'
         placeholder='Add your Todos'
         value={newTodo}
         onChange={(e)=>setNewTodos(e.target.value)}
         />
         
          <button type='submit' className='add-btn'>Add Todo</button>
      </form>
      <ul className='todo-list'>
        {todos.map((todos,index)=>(
          <li key={index} className='todo-item'>
            <span style={{ textDecoration: todos.completed ? 'line-through': 'none' }}>{todos.text}</span>
            <button className="delete-btn" onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoList
