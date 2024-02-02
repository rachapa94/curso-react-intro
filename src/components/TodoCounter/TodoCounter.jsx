import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../contexts/Todo';
import { FaCheckCircle } from "react-icons/fa";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <>


  
    <div className='TodoCounter'>
      

      <span>
        { completedTodos === totalTodos && totalTodos > 0 ? (
          <>
            <strong className='completed'>Completado  <FaCheckCircle/></strong>
          </>
        ) : (
          <>
            <strong className='completed'>Completado: </strong> {completedTodos} / {totalTodos}
          </>
        )}  
      </span>

      { completedTodos !== totalTodos && (

        <>
          <span>
                <strong>Tareas pendientes: </strong> {totalTodos-completedTodos}
          </span>
        </>
      )
      }


    </div>


  </>
  );
}
export {TodoCounter};




// Styles inline:

// function TodoCounter({ total, completed }) {
//   return (
//   <h1 style= {{
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: '0',
//     padding: '48px'
//   }}>
//     Has completado { completed } de { total } TODOs
//   </h1>
//   );
// }
// export {TodoCounter};

// const estilos = {
//   backgroundColor: '#ffdd57'
// }

// function TodoCounter({ total, completed }) {
//     return (
//     <h1 style= {estilos}>
//       Has completado { completed } de { total } TODOs
//     </h1>
//     );
//   }
//   export {TodoCounter};