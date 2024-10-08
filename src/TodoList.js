import './TodoList.css'

function Todolist(props){
    return (
        <ul className='TodoList'>
            {props.children}
        </ul>
    );
    }
    export {Todolist};