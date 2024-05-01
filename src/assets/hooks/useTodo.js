import { useEffect, useState } from "react";
import axios from 'axios';

export const useTodo = () => {
    const [todos, setTodos] = useState([]);
   

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:4000/api/tasks/getAll');
            setTodos(response.data);
        };

        fetchTodos();
    }, []);

    const handleNewTodo = async todo => {
    
        const response = await axios.post('http://localhost:4000/api/tasks/add', todo);
        console.log('Response:', response);
        const newTodo = response.data.todo ? response.data.todo : response.data;
        console.log('New Todo:', newTodo);
        if (newTodo){
            setTodos(prevTodos => [...prevTodos, response.data]);
            window.location.reload()
        } else {
            console.error('La API no devolvió la nueva tarea');
        }
      };

    const handleDeleteTodo = async id => {
        await axios.delete(`http://localhost:4000/api/tasks/deleteById/${id}`);
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleCompleteTodo = async id => {
        const todo = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todo, isDone: !todo.isDone };
    
        // Espera a que se complete la solicitud PUT antes de actualizar el estado
        const response = await axios.put(`http://localhost:4000/api/tasks/updateById/${id}`, updatedTodo);
    
        if (response.status === 200) {
            setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? updatedTodo : todo));
        } else {
            console.error('Error updating todo:', response);
        }
    };

    const handleUpdateTodo = async (id, description) => {
        const todo = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todo, description };
        await axios.put(`http://localhost:4000/api/tasks/updateById/${id}`, updatedTodo);
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? updatedTodo : todo));
    };

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.isDone).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }
};