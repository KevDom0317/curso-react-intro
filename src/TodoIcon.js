import {ReactComponent as CheckSvg} from './done.svg'
import {ReactComponent as DeleteSvg} from './delete.svg'
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <CheckSvg className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSvg className='Icon-svg'fill={color}/>
}

function TodoIcon ({type, color}){
    return (
        <span className={`Icon-container Icon-container${type}`}>
            {iconTypes[type](color)}
        </span>
    ); 
}

export {TodoIcon};