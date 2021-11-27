import React from "react";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import "./ToDoItem.css";

function ToDoItem(props) {
    return (
        <li className="ToDoItem">
            <CompleteIcon completed={props.completed} 
                        onComplete={props.onComplete}/>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
            {props.text}
            </p>
            <DeleteIcon onDelete={props.onDelete}/>
        </li>
    );
}

export {ToDoItem}; 