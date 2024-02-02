import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import './TodoItem.css';
import '../TodoIcon/TodoIcon.css';

function TodoItem({ text, completed, onComplete, onDelete}) {
    return(
          <li className="TodoItem">
            {/* <span className="Icon Icon-check Icon-check--active">V</span> */}
            
            {/* <span 
            className={`Icon Icon-check ${completed && "Icon-check--active"}`}
            onClick={onComplete}
            >V</span> */}

            <CompleteIcon
              className={`Icon Icon-container-check ${completed && "active"}`}
              classNameSVG={'Icon-svg'}
              onClick={onComplete}
            />
            <p className={`${completed ? "complete" : ""}`}>{ text  }</p>

            <DeleteIcon 
            onDelete={onDelete}
            />
            
            {/* <span 
            className="Icon Icon-delete"
            onClick={onDelete}
            > X</span> */}


          </li>
    );
  }
  export { TodoItem }