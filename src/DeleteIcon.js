import React from "react";
import {TodoIcon} from './TodoIcon';

function DeleteIcon(Complete){
    return (
        <TodoIcon 
        type="delete"
        color={Complete ? 'gray' : 'red'}
        />
    );}

export {DeleteIcon};