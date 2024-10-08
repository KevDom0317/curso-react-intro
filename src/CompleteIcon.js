import React from "react";
import {TodoIcon} from './TodoIcon';

function CompleteIcon(Complete){
    return (
        <TodoIcon 
        type="check"
        color={Complete ? 'green' : 'gray'}
        />
    );
}

export {CompleteIcon};