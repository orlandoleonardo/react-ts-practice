import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';
import InputField from './components/InputField';
import { Todo } from './components/model';

const App : React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [state, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
  };
  
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
