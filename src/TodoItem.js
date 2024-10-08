import './TodoItem.css'

function TodoItem(props){
    return (
    <li className='TodoItem'>
        <span className={`Icon Icon-check
            ${props.Complete && "Icon-check--active"}`}
            onClick={props.onComplete}
            >
                V
        </span>
        <p className={`TodoItem-p
        TodoItem-p--complete`}>
        {props.text}
        </p>
        <span className="Icon Icon-delete">
        x
        </span>
    </li>
    );
}
export {TodoItem};