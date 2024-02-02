import React from "react";
import "./TodoForm.css";
import { TodoContext }  from '../../contexts/Todo';

function TodoForm() {

    const { setOpenModal, addTodo } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const [newTodoValue, setNewTodoValue] = React.useState("");

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva Tarea</label>

            <textarea
            placeholder="Escribe una nueva tarea"
            value = {newTodoValue}
            onChange={onChange}
            />
            
            <div className="TodoForm-button--container">
                <button
                    className="TodoForm-button cancel"
                    type="button"
                    onClick={onCancel}
                    >
                Cancelar
                </button>

                <button
                    className="TodoForm-button add"
                    type="submit"
                    >
                Agregar
                </button>
            </div>
            
 
        </form>
    );
}

export { TodoForm };
    