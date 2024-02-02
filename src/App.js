import React from 'react';
import { AppUI } from './components/AppUI/AppUI';
import { TodoProvider } from './contexts/Todo';



function App() {
  

  return (
    // <AppUI
    //   // loading={loading}
    //   // error={error}
    //   // totalTodos={totalTodos}
    //   // completedTodos={completedTodos}
    //   // searchValue={searchValue}
    //   // setSearchValue={setSearchValue}
    //   // searchedTodos={searchedTodos}
    //   // completeTodo={completeTodo}
    //   // deleteTodo={deleteTodo}
    // />
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}



export default App;
