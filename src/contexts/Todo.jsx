import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext =  React.createContext();

function TodoProvider({ children }) {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // la doble negacion es para que se convierta en un booleano
  //const completedTodos = todos.filter(todo => todo.completed).length;
  // esto hace filtrar los todos que esten completados y los cuenta
  //const uncompletedTodos = todos.filter(todo => !todo.completed).length;
  const totalTodos = todos.length;

  // useEffect(() => {
  //   console.log("Looooooooooog 2");
  // }, [totalTodos]);


  const[searchValue, setSearchValue] = React.useState("");
  const[openModal, setOpenModal] = React.useState(false);

  const searchedTodos = todos.filter(
    (todo) => {
      // return todo.text.toLowerCase().includes(searchValue.toLowerCase())


      // función texto sin tildes
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };

      const todoText = noTildes(todo.text.toLowerCase());;
      const searchText = noTildes(searchValue.toLowerCase());

      return todoText.includes(searchText)
    }
  );


  
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
    setOpenModal(false);
  }

  //Filter devuelve un nuevo array con los elementos 
  //que cumplan la condición con el return true

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    //Crea una copia de los todos/ array
    //newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    //Crea una copia de los todos/ array
    //splice borra 1 todo(array) a partir de un indice
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos, 
            totalTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

// function TodoConsumer() {
//     return (
//         <TodoContext.Consumer>
            
//         </TodoContext.Consumer>
//     )
// }

export { TodoProvider, TodoContext }






