import React, {useEffect} from 'react';

function useLocalStorage(itemName, initialValue) {
  
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
  
    

    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify([]));
            parsedItem = initialValue;
          }
          else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false); 
        }
        catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 1000
      );
    }, []);
  
    
    
  
    const saveItem = (newItem) => {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } 
  
    return { 
      item, 
      saveItem, 
      loading, 
      error
    };
  
  }

  export { useLocalStorage }

//   const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de introducción a React.js', completed: false },
//   { text: 'Llorar con la llorona', completed:false },
//   { text: 'Quitarme el sueño', completed: false },
//   { text: 'Ir por Coca Cola', completed: true }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');