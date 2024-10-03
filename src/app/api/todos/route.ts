import {NextRequest, NextResponse} from 'next/server';

let nextTodoId = 0;

export interface Todo {
  title: string;
  completed: boolean;
  id?: number;
}

let todos: Todo[] = [];

export const GET = async () => {
  return NextResponse.json(todos);
};

export const POST = async (request: NextRequest) => {
  const todo: Todo = await request.json();
  const newTodo = {...todo, id: ++nextTodoId};
  todos.push(newTodo);
  return NextResponse.json(newTodo);
};

export const PUT = async (request: NextRequest) => {
  const todo: Todo = await request.json();
  const newTodos = todos.map((t) => (todo.id === t.id ? todo : t));
  todos = newTodos;
  return NextResponse.json(newTodos);
};

export const DELETE = async (request: NextRequest) => {
  const todo: Todo = await request.json();
  const newTodos = todos.filter((t) => todo.id !== t.id);
  todos = newTodos;
  return NextResponse.json(newTodos);
};
