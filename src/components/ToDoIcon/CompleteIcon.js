import React from "react";
import { ToDoIcon } from ".";

function CompleteIcon({ completed, onComplete }) {

    return (
        <ToDoIcon 
            type="check"
            color={completed ? '#03ac6f' : '#31215c'} 
            onClick={onComplete}
        />
    );
}

export {CompleteIcon};