
import React, {useState, useRef} from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'

//{id: 1, name: 'Todo 1', complete: false}
function App() {
const [todos, setTodos] = useState([])
const todoNameRef = useRef()

function handleAddTodo(e) {
  const name = todoNameRef.current.value
  if(name === '') return
  setTodos(prevTodos => {
    return [...prevTodos,  { id: 1, name: name, complete: false}]
  })
  todoNameRef.ref.current.value = null
}

return (
  //Fragment, enables function to return more than one element 
  <>
    <TodoList todos = {todos}/>
    <input ref={todoNameRef} type = "text" />
    <button onClick={handleAddTodo}>Add todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
  </>
  )
}

export default App;
