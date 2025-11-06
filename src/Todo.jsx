import {useState} from 'react'

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
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
      
      <input 
         type='text'
         placeholder='Add your Todos'
         value={newTodo}
         onChange={(e)=>setNewTodos(e.target.value)}
         />
         
          <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todos,index)=>(
          <li key={index}>
            <span style={{ textDecoration: todos.completed ? 'line-through': 'none' }}>{todos.text}</span>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoList
