import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import './App.css';

const API_URL = 'http://localhost:8000/api/todos/';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch todos. Please ensure the backend server is running and accessible.');
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const handleAddTodo = (todoData) => {
    axios.post(API_URL, todoData)
      .then(response => {
        setTodos([...todos, response.data]);
        setError(null); // Clear any previous errors
      })
      .catch(err => {
        setError('Failed to add todo. Please try again.');
        console.error("Add error:", err);
      });
  };

  const handleToggleComplete = (id, completed) => {
    axios.put(`${API_URL}${id}/`, { completed: !completed })
      .then(response => {
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
        setError(null);
      })
      .catch(err => {
        setError('Failed to update todo status. Please try again.');
        console.error("Toggle complete error:", err);
      });
  };

  const handleDeleteTodo = (id) => {
    axios.delete(`${API_URL}${id}/`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
        setError(null);
      })
      .catch(err => {
        setError('Failed to delete todo. Please try again.');
        console.error("Delete error:", err);
      });
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Todo List</h1>
      </header>
      <main>
        <AddTodoForm onAddTodo={handleAddTodo} />
        
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {!loading && !error && (
          <TodoList 
            todos={todos} 
            onToggleComplete={handleToggleComplete} 
            onDeleteTodo={handleDeleteTodo} 
          />
        )}
      </main>
      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>Simple Todo App with React & Django</p>
      </footer>
    </div>
  );
}

export default App;
