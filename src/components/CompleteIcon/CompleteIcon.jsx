import React from 'react';
import { IoIosCheckboxOutline } from "react-icons/io";
// import { TodoIcon } from './TodoIcon';

// function CompleteIcon() {
//     return (
//         <TodoIcon 
//             type="check"
//             color="gray"
//         />
//     );
// }

function CompleteIcon(props) {
    const { className, classNameSVG, onClick  } = props;
    return (
        <>
        <span className={className}>
        <IoIosCheckboxOutline
            className={classNameSVG}
            onClick= {onClick}
            />
        </span>

        </>
    );
}

export { CompleteIcon }