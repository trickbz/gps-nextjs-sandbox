'use client';

import {Todo} from '@/app/api/todos/route';
import React, {useEffect, useState, useCallback, ChangeEvent} from 'react';

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = useCallback(async () => {
    const todos = await fetch('/api/todos').then((t) => t.json());
    console.log('todos', todos);
    setTodos(todos);
  }, []);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const addTodo = useCallback(
    async (todo: Todo) => {
      await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      setNewTodoText(() => '');
      await fetchTodos();
    },
    [fetchTodos],
  );

  const updateTodo = useCallback(
    async (todo: Todo) => {
      await fetch('/api/todos', {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchTodos();
    },
    [fetchTodos],
  );

  const deleteTodo = useCallback(
    async (todo: Todo) => {
      await fetch('/api/todos', {
        method: 'DELETE',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchTodos();
    },
    [fetchTodos],
  );

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodoClick = () => {
    addTodo({title: newTodoText, completed: false});
  };

  const handleNewTodoTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewTodoText(value);
  };

  const handCompletedChange = (todo: Todo) => {
    const updatedTodo: Todo = {...todo, completed: !todo.completed};
    updateTodo(updatedTodo);
  };

  const handleDeleteClick = (todo: Todo) => {
    deleteTodo(todo);
  };

  return (
    <div>
      <div className='mb-4 text-2xl font-semibold'>
        Simple todo app using API routes
      </div>
      <div className='mb-2 bg-yellow-100 p-2'>
        <input
          onChange={handleNewTodoTextChanged}
          type='text'
          value={newTodoText}
          className='mr-1'
        />
        <button
          onClick={handleAddTodoClick}
          disabled={newTodoText.length === 0}
        >
          Add todo
        </button>
      </div>
      <div className='flex flex-col bg-yellow-100 p-2'>
        {todos.map((todo: Todo) => {
          return (
            <div key={todo.id} className='flex mb-1 last:mb-0'>
              <input
                type='checkbox'
                checked={todo.completed}
                className='mr-2'
                onChange={() => handCompletedChange(todo)}
              />
              <div className='mr-1'>{todo.title}</div>
              <button
                className='pl-1 pr-1'
                onClick={() => handleDeleteClick(todo)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
