import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App : React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
  };
  
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
