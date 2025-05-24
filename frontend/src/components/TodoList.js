import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  if (!todos || todos.length === 0) {
    return (
      <div className="text-center p-4 border rounded-lg shadow-sm bg-white">
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* <h2 className="text-2xl font-semibold mb-3 text-gray-700">Tasks</h2> */}
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggleComplete={onToggleComplete} 
          onDeleteTodo={onDeleteTodo} 
        />
      ))}
    </div>
  );
}

export default TodoList;
