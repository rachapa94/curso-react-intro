import React from 'react';
import { FaTrashCan } from "react-icons/fa6";

function DeleteIcon(props) {
    const {  onDelete  } = props;
    return (
        <>
        <span className='Icon Icon-svg Icon-container-delete'>
        <FaTrashCan 
            onClick= {onDelete}
            />
        </span>

        </>
    );
}

export { DeleteIcon }

// import React from 'react';
// import { TodoIcon } from '../TodoIcon/TodoIcon';

// function DeleteIcon({ onDelete}) {
//     return (
//         <TodoIcon 
//             type="delete"
//             color="gray"
//             onClick={onDelete}
//         />
//     );
// }

// export { DeleteIcon }