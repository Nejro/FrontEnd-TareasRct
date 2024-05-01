import React from 'react'
import { BsTrash } from "react-icons/bs";
import { TodoUpdate } from './TodoUpdate';
 
export const TodoItem = (
  {
    todo, 
    handleUpdateTodo, 
    handleDeleteTodo,
    handleCompleteTodo,
  }
) => {
  return (
    <li>
    <span onClick={() =>handleCompleteTodo(todo.id)} >
    <label
					className={`container-done ${todo.isDone ? 'active' : ''}`}
				></label>
    </span>
    <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo}/>
    <button className='btn-delete' onClick={() => handleDeleteTodo(todo.id)}><BsTrash/></button>
</li>
  )
}
