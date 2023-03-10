import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

const Dashboard =()=>{
      
    

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const handleInputChange = (event) => {
      setNewTodo(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (newTodo === '') return;
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    };
  
    const handleTodoClick = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    const handleTodoDelete = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };


    const [auth, setAuth] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        var auth = localStorage.getItem('email');
        setAuth(auth);
    },
    [])
    if(auth===null){
        navigate(`/login`);
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    }


    return (
             
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleTodoClick(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>


      
    )
}
export default Dashboard;