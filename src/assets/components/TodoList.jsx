import React from 'react'
import { TodoItem } from './TodoItem'
import { useState } from "react";
import { PaginationR } from './PaginationR';

export const TodoList = ({
  todos, 
  handleUpdateTodo, 
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
 
 
  const totalTask = todos.length;
  const [taskPerPage, SetTaskPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * taskPerPage
  const firstIndex=   lastIndex - taskPerPage

  return (
    <>
    <ul>
      {todos.map(todo =>(
        <TodoItem
        key={todo.id}
        todo={todo}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        />
      )).slice(firstIndex, lastIndex)}
           
    </ul>
    <PaginationR 
    taskPerPage={taskPerPage} 
    currentPage={currentPage} 
    setCurrentPage={setCurrentPage} 
    totalTask = {totalTask}
    />
    
       </>
    
  )
}
