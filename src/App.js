import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { Todolist } from './TodoList';
import { CreateTodoBTN } from './CreateTodoBTN';
import { TodoItem } from './TodoItem';
import React from 'react';
import './App.css';

const defaultTodos = [
{text:'Cortar cebolla', Complete: false},
{text:'Tomar el curso de react', Complete: false},
{text:'Llorar con la Llorona', Complete: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter Complete={16} Total={25}/>
      <TodoSearch/>
      <Todolist>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} Complete={todo.Complete}/>
        ))}
      </Todolist>
      <CreateTodoBTN/>
    </React.Fragment>
  );
}

export default App;
