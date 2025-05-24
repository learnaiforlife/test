import React from 'react';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  const { id, title, description, completed } = todo;

  const handleToggle = () => {
    onToggleComplete(id, completed);
  };

  const handleDelete = () => {
    onDeleteTodo(id);
  };

  return (
    <div className={`p-4 mb-3 border rounded-lg shadow-sm flex justify-between items-start transition-all duration-150 ease-in-out ${completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
      <div className="flex-grow">
        <h3 className={`text-lg font-semibold ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-sm mt-1 ${completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
        <span className={`text-xs font-medium mt-2 inline-block px-2 py-0.5 rounded-full ${completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
          {completed ? 'Completed' : 'Pending'}
        </span>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-2 sm:mt-0 ml-4">
        <button 
          onClick={handleToggle} 
          className={`w-full sm:w-auto text-sm py-2 px-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 transition ease-in-out duration-150 mb-2 sm:mb-0 ${completed ? 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400' : 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'}`}
        >
          {completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button 
          onClick={handleDelete} 
          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition ease-in-out duration-150"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
