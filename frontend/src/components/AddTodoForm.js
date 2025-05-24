import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }
    onAddTodo({ title, description });
    setTitle('');
    setDescription('');
    setError(''); // Clear error on successful submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {error && (
        <div className="mb-3 p-2 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md">
          {error}
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          value={title}
          onChange={handleTitleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
          placeholder="e.g., Buy groceries"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
        <textarea 
          name="description" 
          id="description" 
          rows="3" 
          value={description}
          onChange={handleDescriptionChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="e.g., Milk, eggs, bread"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;
