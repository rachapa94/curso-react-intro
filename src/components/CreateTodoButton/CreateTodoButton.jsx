import "./CreateTodoButton.css";
function CreateTodoButton ({setOpenModal, openModal}) {
    return (
    <button 
    className="CreateTodoButton"
    onClick={() => {
         setOpenModal(!openModal)
        // setOpenModal(prevState => !prevState)
    }}
    ><span>+</span></button>
    );
}

export { CreateTodoButton }
