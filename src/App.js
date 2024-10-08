import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { Todolist } from './TodoList';
import { CreateTodoBTN } from './CreateTodoBTN';
import { TodoItem } from './TodoItem';
import React from 'react';
import './App.css';

const defaultTodos = [
{text:'Cortar cebolla', Complete: true},
{text:'Tomar el curso de react', Complete: false},
{text:'Llorar con la Llorona', Complete: false},
{text:'LALALALA', Complete: false},
{text:'Apecillo', Complete: true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completeTodos = todos.filter(todo => !!todo.Complete).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = React.useState('');
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase(); 
    return todoText.includes(searchText);
  })

  const todoComplete = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[indexTodo].Complete = true;
    setTodos(newTodos);
  }

  const todoDelete = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
  }
  return (
    <React.Fragment>
      <TodoCounter Complete={completeTodos} Total={totalTodos}/>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <Todolist>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          Complete={todo.Complete}
          onComplete={() => todoComplete(todo.text)}
          onDelete={() => todoDelete(todo.text)}

          />
        ))}
      </Todolist>
      <CreateTodoBTN/>
    </React.Fragment>
  );
}

export default App;
