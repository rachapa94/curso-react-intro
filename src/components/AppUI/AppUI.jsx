import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { TodoContext }  from '../../contexts/Todo';
import { Modal } from '../Modal/Modal';
import { FaClipboardCheck } from 'react-icons/fa6';
import { TodoForm } from '../TodoForm/TodoForm';


function AppUI() {

  ////////CONTEXTO creando una constante para el contexto
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>

    {/* <TodoCounter 
    completed = { completedTodos } 
    total = { totalTodos } 
    />

    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    /> */}

    
    <h1><FaClipboardCheck/> Lista de Tareas</h1>
    <div className='search--container'>
      <TodoSearch/>
      <CreateTodoButton 
      setOpenModal={setOpenModal}
      openModal={openModal}
      />
    </div>

    <TodoCounter/>

    {/* (1) 
(1) Para imprimir un array con su componente hay que crear un.map() 
y dentro de el poner el componente con sus props, 
recuerda poner el key diferente para cada uno de los componentes*/


////////CONTEXTO forma tradicional envolviendo con TodoContext.Consumer
}     
    <TodoContext.Consumer>
      {({
        loading,
        error,
        searchedTodos, 
        completeTodo, 
        deleteTodo,
      }) => (

        <>
        
          <TodoList>
            { loading && <><TodosLoading/><TodosLoading/><TodosLoading/></> }
            { error && <TodosError/> }
            { (!loading && searchedTodos.length === 0 )&&<TodosEmpty/>}
          {searchedTodos.map(todo => (
            
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          </TodoList>
        
        </>
      )}
    </TodoContext.Consumer>



    

    { openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
    )}


     
    </React.Fragment>
  );
}

export { AppUI };