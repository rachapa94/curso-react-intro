import React from 'react';
import "./TodoSearch.css"
import { TodoContext } from '../../contexts/Todo';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

    return <input 
    className="TodoSearch" 
    placeholder="Buscar tareas.." 
    value = {searchValue}
    onChange = {  (event) => {
        setSearchValue(event.target.value);
    }}
    />
  }

export { TodoSearch }