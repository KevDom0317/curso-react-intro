import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import './TodoItem.css'

function TodoItem(props){
    return (
    <li className='TodoItem'>
        <CompleteIcon
        Complete={props.Complete}
        />
        {/* <span className={`Icon Icon-check
            ${props.Complete && "Icon-check--active"}`}
            onClick={props.onComplete}
            >
                V
        </span> */}
        <p className={`TodoItem-p 
            ${props.Complete && "TodoItem-p--complete"}`}>
        {props.text}
        </p>
        <DeleteIcon
        Complete={props.Complete}
        />
        {/* <span className="Icon Icon-delete"
            onClick={props.onDelete}
        >
        x
        </span> */}
    </li>
    );
}
export {TodoItem};