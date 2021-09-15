import React from "react";
import {ReactComponent as CheckIcon} from '../../resources/icons/cheque.svg';
import {ReactComponent as DeleteIcon} from '../../resources/icons/delete.svg';
import './ToDoIcon.css';

function ToDoIcon({type, color = '#432679', onClick}){
    const iconTypes = {
        "check": color => ( <CheckIcon className="Icon-svg Icon-svg--check" fill={color} /> ),
        "delete": color => ( <DeleteIcon className="Icon-svg Icon-svg--delete" fill={color} /> )
    }

    return (
        <span className={`Icon-container Icon-container--${type}`}
              onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {ToDoIcon};