import React, { useRef, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({todo, handleUpdateTodo}) => {
  const {updateDescription, onInputChange} = useForm({
    updateDescription : todo.description
  });

  const [disable, setDisable] = useState(true)
  const focusInputRef = useRef() 

  const onSubmitUpdate = e =>{
    e.preventDefault()
    const id = todo.id
    const description = updateDescription
    handleUpdateTodo(id, description)
    setDisable(!disable)
    focusInputRef.current.focus()
    }
  return (
    <form onSubmit={onSubmitUpdate}>
    <input type ="text" 
    className={`input-update ${
      todo.isDone ? 'text-decoration-dashed' : ''
    }`}
    name="updateDescription" 
    value={updateDescription}
    onChange={onInputChange}
    placeholder="Ingrese la tarea" 
    readOnly={disable}
    ref={focusInputRef}
    />
    <button className='btn-edit' type='submit'><FaRegEdit /></button>
    </form>
  );
}
